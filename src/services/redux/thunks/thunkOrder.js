import { actionConstr } from "../actionCreators/actionConstr"
import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionOrder } from "../actionCreators/actionOrder"
import { getOrder } from '../../../utils/burger-api';
import { fetchRefToken } from "./thunkRefToken";
import { toastError, toastSuccess } from "../../../utils/func";

export const fetchOrder = (idInger) => {
    return (dispatch, getState, extra) => {

        dispatch(actionSpinner.loading(true))

        getOrder(idInger)
            .then((data) => {
                if (data) {
                    dispatch(actionOrder.setOrder(data))
                    dispatch(actionSpinner.loading(false))
                    dispatch(actionConstr.setShow(true))
                    toastSuccess('Заказ зарегистрирован')
                } else {
                    dispatch(actionOrder.setInitialState())
                    toastError('Ошибка получения номера заказа')
                    dispatch(actionSpinner.loading(false))
                }
            })
            .catch((err) => {
                if (err.message === 'jwt expired') {
                    dispatch(fetchRefToken("err_getIngr"))
                }else{
                    toastError(err.message)
                    dispatch(actionSpinner.loading(false))
                }
            })
    }
};
