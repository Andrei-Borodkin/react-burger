import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionSignIn } from "../actionCreators/actionSignIn"
import { loginRequest } from '../../../utils/auth-api';
import { setCookie } from '../../../utils/func-cooke';
import { toastSuccess, toastError } from "../../../utils/func";


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
                        setCookie('accessToken', accessToken, { path: '/' });
                        setCookie('refreshToken', refreshToken, { path: '/' });

                        toastSuccess(`Добро пожаловать ${data.user.name}`)
                        dispatch(actionSignIn.setStatusSignIn(data.user.name))
                    }else{
                        toastError(`Ошибка получения токена`)
                    }

                } else {
                    toastError(`Ошибка входа ${data.message}`)
                    dispatch(actionSpinner.loading(false))
                }
            })
            .catch((err) => {
                toastError(err.message)
                dispatch(actionSpinner.loading(false))
            })
        
    }
};