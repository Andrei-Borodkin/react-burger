import React, {useEffect} from 'react';
import resetStyles from './reset.module.css';
import {  PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionForgResPas } from '../services/redux/actionCreators/actionForgResPas';
import { rFRPSelector } from '../services/redux/selectors/selectorsForgResPas';
import { fetchResPass } from '../services/redux/thunks/thunkResPass';
import { loadingSelector } from '../services/redux/selectors/selectorsSpinner';
import { actionSpinner } from '../services/redux/actionCreators/actionSpinner';


const ResetPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { password, kod, status, statusRes } = useSelector(rFRPSelector);

    const onChange = (e) => {
        dispatch(actionForgResPas.setPassword(e.target.name, e.target.value))
    }

    const onClick = () => {
        dispatch( fetchResPass(password, kod) ) 
    }

    useEffect(() => {
        if (!status) navigate('/forgot-password', { replace: true })
        return () => {
            console.log("setMail");
            if (statusRes) dispatch(actionForgResPas.setInitialState())
        }
    }, [])
    
    useEffect(() => {
        dispatch(actionSpinner.loading(false))
        console.log("actionSpinner2");
    }, [dispatch])

    return (
        <div className={resetStyles.content}>

            <div className={resetStyles.edit}>
                <div className={resetStyles.frame}>
                    <span>Восстановление пароля</span>
                </div>

                <PasswordInput
                    onChange={onChange}
                    value={password}
                    name={'password'}
                    placeholder={'Введите новый пароль'}
                />

                <Input
                    type={'text'}
                    onChange={onChange}
                    value={kod}
                    name={'kod'}
                    placeholder={'Введите код из письма'}
                />

                <div className={resetStyles.but}>
                    <Button htmlType="button" type="primary" size="medium" onClick={onClick}>
                        Сохранить
                    </Button>
                </div>

            </div>
            <div className={resetStyles.actions}>
                <div className={resetStyles.block}></div>
                <div className={resetStyles.block}>
                    <span className={resetStyles.p}>Вспомнили пароль?</span>
                    <Link to={{ pathname: `/login` }} className={resetStyles.a}>Войти</Link>
                </div>
            </div>

        </div>
    )

}

export default React.memo(ResetPage)