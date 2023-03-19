import { actionSpinner } from "../actionCreators/actionSpinner"
import toast from 'react-hot-toast';
import { actionForgResPas } from "../actionCreators/actionForgResPas";
import { forgotPass } from "../../../utils/auth-api";


export const fetchForgPass = (email) => {
    return (dispatch, getState, extra) => {

        dispatch(actionSpinner.loading(true))

        forgotPass(email)
            .then((data) => {
                if (data?.success) {
                    dispatch(actionForgResPas.setStatus(true))

                } else {
                    toast.error(data.message,  {duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
                    dispatch(actionSpinner.loading(false))
                }
            })
            .catch((err) => {
                toast.error(err.message, { duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
                dispatch(actionSpinner.loading(false))
            })
        
    }
};