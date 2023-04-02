import { actionIngr } from "../actionCreators/actionIngr"
import { actionSpinner } from "../actionCreators/actionSpinner"
import { getIngr } from '../../../utils/burger-api';
import { fetchRefToken } from "./thunkRefToken";
import { toastError } from "../../../utils/func";

export const fetchData = () => {
    return (dispatch, getState, extra) => {

        dispatch(actionSpinner.loading(true))

        getIngr()
            .then((data) => {
                dispatch(actionIngr.setData(data.data))
                dispatch(actionSpinner.loading(false))
            })
            .catch((err) => {
                if (err.message === 'jwt expired') {
                    dispatch(fetchRefToken("err_getIngr"))
                }else{
                    dispatch(actionIngr.setInitialState())
                    toastError(err.message)
                }
            })
    }
};

