import React, {useEffect} from 'react';
import registerStyles from './register.module.css';
import { EmailInput, PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector, useDispatch } from "react-redux";
import { actionAutReg } from "../services/redux/actionCreators/actionAutReg"
import { actionSpinner } from "../services/redux/actionCreators/actionSpinner"
import { fetchRgistr } from "../services/redux/thunks/thunkReg"
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { autRegSelector } from '../services/redux/selectors/selectorsReg';

const RegisterPage = () => {

    const { name, email, password, statusReg } = useSelector(autRegSelector);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFormChange = (e) => {
        dispatch(actionAutReg.setRegister(e.target.name, e.target.value))
    }

    const onClick = (e) => {
        // пока только на пустоту        
        if (name !=='' && email !=='' && password !=='') dispatch( fetchRgistr() )
            else  toast.error(`Поля формы не могут быть пустыми`,  {duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'}})
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
            <form>
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
                        <Button htmlType="button" type="primary" size="medium" onClick={onClick}>
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