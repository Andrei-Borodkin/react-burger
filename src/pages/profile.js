import React, { useEffect } from 'react';
import profileStyles from './profile.module.css';
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux';
import { rSignInSelector } from '../services/redux/selectors/selectorsLogin';
import { actionSignIn } from '../services/redux/actionCreators/actionSignIn';
import { useNavigate } from 'react-router-dom';
import { fetchLogout } from '../services/redux/thunks/thunkLogout';
import { getCookie } from '../utils/func-cooke';
import { fetchSignInNew } from '../services/redux/thunks/thunkSignNew';

const ProfilePage = () => {

    const { email, name, password, emailNew, nameNew, passwordNew, statusSign } = useSelector(rSignInSelector);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!statusSign) {
            const accessToken = getCookie('accessToken')
            if (!accessToken) {
                navigate('/login', { replace: true })
            }
        }
    }, [statusSign])


    const onFormChange = (e) => {
        dispatch(actionSignIn.setSignInNew(e.target.name, e.target.value))
    }

    const exitLogin = () => {
        dispatch(fetchLogout())
    }
    const onClickClear = () => {
        dispatch(actionSignIn.clSignInNew())

    }

    const onClickSave = () => {
        dispatch(fetchSignInNew())
    }


    const color = window.location.pathname === "/profile" ? 'white' : '';
    return (
        <>
            <div className={profileStyles.navigation}>
                <div className={profileStyles.frame} >
                    <div className={profileStyles.text} style={{ color }}>Профиль</div>
                </div>
                <div className={profileStyles.frame} >
                    <div className={profileStyles.text} >История заказов</div>

                </div>
                <div className={profileStyles.frame}>
                    <div className={profileStyles.text} onClick={exitLogin}>Выход</div>

                </div>
            </div>

            <div className={profileStyles.caption}>
                <div className={profileStyles.ctext}>В этом разделе вы можете изменить свои персональные данные</div>
            </div>

            <div className={profileStyles.edit}>

                <EmailInput
                    onChange={onFormChange}
                    value={nameNew || name}
                    name={'nameNew'}
                    placeholder="Имя"
                    isIcon={true}
                    extraClass="mb-2"
                    error={false}
                />

                <EmailInput
                    onChange={onFormChange}
                    value={emailNew || email}
                    name={'emailNew'}
                    placeholder="Логин"
                    isIcon={true}
                    extraClass="mb-2"
                />

                <PasswordInput
                    onChange={onFormChange}
                    value={passwordNew || password}
                    name={'passwordNew'}
                    icon={'EditIcon'}
                />

                {(nameNew || emailNew || passwordNew) &&
                    <div>
                        <Button htmlType="button" type="secondary" size="small" extraClass="ml-2" onClick={onClickClear}>
                            Отмена
                        </Button>
                        <Button htmlType="button" type="primary" size="small" extraClass="ml-2" onClick={onClickSave}>
                            Сохранить
                        </Button>

                    </div>
                }

            </div>


        </>
    )

}

export default React.memo(ProfilePage)