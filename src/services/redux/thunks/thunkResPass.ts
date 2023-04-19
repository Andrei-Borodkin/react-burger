import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionForgResPas } from "../actionCreators/actionForgResPas";
import { resetPass } from "../../../utils/auth-api";
import { toastError, toastSuccess } from "../../../utils/func";
import { AppDispatch, AppThunk } from "../store";

export const fetchResPass: AppThunk = (password: string, kod: string) => (dispatch: AppDispatch, getState, extra) => {

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
