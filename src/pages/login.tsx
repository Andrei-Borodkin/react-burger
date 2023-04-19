import React, { ChangeEvent, useEffect, FormEvent } from 'react';
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
import { toastError } from '../utils/func';

const LoginPage = () => {


    const { email, password, statusSign } = useSelector(rSignInSelector);

    const emailFRP = useSelector(rFRPEmailSelector);
    const dispatch = useDispatch() as any
    const navigate = useNavigate();

    const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actionSignIn.setSignIn(e.target.name, e.target.value))
    }

    const onSubmit = (e: FormEvent) => {
        // пока только на пустоту  
        e.preventDefault()
        if (email !== '' && password !== '') {
            dispatch(fetchSignIn())
        } else {
            toastError(`Поля формы не могут быть пустыми`)
        }
    }

    useEffect(() => {

        dispatch(actionSpinner.loading(false))
        if (statusSign) navigate('/', { replace: true })
        if (emailFRP) dispatch(actionForgResPas.setInitialState())

        return () => { dispatch(actionSpinner.loading(false)) }
    }, [statusSign, navigate, dispatch])

    return (
        <form onSubmit={onSubmit}>
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
                        <Button htmlType="submit" type="primary" size="medium">
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
        </form>
    )

}

export default React.memo(LoginPage)