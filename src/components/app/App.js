import React, { useEffect, useState } from 'react'
import appStyles from './app.module.css';
import AppHeader from '../header/AppHeader';
import BurgerIngredients from '../Ingredients/BurgerIngredients';
import BurgerConstructor from '../constructor/BurgerConstructor';
import { getIngr } from '../../utils/burger-api';
import Spinner from '../spinner/Spinner';
import { DataContext } from '../../services/appContext';

const App = () => {

   const [spinner, setSpinner] = useState(true)
   const [data, setIngr] = useState([])

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

               <DataContext.Provider value={[data]}>
                  <BurgerConstructor />
               </DataContext.Provider>
            </>
         )}
      </div>
   );

}

export default React.memo(App);
