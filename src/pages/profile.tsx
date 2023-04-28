import React, { useCallback, useEffect } from 'react';
import profileStyles from './profile.module.css';
import { useDispatch, useSelector } from "../services/redux/store";
import { rSignInSelector } from '../services/redux/selectors/selectorsLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchLogout } from '../services/redux/thunks/thunkLogout';
import { getCookie } from '../utils/func-cooke';
import ProfileComp from '../components/profileComp/ProfileComp';
import FeedCard from '../components/feedCard/FeedCard';
import { showIngrSelector } from '../services/redux/selectors/selectorsIngr';
import { actionIngr } from '../services/redux/actionCreators/actionIngr';
import Modal from '../components/modal/Modal';
import FeddOrderDetail from '../components/feed-order-detail/FeddOrderDetail';
import { actionWS } from '../services/redux/actionCreators/actionWS';
import { wsUrlAuth } from '../utils/const-url';
import { ordersSelectorWS } from '../services/redux/selectors/selectorsWS';
import { fetchGetUser } from '../services/redux/thunks/thunkGetUser';
import { Torders } from '../utils/types';

const ProfilePage = () => {

    const { statusSign } = useSelector(rSignInSelector);

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const accessToken = getCookie('accessToken')
        if (!statusSign && !accessToken) {
            //navigate('/login', { replace: true })
            navigate('/login')
        }
        if (!statusSign && accessToken) {
            dispatch(fetchGetUser())
        }

        dispatch(actionWS.socketConnect(`${wsUrlAuth}${accessToken}`));
        return () => { dispatch(actionWS.socketOnclose()) }
    }, [])

    const orders = useSelector(ordersSelectorWS)
    const isShow = useSelector(showIngrSelector)

    const close = useCallback(() => {
        dispatch(actionIngr.setShowIngr(false))
        navigate(-1);
    }, [dispatch])


    const exitLogin = () => { dispatch(fetchLogout()) }
    const onClickProfil = () => { navigate('/profile') }
    const onClickProfilOrder = () => { navigate('/profile/orders') }

    const caption = location.pathname === "/profile" ? 'В этом разделе вы можете изменить свои персональные данные'
        : 'В этом разделе вы можете просмотреть свою историю заказов';
    return (
        <>
            <div className={profileStyles.navigation}>
                <div className={profileStyles.frame} >
                    <div
                        className={profileStyles.text}
                        onClick={onClickProfil}
                        style={{ color: location.pathname === "/profile" ? 'white' : '#8585AD' }}
                    >
                        Профиль
                    </div>

                </div>
                <div className={profileStyles.frame} >
                    <div className={profileStyles.text}
                        onClick={onClickProfilOrder}
                        style={{ color: location.pathname === "/profile/orders" ? 'white' : '#8585AD' }}
                    >
                        История заказов
                    </div>
                </div>
                <div className={profileStyles.frame}>
                    <div className={profileStyles.text} onClick={exitLogin}>Выход</div>
                </div>
            </div>

            <div className={profileStyles.caption}>
                <div className={profileStyles.ctext}>{caption}</div>
            </div>

            {location.pathname === "/profile" ?
                <ProfileComp /> :
                <div className={profileStyles.orders}>
                    {orders.map((val: Torders, index) => (
                        <div key={val._id} className={profileStyles.ordersWidth}>
                            {index < 50 && <FeedCard orders={val} />}
                        </div>
                    ))}
                </div>
            }

            {isShow && (
                <div>
                    <Modal close={close}> <FeddOrderDetail /></Modal>
                </div>
            )}

        </>
    )

}

export default React.memo(ProfilePage)