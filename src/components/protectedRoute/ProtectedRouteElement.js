import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { actionSignIn } from '../../services/redux/actionCreators/actionSignIn';
import { rSignInSelector } from '../../services/redux/selectors/selectorsLogin';
import { fetchData } from '../../services/redux/thunks/thunkIngr';
import { getCookie } from '../../utils/func-cooke';

export const ProtectedRouteElement = ({ element, onlyUnAuth = false }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { statusSign } = useSelector(rSignInSelector);

    useEffect(() => {

        if (statusSign) {
            dispatch(fetchData())
        } else {

            const accessToken = getCookie('accessToken')
            if (accessToken) {
                dispatch(fetchData())
                dispatch(actionSignIn.setStatusSignInRef(getCookie('name'), getCookie('email')))
            } 
        }

    }, [statusSign, dispatch, navigate])


    if (onlyUnAuth && statusSign) {
        return (
            <Navigate to="/" replace />
        )
    }

    if (!onlyUnAuth && !statusSign) {
        return ( <Navigate to="/login" replace />  );
    }

    return element

}