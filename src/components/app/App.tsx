import React, { useEffect, useCallback } from 'react'
import appStyles from './app.module.css';
import AppHeader from '../header/AppHeader';
import BurgerIngredients from '../Ingredients/BurgerIngredients';
import BurgerConstructor from '../constructor/BurgerConstructor';
import Spinner from '../spinner/Spinner';
import { useDispatch, useSelector } from "../../services/redux/store";
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
import FeedPage from '../../pages/feed';
import { Toaster } from 'react-hot-toast';
import { ProtectedRouteElement } from '../protectedRoute/ProtectedRouteElement';
import { actionIngr } from '../../services/redux/actionCreators/actionIngr';
import { fetchData } from '../../services/redux/thunks/thunkIngr';
import Modal from '../modal/Modal';
import IngrDetail from '../ingrDetail/IngrDetail';
import { useNavigate } from 'react-router-dom';
import { rSignInSelector } from '../../services/redux/selectors/selectorsLogin';
import { getCookie } from '../../utils/func-cooke';
import { fetchGetUser } from '../../services/redux/thunks/thunkGetUser';
import FeddOrderDetail from '../feed-order-detail/FeddOrderDetail';

const App = () => {

   const location = useLocation();
   const dispatch = useDispatch()
   const navigate = useNavigate();

   const background = location.state && location.state.background;
   const id = location.pathname.slice(location.pathname.lastIndexOf('/') + 1)
   const isLoading = useSelector(loadingSelector)
   const { statusSign } = useSelector(rSignInSelector);


   const close = useCallback(() => {
      dispatch(actionIngr.setShowIngr(false))
      navigate(-1);
   }, [dispatch])


   useEffect(() => {

      dispatch(fetchData())

      if (!statusSign) {
         const accessToken = getCookie('accessToken')
         if (accessToken) {
            dispatch(fetchGetUser())
         }
      }

      if (background === "/" || background === "/feed") {
         dispatch(actionIngr.setShowIngrID(true, id))
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
                  <Route path="/" element={[<BurgerIngredients key="BurgerIngredients" />, <BurgerConstructor key="BurgerConstructor" />]} />
                  <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage />} />} />
                  <Route path="/login" element={<ProtectedRouteElement element={<LoginPage />} onlyUnAuth />} />
                  <Route path="/register" element={<ProtectedRouteElement element={<RegisterPage />} onlyUnAuth />} />
                  <Route path="/forgot-password" element={<ProtectedRouteElement element={<ForgotPage />} onlyUnAuth />} />
                  <Route path="/reset-password" element={<ProtectedRouteElement element={<ResetPage />} onlyUnAuth />} />

                  <Route path="/feed" element={<FeedPage />} />
                  {background === "/feed" ?
                     <Route path="/feed/:id" element={<Modal close={close}> <FeddOrderDetail /></Modal>} />
                     : <Route path="/feed/:id" element={<FeddOrderDetail bmodal idProps={id} />} />
                  }

                  <Route path="/profile/orders" element={<ProtectedRouteElement element={<ProfilePage />} />} />
                  {background === "/profile/orders" ?
                     <Route path="/profile/orders/:id" element={<ProtectedRouteElement element={ <Modal close={close}> <FeddOrderDetail /> </Modal>} />}  />
                     : <Route path="/profile/orders/:id" element={<ProtectedRouteElement element={<FeddOrderDetail bmodal idProps={id} />} />} />
                  }

                  <Route path="*" element={<NotFound404 />} />
                  {background === "/" ?
                     <Route path='/ingredients/:id' element={<Modal close={close}> <IngrDetail /></Modal>} />
                     : <Route path='/ingredients/:id' element={<IngrDetail idProps={id} />} />
                  }

               </Routes>
            </DndProvider>
         </>
      </div>
   );


}

export default React.memo(App);
