import React, { useEffect } from 'react';
import profileStyles from './profile.module.css';
import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux';
import { rSignInSelector } from '../services/redux/selectors/selectorsLogin';
import { actionSignIn } from '../services/redux/actionCreators/actionSignIn';
import { useNavigate } from 'react-router-dom';
import { fetchLogout } from '../services/redux/thunks/thunkLogout';
import { getCookie } from '../utils/func-cooke';

const ProfilePage = () => {

    const { email, name, password, statusSign } = useSelector(rSignInSelector);

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
        dispatch(actionSignIn.setSignIn(e.target.name, e.target.value))
    }

    const exitLogin = () => {
        dispatch(fetchLogout())
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
                    value={name}
                    name={'name'}
                    placeholder="Имя"
                    isIcon={true}
                    extraClass="mb-2"
                />

                <EmailInput
                    onChange={onFormChange}
                    value={email}
                    name={'email'}
                    placeholder="Логин"
                    isIcon={true}
                    extraClass="mb-2"
                />

                <PasswordInput
                    onChange={onFormChange}
                    value={password}
                    name={'password'}
                    icon={'EditIcon'}
                />
            </div>
        </>
    )

}

export default React.memo(ProfilePage)