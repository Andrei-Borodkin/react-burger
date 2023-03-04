import { actionConstr } from "../actionCreators/actionConstr"
import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionOrder } from "../actionCreators/actionOrder"
import { getOrder } from '../../../utils/burger-api';

export const fetchOrder = (idInger) => {
    return (dispatch, getState, extra) => {

        dispatch(actionSpinner.loading(true))

        getOrder(idInger)
        .then((data) => dispatch(actionOrder.setOrder(data)))
        .catch(() => alert("Ошибка заказа"))
        .finally(() =>  dispatch(actionSpinner.loading(false)))

        dispatch(actionConstr.setShow(true))

    }
};
