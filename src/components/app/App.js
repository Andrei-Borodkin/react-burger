import React, { useEffect } from 'react'
import appStyles from './app.module.css';
import AppHeader from '../header/AppHeader';
import BurgerIngredients from '../Ingredients/BurgerIngredients';
import BurgerConstructor from '../constructor/BurgerConstructor';
import Spinner from '../spinner/Spinner';
import { useDispatch, useSelector } from "react-redux";
import { loadingSelector } from "../../services/redux/selectors/selectorsSpinner";
import { fetchData } from "../../services/redux/thunks/thunkIngr";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {

   const dispatch = useDispatch()
   const isLoading = useSelector(loadingSelector)

   useEffect(() => {
      dispatch( fetchData() )
   }, [])

   return (
      <div className={appStyles.body}>
         <AppHeader />

         {isLoading ? (
            <Spinner />
         ) : (
               <>
                  <DndProvider backend={HTML5Backend}>
                     <BurgerIngredients />
                     <BurgerConstructor />
                  </DndProvider>
               </>
         )}
      </div>
   );

}

export default React.memo(App);
