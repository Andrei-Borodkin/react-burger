import React, { useEffect, useState } from 'react'
import appStyles from './app.module.css';
import AppHeader from '../header/AppHeader';
import BurgerIngredients from '../Ingredients/BurgerIngredients';
import BurgerConstructor from '../constructor/BurgerConstructor';
import { getIngr } from '../../utils/burger-api';
import Spinner from '../spinner/Spinner';

const App = () => {

   const [data, setIngr] = useState([])
   const [spinner, setSpinner] = useState(true)

   useEffect(() => {
      getIngr()
         .then(setIngr)
         .catch(() => alert("Ошибка загрузки ингридиентов"))
         .finally(() => setSpinner(false))
   }, [])

   return (
      <div className={appStyles.body}>
         <AppHeader />
         {spinner ? (
            <Spinner />
         ) : (
            <>
               <BurgerIngredients data={data} />
               <BurgerConstructor data={data} />
            </>
         )}
      </div>
   );

}

export default React.memo(App);
