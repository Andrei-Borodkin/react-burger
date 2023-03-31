import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionAutReg } from "../actionCreators/actionAutReg"
import { setRegisterData } from '../../../utils/auth-api';
import { toastError, toastSuccess } from "../../../utils/func";

export const fetchRgistr = () => {

    return (dispatch, getState, extra) => {

        const form = getState().autReg

        dispatch(actionSpinner.loading(true))

        setRegisterData(form)
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
