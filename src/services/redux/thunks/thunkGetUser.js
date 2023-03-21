import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionSignIn } from "../actionCreators/actionSignIn"
import toast from 'react-hot-toast';
import { getUser } from "../../../utils/auth-api";
import { fetchRefToken } from "./thunkRefToken";


export const fetchGetUser = () => {
    return (dispatch, getState, extra) => {

        dispatch(actionSpinner.loading(true))

        getUser()
            .then((data) => {
                if (data?.success) {
                    dispatch(actionSignIn.setStatusSignInRef(data.user.name, data.user.email))
                    dispatch(actionSpinner.loading(false))
                } else {
                    toast.error(`Ошибка данных ${data.message}`,  {duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
                    dispatch(actionSpinner.loading(false))
                }
            })
            .catch((err) => {
                if (err.message === 'jwt expired') {
                    dispatch(fetchRefToken("err_getUser"))
                }else{
                    toast.error(err.message, { duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
                    dispatch(actionSpinner.loading(false))
                }
            })
        
    }
};