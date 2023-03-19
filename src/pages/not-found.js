import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import notfoundStyles from './notFound.module.css';
import pageNotFound from "../images/404.png";
import { useDispatch } from 'react-redux';
import { actionSpinner } from '../services/redux/actionCreators/actionSpinner';

const NotFound404 = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionSpinner.loading(false))
  }, [dispatch])


  return (
    <div className={notfoundStyles.container}>
      <div className={notfoundStyles.content}>
        <img alt="page not found" src={pageNotFound} />
        <br/><br/><br/>
        <Link to='/' className={notfoundStyles.link}>вернуться на главную страницу</Link>
      </div>
    </div>
  );
}

export default React.memo(NotFound404);