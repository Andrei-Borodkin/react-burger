import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionSignIn } from "../actionCreators/actionSignIn"
import { loginRequest } from '../../../utils/auth-api';
import { setCookie } from '../../../utils/func-cooke';
import toast from 'react-hot-toast';


export const fetchSignIn = () => {
    return (dispatch, getState, extra) => {

        const {email, password} = getState().rSignIn
        dispatch(actionSpinner.loading(true))

        loginRequest(email, password)
            .then((data) => {
                if (data?.success) {
                    const accessToken = data.accessToken.split('Bearer ')[1];
                    const refreshToken = data.refreshToken

                    if (accessToken && refreshToken) {
                        setCookie('accessToken', accessToken);
                        setCookie('refreshToken', refreshToken);
                        setCookie('name', data.user.name);
                        setCookie('email', data.user.email);

                        toast.success(`Добро пожаловать ${data.user.name}`,  {duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'}});
                        dispatch(actionSignIn.setStatusSignIn(data.user.name))
                    }else{
                        toast.error(`Ошибка получения токена`,  {duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
                    }

                } else {
                    toast.error(`Ошибка входа ${data.message}`,  {duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
                    dispatch(actionSpinner.loading(false))
                }
            })
            .catch((err) => {
                toast.error(err.message, { duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
                dispatch(actionSpinner.loading(false))
            })
        
    }
};