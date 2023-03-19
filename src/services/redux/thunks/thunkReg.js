import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionAutReg } from "../actionCreators/actionAutReg"
import { setRegisterData } from '../../../utils/auth-api';
import toast from 'react-hot-toast';

export const fetchRgistr = () => {

    return (dispatch, getState, extra) => {

        const form = getState().autReg

        dispatch(actionSpinner.loading(true))

        setRegisterData(form)
            .then((data) => {
                if (data) {
                    toast.success('Пользователь зарегистрирован', { duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono' } });
                    dispatch(actionAutReg.setStatus(true))
                } else {
                    toast.error('Ошибка получения данных', { duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono' } });
                    dispatch(actionSpinner.loading(false))
                }
            })
            .catch((err) => {
                toast.error(err.message, { duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono' } });
                dispatch(actionSpinner.loading(false))
            })

    }
};
