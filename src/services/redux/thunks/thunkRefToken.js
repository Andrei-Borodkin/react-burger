import { actionSpinner } from "../actionCreators/actionSpinner"
import { refToken } from '../../../utils/auth-api';
import { getCookie, setCookie, deleteCookie } from '../../../utils/func-cooke';
import toast from 'react-hot-toast';
import { fetchData } from "./thunkIngr";
import { fetchOrder } from "./thunkOrder";


export const fetchRefToken = (err_func) => {
    return (dispatch, getState, extra) => {

        const refreshToken = getCookie('refreshToken')

        refToken(refreshToken)
            .then((data) => {
                if (data?.success) {

                    const accessToken = data.accessToken.split('Bearer ')[1];
                    const refreshToken = data.refreshToken

                    if (accessToken && refreshToken) {
                        setCookie('accessToken', accessToken);
                        setCookie('refreshToken', refreshToken);

                        if (err_func === "err_getIngr" ) dispatch(fetchData())
                        if (err_func === "err_getOrder" ) dispatch(fetchOrder())

                    }else{
                        deleteCookie('accessToken')
                        deleteCookie('refreshToken')
                        deleteCookie('name')
                        deleteCookie('email')
                        toast.error(`Ошибка обновления`,  {duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
                    }

                } else {
                    deleteCookie('accessToken')
                    deleteCookie('refreshToken')
                    deleteCookie('name')
                    deleteCookie('email')
                    toast.error(`Ошибка аутентификации ${data.message}`,  {duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
                    dispatch(actionSpinner.loading(false))
                }
            })
            .catch((err) => {
                deleteCookie('accessToken')
                deleteCookie('refreshToken')
                deleteCookie('name')
                deleteCookie('email')
                toast.error(err.message, { duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
                dispatch(actionSpinner.loading(false))
            })
        
    }
};