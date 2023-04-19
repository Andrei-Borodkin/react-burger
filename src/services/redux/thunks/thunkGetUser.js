import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionSignIn } from "../actionCreators/actionSignIn"
import { getUser } from "../../../utils/auth-api";
import { fetchRefToken } from "./thunkRefToken";
import { toastError } from "../../../utils/func";


export const fetchGetUser = () => {
    return (dispatch, getState, extra) => {

        dispatch(actionSpinner.loading(true))

        getUser()
            .then((data) => {
                
                dispatch(actionSignIn.setStatusSignInRef(data.user.name, data.user.email))
                dispatch(actionSpinner.loading(false))
                
            })
            .catch((err) => {
                if (err.message === 'jwt expired') {
                    dispatch(fetchRefToken("err_getUser"))
                }else{
                    toastError(err.message)
                    dispatch(actionSpinner.loading(false))
                }
            })
        
    }
};