import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionForgResPas } from "../actionCreators/actionForgResPas";
import { resetPass } from "../../../utils/auth-api";
import { toastError, toastSuccess } from "../../../utils/func";


export const fetchResPass = (password, kod) => {
    return (dispatch, getState, extra) => {

        dispatch(actionSpinner.loading(true))

        resetPass(password, kod)
            .then(() => {
                dispatch(actionForgResPas.setStatusRes(true))
                toastSuccess("Пароль успешно изменен")
            })
            .catch((err) => {
                toastError(err.message)
                dispatch(actionSpinner.loading(false))
            })
        
    }
};