import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionSignIn } from "../actionCreators/actionSignIn"
import { loginRequest, setUserData } from '../../../utils/auth-api';
import { setCookie } from '../../../utils/func-cooke';
import { toastSuccess, toastError } from "../../../utils/func";
import { fetchRefToken } from "./thunkRefToken";


export const fetchSignInNew = () => {
    return (dispatch, getState, extra) => {

        const {emailNew, nameNew, passwordNew} = getState().rSignIn
        dispatch(actionSpinner.loading(true))

        const form = {}
        emailNew && (form.email = emailNew)
        nameNew && (form.name = nameNew)
        passwordNew && (form.password = passwordNew)
 
        setUserData(form)
            .then((data) => {
                if (data?.success) {

                    dispatch(actionSignIn.setSignIn("name", data.user.name))
                    dispatch(actionSignIn.setSignIn("email", data.user.email))
                    dispatch(actionSignIn.clSignInNew())

                    toastSuccess("Данные профиля успешно изменены")
                    dispatch(actionSpinner.loading(false))

                } else {
                    toastError(`Ошибка обновления ${data.message}`)
                    dispatch(actionSpinner.loading(false))
                }
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
};