import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionAutReg } from "../actionCreators/actionAutReg"
import { setRegisterData } from '../../../utils/auth-api';
import { toastError, toastSuccess } from "../../../utils/func";
import { AppDispatch, AppThunk } from "../store";

export const fetchRgistr: AppThunk = () => (dispatch: AppDispatch, getState, extra) => {

        const { email, password, name} = getState().autReg

        dispatch(actionSpinner.loading(true))

        setRegisterData(email, password, name)
            .then(() => {
                toastSuccess('Пользователь зарегистрирован')
                dispatch(actionAutReg.setStatus(true))
            })
            .catch((err) => {
                toastError(err.message)
                dispatch(actionSpinner.loading(false))
            })

    }

