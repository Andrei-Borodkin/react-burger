import { actionIngr } from "../actionCreators/actionIngr"
import { actionSpinner } from "../actionCreators/actionSpinner"
import { getIngr } from '../../../utils/burger-api';
import toast from 'react-hot-toast';
import { fetchRefToken } from "./thunkRefToken";

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
                    toast.error('Полученные данные не корректны',  {duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'}});
                }
            })
            .catch((err) => {
                if (err.message === 'jwt expired') {
                    dispatch(fetchRefToken("err_getIngr"))
                }else{
                    dispatch(actionIngr.setInitialState())
                    toast.error(err.message,  {duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono'}});
                }
            })
    }
};

