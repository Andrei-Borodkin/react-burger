import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionSignIn } from "../actionCreators/actionSignIn"
import { logout } from '../../../utils/auth-api';
import {  deleteCookie } from '../../../utils/func-cooke';
import toast from 'react-hot-toast';
import { actionConstr } from "../actionCreators/actionConstr";
import { actionAutReg } from "../actionCreators/actionAutReg";
import { actionForgResPas } from "../actionCreators/actionForgResPas";
import { actionIngr } from "../actionCreators/actionIngr";
import { actionOrder } from "../actionCreators/actionOrder";
import { fetchRefToken } from "./thunkRefToken";


export const fetchLogout = () => {
    return (dispatch, getState, extra) => {

        dispatch(actionSpinner.loading(true))

        logout()
            .then((data) => {
                if (data?.success) {
                    deleteCookie('accessToken')
                    deleteCookie('refreshToken')

                    dispatch(actionAutReg.setStatus(false))
                    dispatch(actionConstr.clearConstr())
                    dispatch(actionForgResPas.setInitialState())
                    dispatch(actionIngr.setInitialState())
                    dispatch(actionOrder.setInitialState())
                    dispatch(actionSignIn.clSignIn())
                    dispatch(actionOrder.setInitialState())
                    dispatch(actionSpinner.loading(false))
                    toast.success(`Успешный выход из системы`,  {duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'}});

                } else {
                    deleteCookie('accessToken')
                    deleteCookie('refreshToken')

                    dispatch(actionAutReg.setStatus(false))
                    dispatch(actionConstr.clearConstr())
                    dispatch(actionForgResPas.setInitialState())
                    dispatch(actionIngr.setInitialState())
                    dispatch(actionOrder.setInitialState())
                    dispatch(actionSignIn.clSignIn())
                    dispatch(actionOrder.setInitialState())
                    toast.error(`Выход с ошибкой ${data.message}`,  {duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
                    dispatch(actionSpinner.loading(false))
                }
            })
            .catch((err) => {

                if (err.message === 'jwt expired') {
                    dispatch(fetchRefToken("err_logout"))
                }else{

                    deleteCookie('accessToken')
                    deleteCookie('refreshToken')

                    dispatch(actionAutReg.setStatus(false))
                    dispatch(actionConstr.clearConstr())
                    dispatch(actionForgResPas.setInitialState())
                    dispatch(actionIngr.setInitialState())
                    dispatch(actionOrder.setInitialState())
                    dispatch(actionSignIn.clSignIn())
                    dispatch(actionOrder.setInitialState())
                    toast.error(err.message, { duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
                    dispatch(actionSpinner.loading(false))
                }
            })
        
    }
};