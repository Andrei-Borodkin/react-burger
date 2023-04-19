import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionForgResPas } from "../actionCreators/actionForgResPas";
import { forgotPass } from "../../../utils/auth-api";
import { toastError } from "../../../utils/func";


export const fetchForgPass = (email) => {
    return (dispatch, getState, extra) => {

        dispatch(actionSpinner.loading(true))

        forgotPass(email)
            .then(() => { dispatch(actionForgResPas.setStatus(true)) })
            .catch((err) => {
                toastError(err.message)
                dispatch(actionSpinner.loading(false))
            })
        
    }
};