import { actionSpinner } from "../actionCreators/actionSpinner"
import toast from 'react-hot-toast';
import { actionForgResPas } from "../actionCreators/actionForgResPas";
import { resetPass } from "../../../utils/auth-api";


export const fetchResPass = (password, kod) => {
    return (dispatch, getState, extra) => {

        dispatch(actionSpinner.loading(true))

        resetPass(password, kod)
            .then((data) => {
                if (data?.success) {
                    dispatch(actionForgResPas.setStatusRes(true))
                    toast.success("Пароль успешно изменен",  {duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
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