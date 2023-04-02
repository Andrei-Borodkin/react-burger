import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionSignIn } from "../actionCreators/actionSignIn"
import { logout } from '../../../utils/auth-api';
import { deleteCookie } from '../../../utils/func-cooke';
import { actionConstr } from "../actionCreators/actionConstr";
import { actionAutReg } from "../actionCreators/actionAutReg";
import { actionForgResPas } from "../actionCreators/actionForgResPas";
import { actionIngr } from "../actionCreators/actionIngr";
import { actionOrder } from "../actionCreators/actionOrder";
import { fetchRefToken } from "./thunkRefToken";
import { toastError, toastSuccess } from "../../../utils/func";


export const fetchLogout = () => {
    return (dispatch, getState, extra) => {

        dispatch(actionSpinner.loading(true))

        logout()
            .then(() => {

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
                toastSuccess(`Успешный выход из системы`)


            })
            .catch((err) => {

                if (err.message === 'jwt expired') {
                    dispatch(fetchRefToken("err_logout"))
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
                    toastError(err.message)
                    dispatch(actionSpinner.loading(false))
                }
            })

    }
};