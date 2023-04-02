import React, { useEffect } from 'react'
import appStyles from './app.module.css';
import AppHeader from '../header/AppHeader';
import BurgerIngredients from '../Ingredients/BurgerIngredients';
import BurgerConstructor from '../constructor/BurgerConstructor';
import Spinner from '../spinner/Spinner';
import { useDispatch, useSelector } from "react-redux";
import { loadingSelector } from "../../services/redux/selectors/selectorsSpinner";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from '../../pages/login';
import RegisterPage from '../../pages/register';
import ForgotPage from '../../pages/forgot-password';
import ResetPage from '../../pages/reset-password';
import ProfilePage from '../../pages/profile';
import NotFound404 from '../../pages/not-found';
import { Toaster } from 'react-hot-toast';
import IngrModal from '../ingrModal/IngrModal';
import { ProtectedRouteElement } from '../protectedRoute/ProtectedRouteElement';
import { rSignInSelector } from '../../services/redux/selectors/selectorsLogin';
import { getCookie } from '../../utils/func-cooke';
import { fetchGetUser } from '../../services/redux/thunks/thunkGetUser';
import { showIngrSelector } from '../../services/redux/selectors/selectorsIngr';
import { showSelector } from '../../services/redux/selectors/selectorsConstr';
import { actionIngr } from '../../services/redux/actionCreators/actionIngr';

const App = () => {

   const location = useLocation();
   const dispatch = useDispatch() as any

   const background = location.state && location.state.background;

   const ipProps = location.pathname.slice(location.pathname.lastIndexOf('/') + 1)

   const isLoading = useSelector(loadingSelector)
   const { statusSign } = useSelector(rSignInSelector);

   //const isShowIngr = useSelector(showIngrSelector)
   //const isShow = useSelector(showSelector)
   
 
   useEffect(() => {
      if (!statusSign) {
         const accessToken = getCookie('accessToken')
         if (accessToken) {
            dispatch(fetchGetUser())
         }
      }

      if (background === "/") {
         dispatch(actionIngr.setShowIngrID(true, ipProps))
      }
   }, [])


   return (
      <div className={appStyles.body}>
         <Toaster />
         <AppHeader />
         {isLoading && <Spinner />}
         <>
            <DndProvider backend={HTML5Backend}>
               <Routes location={background || location}>
                  <Route path="/" element={[<BurgerIngredients key="BurgerIngredients" />, <BurgerConstructor key="BurgerConstructor" />]}  />
                  <Route path="/profile" element={<ProfilePage />}  />
                  <Route path="/login" element={<ProtectedRouteElement element={<LoginPage />} onlyUnAuth />} />
                  <Route path="/register" element={<ProtectedRouteElement element={<RegisterPage />} onlyUnAuth />} />
                  <Route path="/forgot-password" element={<ProtectedRouteElement element={<ForgotPage />} onlyUnAuth />} />
                  <Route path="/reset-password" element={<ProtectedRouteElement element={<ResetPage />} onlyUnAuth />} />
                  <Route path="*" element={<NotFound404 />} />
                  {background === "/" ?
                     <Route path='/ingredients/:id' element={<IngrModal />} />
                     : <Route path='/ingredients/:id' element={<IngrModal ipProps={ ipProps } />} />
                  }

               </Routes>
            </DndProvider>
         </>
      </div>
   );


}

export default React.memo(App);
