import { actionConstr } from "../actionCreators/actionConstr"
import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionOrder } from "../actionCreators/actionOrder"
import { getOrder } from '../../../utils/burger-api';
import toast from 'react-hot-toast';
import { fetchRefToken } from "./thunkRefToken";

export const fetchOrder = (idInger) => {
    return (dispatch, getState, extra) => {

        dispatch(actionSpinner.loading(true))

        getOrder(idInger)
            .then((data) => {
                if (data) {
                    dispatch(actionOrder.setOrder(data))
                    dispatch(actionSpinner.loading(false))
                    dispatch(actionConstr.setShow(true))
                    toast.success('Заказ зарегистрирован', { duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
                } else {
                    dispatch(actionOrder.setInitialState())
                    toast.error('Ошибка получения номера заказа', { duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
                    dispatch(actionSpinner.loading(false))
                }
            })
            .catch((err) => {
                if (err.message === 'jwt expired') {
                    dispatch(fetchRefToken("err_getIngr"))
                }else{
                    toast.error(err.message, { duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'} });
                    dispatch(actionSpinner.loading(false))
                }
            })
    }
};
