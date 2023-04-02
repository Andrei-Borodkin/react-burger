import React, {ChangeEvent, useEffect, FormEvent} from 'react';
import registerStyles from './register.module.css';
import { EmailInput, PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector, useDispatch } from "react-redux";
import { actionAutReg } from "../services/redux/actionCreators/actionAutReg"
import { actionSpinner } from "../services/redux/actionCreators/actionSpinner"
import { fetchRgistr } from "../services/redux/thunks/thunkReg"
import { useNavigate, Link } from 'react-router-dom';
import { autRegSelector } from '../services/redux/selectors/selectorsReg';
import { toastError } from '../utils/func';

const RegisterPage = () => {

    const { name, email, password, statusReg } = useSelector(autRegSelector);

    const dispatch = useDispatch() as any
    const navigate = useNavigate();

    const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actionAutReg.setRegister(e.target.name, e.target.value))
    }

    const onSubmit = (e: FormEvent) => {
        // пока только на пустоту     
        e.preventDefault()   
        if (name !=='' && email !=='' && password !=='') dispatch( fetchRgistr() )
            else  toastError(`Поля формы не могут быть пустыми`)
    }
   
    useEffect(() => {
        if (statusReg) {
           dispatch(actionAutReg.setStatus(false))
           navigate('/login', { replace: true })
        }
        return () => { dispatch(actionSpinner.loading(false)) }
    }, [statusReg, navigate, dispatch])

    return (
        <div className={registerStyles.content}>
            <form onSubmit={onSubmit}>
                <div className={registerStyles.edit}>
                    <div className={registerStyles.frame}>
                        <span>Регистрация</span>
                    </div>

                    <Input
                        type={'text'}
                        onChange={onFormChange}
                        value={name}
                        name="name"
                        placeholder={'Имя'}
                    />

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
                    />


                    <div className={registerStyles.but}>
                        <Button htmlType="submit" type="primary" size="medium" >
                            Зарегистрироваться
                        </Button>
                    </div>

                </div>
            </form>
            <div className={registerStyles.actions}>
                <div className={registerStyles.block}></div>
                <div className={registerStyles.block}>
                    <span className={registerStyles.p}>Уже зарегистрированы?</span>
                    <Link to={{ pathname: `/login` }}  className={registerStyles.a}>Войти</Link>
                </div>
            </div>

        </div>
    )

}

export default React.memo(RegisterPage)