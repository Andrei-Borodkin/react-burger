import { actionSpinner } from "../actionCreators/actionSpinner"
import { refToken } from '../../../utils/auth-api';
import { getCookie, setCookie, deleteCookie } from '../../../utils/func-cooke';
import { fetchData } from "./thunkIngr";
import { fetchOrder } from "./thunkOrder";
import { fetchGetUser } from "./thunkGetUser";
import { fetchLogout } from "./thunkLogout";
import { toastError } from "../../../utils/func";
import { fetchSignInNew } from "./thunkSignNew";


export const fetchRefToken = (err_func) => {
    return (dispatch, getState, extra) => {

        const refreshToken = getCookie('refreshToken')

        refToken(refreshToken)
            .then((data) => {

                const accessToken = data.accessToken.split('Bearer ')[1];
                const refreshToken = data.refreshToken

                if (accessToken && refreshToken) {
                    setCookie('accessToken', accessToken, { path: '/' } );
                    setCookie('refreshToken', refreshToken, { path: '/' } );
                    if (err_func === "err_getIngr" ) dispatch(fetchData())
                    if (err_func === "err_getOrder" ) dispatch(fetchOrder())
                    if (err_func === "err_getUser" ) dispatch(fetchGetUser())
                    if (err_func === "err_logout" ) dispatch(fetchLogout())
                    if (err_func === "err_profil" ) dispatch(fetchSignInNew())
                }else{
                    deleteCookie('accessToken')
                    deleteCookie('refreshToken')
                    toastError(`Ошибка обновления`)
                }

            })
            .catch((err) => {
                deleteCookie('accessToken')
                deleteCookie('refreshToken')
                toastError(err.message)
                dispatch(actionSpinner.loading(false))
            })
        
    }
};