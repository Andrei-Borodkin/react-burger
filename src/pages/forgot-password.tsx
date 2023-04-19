import React, { useEffect, ChangeEvent } from 'react';
import forgotStyles from './forgot.module.css';
import { EmailInput, Button  } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "../services/redux/store";
import { actionSpinner } from '../services/redux/actionCreators/actionSpinner';
import { rFRPSelector } from '../services/redux/selectors/selectorsForgResPas';
import { actionForgResPas } from '../services/redux/actionCreators/actionForgResPas';
import { fetchForgPass } from '../services/redux/thunks/thunkForgPass';


const ForgotPage = () => {
   
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { email, status } = useSelector(rFRPSelector);
 
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actionForgResPas.setMail(e.target.value))
    }

    const onClick = () => {
        dispatch( fetchForgPass(email)) 
    }

    
    useEffect(() => {
        dispatch(actionSpinner.loading(false))
        if (status)  navigate('/reset-password', { replace: true })
    }, [status, navigate])

    return (
        <div className={forgotStyles.content}>

            <div className={forgotStyles.edit}>
                <div className={forgotStyles.frame}>
                    <span>Восстановление пароля</span>
                </div>

                    <EmailInput
                        onChange={onChange}
                        value={email}
                        name={'email'}
                        isIcon={false}
                    />
                    

                <div className={forgotStyles.but}>
                    <Button htmlType="button" type="primary" size="medium" onClick={onClick}>
                        Восстановить
                    </Button>
                </div>

            </div>
            <div className={forgotStyles.actions}>
            <div className={forgotStyles.block}>
                <span className={forgotStyles.p}>Вспомнили пароль?</span>
                <Link to={{ pathname: `/login` }} className={forgotStyles.a}>Войти</Link>
            </div>
            </div>

        </div>
    )

}

export default React.memo(ForgotPage)