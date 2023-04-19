import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionForgResPas } from "../actionCreators/actionForgResPas";
import { forgotPass } from "../../../utils/auth-api";
import { toastError } from "../../../utils/func";
import { AppDispatch, AppThunk } from "../store";

export const fetchForgPass: AppThunk = (email: string) => (dispatch: AppDispatch, getState, extra) => {

    dispatch(actionSpinner.loading(true))

    forgotPass(email)
        .then(() => { dispatch(actionForgResPas.setStatus(true)) })
        .catch((err) => {
            toastError(err.message)
            dispatch(actionSpinner.loading(false))
        })

}