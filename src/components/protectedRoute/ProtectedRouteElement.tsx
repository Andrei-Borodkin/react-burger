
import { FC, ReactElement } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { rSignInSelector } from '../../services/redux/selectors/selectorsLogin';

type TProtectedRouteElementProps = {
    element: ReactElement;
    onlyUnAuth: boolean;
}

export const ProtectedRouteElement: FC<TProtectedRouteElementProps> = ({ element, onlyUnAuth = false }) => {

    const { statusSign } = useSelector(rSignInSelector);

    if (onlyUnAuth && statusSign) {
        //const { from } = location.state || { from: { pathname: "/" } };
        return (
            // <Navigate to={from} />
            <Navigate to="/" replace />
        )
    }

    if (!onlyUnAuth && !statusSign ) {
        return ( 
            <Navigate to="/login" replace />  
            //<Navigate to={{ pathname: "/login", state: { from: location } }} />
        );
    }
    
    return element

}