import { actionIngr } from "../actionCreators/actionIngr"
import { actionSpinner } from "../actionCreators/actionSpinner"
import { getIngr } from '../../../utils/burger-api';

export const fetchData = () => {
    return (dispatch, getState, extra) => {

        dispatch(actionSpinner.loading(true))

        getIngr()
            .then((data) => dispatch(actionIngr.setData(data)))
            .catch(() => alert("Ошибка загрузки ингридиентов"))
            .finally(() => dispatch(actionSpinner.loading(false)))

    }
};

