import React, { useEffect } from 'react';
import profileStyles from './profile.module.css';
import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux';
import { rSignInSelector } from '../services/redux/selectors/selectorsLogin';
import { actionSignIn } from '../services/redux/actionCreators/actionSignIn';
import { getCookie } from '../utils/func-cooke';
import { useNavigate } from 'react-router-dom';
import { fetchLogout } from '../services/redux/thunks/thunkLogout';
import { fetchData } from '../services/redux/thunks/thunkIngr';



const ProfilePage = () => {

    const { email, name, statusSign } = useSelector(rSignInSelector);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (statusSign) {
            dispatch(fetchData())
          } else {
            const accessToken = getCookie('accessToken')
            if (accessToken) {
              dispatch(fetchData())
              dispatch(actionSignIn.setStatusSignInRef(getCookie('name'), getCookie('email')))
            } else {
              navigate('/login', { replace: true })
            }
          }
      
    }, [statusSign, dispatch, navigate])


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
                    value={name}
                    name={'name'}
                    placeholder="Имя"
                    isIcon={true}
                    extraClass="mb-2"
                />

                <EmailInput
                    value={email}
                    name={'email'}
                    placeholder="Логин"
                    isIcon={true}
                    extraClass="mb-2"
                />

                <PasswordInput
                    value={'****'}
                    name={'password'}
                    icon={'EditIcon'}
                />
            </div>
        </>
    )

}

export default React.memo(ProfilePage)