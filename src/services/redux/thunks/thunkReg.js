import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionAutReg } from "../actionCreators/actionAutReg"
import { setRegisterData } from '../../../utils/auth-api';
import { toastError, toastSuccess } from "../../../utils/func";

export const fetchRgistr = () => {

    return (dispatch, getState, extra) => {

        const { email, password, name} = getState().autReg

        dispatch(actionSpinner.loading(true))

        setRegisterData(email, password, name)
            .then((data) => {
                if (data) {
                    toastSuccess('Пользователь зарегистрирован')
                    dispatch(actionAutReg.setStatus(true))
                } else {
                    toastError('Ошибка получения данных')
                    dispatch(actionSpinner.loading(false))
                }
            })
            .catch((err) => {
                toastError(err.message)
                dispatch(actionSpinner.loading(false))
            })

    }
};
