import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionSignIn } from "../actionCreators/actionSignIn"
import { getUser } from "../../../utils/auth-api";
import { fetchRefToken } from "./thunkRefToken";
import { toastError } from "../../../utils/func";
import { AppDispatch, AppThunk } from "../store";

export const fetchGetUser: AppThunk = () => (dispatch: AppDispatch, getState, extra) => {

    dispatch(actionSpinner.loading(true))

    getUser()
        .then((data) => {

            dispatch(actionSignIn.setStatusSignInRef(data.user.name, data.user.email))
            dispatch(actionSpinner.loading(false))

        })
        .catch((err) => {
            if (err.message === 'jwt expired') {
                dispatch(fetchRefToken("err_getUser"))
            } else {
                toastError(err.message)
                dispatch(actionSpinner.loading(false))
            }
        })

}
