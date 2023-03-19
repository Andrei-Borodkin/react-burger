import { actionIngr } from "../actionCreators/actionIngr"
import { actionSpinner } from "../actionCreators/actionSpinner"
import { getIngr } from '../../../utils/burger-api';

export const fetchData = () => {
    return (dispatch, getState, extra) => {

        dispatch(actionSpinner.loading(true))

        getIngr()
            .then((data) => {
                if (data) {
                    dispatch(actionIngr.setData(data))
                    dispatch(actionSpinner.loading(false))
                } else {
                    dispatch(actionIngr.setInitialState())
                    alert("Полученные данные не корректны")
                }
            })
            .catch(() => {
                dispatch(actionIngr.setInitialState())
                alert("Ошибка получения ингридиентов")
            })
    }
};

