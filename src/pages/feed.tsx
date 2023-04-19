import React, { useCallback, useEffect } from 'react';
import styles from './feed.module.css';
import FeedCard from '../components/feedCard/FeedCard';
import FeedStats from '../components/fedd-stats/FeedStats';
import Modal from '../components/modal/Modal';
import FeddOrderDetail from '../components/feed-order-detail/FeddOrderDetail';
import { useDispatch, useSelector } from "../services/redux/store";
import { useNavigate } from 'react-router-dom';
import { showIngrSelector } from '../services/redux/selectors/selectorsIngr';
import { actionIngr } from '../services/redux/actionCreators/actionIngr';
import { actionWS } from '../services/redux/actionCreators/actionWS';
import { ordersSelectorWS } from '../services/redux/selectors/selectorsWS';
import { wsUrl } from '../utils/const-url';
import { Torders } from '../utils/types';


const FeedPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const isShow = useSelector(showIngrSelector)
    const orders = useSelector(ordersSelectorWS)

    useEffect(() => {
        dispatch(actionWS.socketConnect(wsUrl));
        return () => { dispatch(actionWS.socketOnclose()) }
    }, [])


    const close = useCallback(() => {
        dispatch(actionIngr.setShowIngr(false))
        navigate(-1);
    }, [dispatch])

    return (
        <>
            <div className={styles.heading}>
                <span className={styles.headingText}>Лента заказов</span>
            </div>

            <div className={styles.orders}>
                <div className={styles.list}>
                    {orders.map((val: Torders, index) => (
                        <div key={val._id} className={styles.listWidth}>
                            {index < 50 && <FeedCard orders={val} />}
                        </div>
                    ))}
                </div>

            </div>

            <FeedStats />

            {isShow && (
                <div>
                    <Modal close={close}> <FeddOrderDetail /></Modal>
                </div>
            )}


        </>

    )
}

export default React.memo(FeedPage)