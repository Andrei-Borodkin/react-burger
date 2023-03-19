import { actionConstr } from "../actionCreators/actionConstr"
import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionOrder } from "../actionCreators/actionOrder"
import { getOrder } from '../../../utils/burger-api';

export const fetchOrder = (idInger) => {
    return (dispatch, getState, extra) => {

        dispatch(actionSpinner.loading(true))

        getOrder(idInger)
            .then((data) => {
            if (data) {
                dispatch(actionOrder.setOrder(data))
                dispatch(actionSpinner.loading(false))
                dispatch(actionConstr.setShow(true))
            }else{
                dispatch(actionOrder.setInitialState())
                alert("Ошибка получения номера заказа")
                dispatch(actionSpinner.loading(false))
            }
            })
            .catch(() => {
                alert("Ошибка получения номера заказа")
                dispatch(actionSpinner.loading(false))
            })
    }
};
