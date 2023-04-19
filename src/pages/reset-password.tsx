import React, {ChangeEvent, FormEvent, useEffect} from 'react';
import resetStyles from './reset.module.css';
import {  PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "../services/redux/store";
import { actionForgResPas } from '../services/redux/actionCreators/actionForgResPas';
import { rFRPSelector } from '../services/redux/selectors/selectorsForgResPas';
import { fetchResPass } from '../services/redux/thunks/thunkResPass';
import { actionSpinner } from '../services/redux/actionCreators/actionSpinner';


const ResetPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { password, kod, status, statusRes } = useSelector(rFRPSelector);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actionForgResPas.setPassword(e.target.name, e.target.value))
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch( fetchResPass(password, kod) ) 
    }

    useEffect(() => {
        if (!status) navigate('/forgot-password', { replace: true })
        if (statusRes) navigate('/login', { replace: true })
        
        return () => {
            if (statusRes) dispatch(actionForgResPas.setInitialState())
        }
    }, [statusRes, status, dispatch, navigate])
    
    useEffect(() => {
        dispatch(actionSpinner.loading(false))
    }, [dispatch])

    return (
        <form onSubmit={onSubmit}>
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
                    <Button htmlType="submit" type="primary" size="medium" >
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
        </form>
    )

}

export default React.memo(ResetPage)