import React, {useEffect} from 'react';
import loginStyles from './login.module.css';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { actionSignIn } from "../services/redux/actionCreators/actionSignIn"
import { actionSpinner } from "../services/redux/actionCreators/actionSpinner"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';
import { fetchSignIn } from "../services/redux/thunks/thunkSignOut"
import toast from 'react-hot-toast';
import { rSignInSelector } from '../services/redux/selectors/selectorsLogin';
import { rFRPEmailSelector } from '../services/redux/selectors/selectorsForgResPas';
import { actionForgResPas } from '../services/redux/actionCreators/actionForgResPas';
import { getCookie } from '../utils/func-cooke';

const LoginPage = () => {

    
    const { email, password, statusSign } = useSelector(rSignInSelector);

    const emailFRP = useSelector(rFRPEmailSelector);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFormChange = (e) => {
        dispatch(actionSignIn.setSignIn(e.target.name, e.target.value))
    }

    const onClick = (e) => {
        // пока только на пустоту        
        if (email !== '' && password !== '') {
            dispatch(fetchSignIn())
        } else {
            toast.error(`Поля формы не могут быть пустыми`, { duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} })
        }
    }

    useEffect(() => {

        if (statusSign)  navigate('/', { replace: true })
        if (emailFRP) dispatch(actionForgResPas.setInitialState())

        return () => { dispatch(actionSpinner.loading(false)) }
    }, [statusSign, navigate, dispatch])

    return (
        <div className={loginStyles.content}>

            <div className={loginStyles.edit}>
                <div className={loginStyles.frame}>
                    <span>Вход</span>
                </div>
                    <EmailInput
                        onChange={onFormChange}
                        value={email}
                        name={'email'}
                        isIcon={false}
                    />
                
                
                    <PasswordInput
                        onChange={onFormChange}
                        value={password}
                        name={'password'}
                        extraClass="mb-2"
                    />
                

                <div className={loginStyles.but}>
                    <Button htmlType="button" type="primary" size="medium" onClick={onClick}>
                        Войти
                    </Button>
                </div>

            </div>
            <div className={loginStyles.actions}>
                <div className={loginStyles.block}>
                    <span className={loginStyles.p}>Вы — новый пользователь?</span>
                    <Link to={{ pathname: `/register` }} className={loginStyles.a}>Зарегистрироваться</Link>
                </div>
            
                <div className={loginStyles.block}>
                    <span className={loginStyles.p}>Забыли пароль?</span>
                    <Link to={{ pathname: `/forgot-password` }} className={loginStyles.a}>Восстановить пароль</Link>
                </div>
            </div>

        </div>
    )

}

export default React.memo(LoginPage)