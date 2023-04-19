import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionSignIn } from "../actionCreators/actionSignIn"
import { setUserData } from '../../../utils/auth-api';
import { toastSuccess, toastError } from "../../../utils/func";
import { fetchRefToken } from "./thunkRefToken";
import { AppDispatch, AppThunk } from "../store";
import { TForm } from "../../../utils/types"

export const fetchSignInNew: AppThunk = () => (dispatch: AppDispatch, getState, extra) => {

        const {emailNew, nameNew, passwordNew} = getState().rSignIn
        dispatch(actionSpinner.loading(true))

        const form: TForm = {}
        emailNew && (form.email = emailNew)
        nameNew && (form.name = nameNew)
        passwordNew && (form.password = passwordNew)
 
        setUserData(form)
            .then((data) => {
                dispatch(actionSignIn.setSignIn("name", data.user.name))
                dispatch(actionSignIn.setSignIn("email", data.user.email))
                dispatch(actionSignIn.clSignInNew())

                toastSuccess("Данные профиля успешно изменены")
                dispatch(actionSpinner.loading(false))
            })
            .catch((err) => {
                if (err.message === 'jwt expired') {
                    dispatch(fetchRefToken("err_profil"))
                }else{
                    toastError(err.message)
                    dispatch(actionSpinner.loading(false))
                }
            })
        
    }
