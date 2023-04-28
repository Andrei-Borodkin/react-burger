import { actionConstr } from "../actionCreators/actionConstr"
import { actionSpinner } from "../actionCreators/actionSpinner"
import { actionOrder } from "../actionCreators/actionOrder"
import { getOrder } from '../../../utils/burger-api';
import { fetchRefToken } from "./thunkRefToken";
import { toastError, toastSuccess } from "../../../utils/func";
import { AppDispatch, AppThunk } from "../store";

export const fetchOrder: AppThunk = (idInger: string) => (dispatch: AppDispatch, getState, extra) => {

        dispatch(actionSpinner.loading(true))

        getOrder(idInger)
            .then((data) => {

                dispatch(actionOrder.setOrder(data.order.number))
                dispatch(actionSpinner.loading(false))
                dispatch(actionConstr.setShow(true))
                toastSuccess('Заказ зарегистрирован')

            })
            .catch((err) => {
                if (err.message === 'jwt expired') {
                    dispatch(fetchRefToken("err_getIngr"))
                }else{
                    toastError(err.message)
                    dispatch(actionOrder.setInitialState())
                    dispatch(actionSpinner.loading(false))
                }
            })
    }

