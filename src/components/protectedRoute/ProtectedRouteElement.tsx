
import { FC, ReactElement } from 'react'
//import { useSelector } from 'react-redux';
import { useSelector } from "../../services/redux/store";
import { Navigate, useLocation } from 'react-router-dom';
import { rSignInSelector } from '../../services/redux/selectors/selectorsLogin';

type TProtectedRouteElementProps = {
    element: ReactElement;
    onlyUnAuth?: boolean;
}

export const ProtectedRouteElement: FC<TProtectedRouteElementProps> = ({ element, onlyUnAuth = false }) => {

    const { statusSign } = useSelector(rSignInSelector);
    const location = useLocation();

    if (onlyUnAuth && statusSign) {
        const { from } = location.state || { from: { pathname: "/" } };
        return (
            <Navigate to={from} />
        )
    }

    if (!onlyUnAuth && !statusSign ) {
        return ( 
            <Navigate to="/login" state={{ from: location}}/>
        );
    }
    
    return element

}