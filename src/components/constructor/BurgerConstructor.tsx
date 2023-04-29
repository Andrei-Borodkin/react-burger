import React, { useMemo, useCallback } from 'react';
import ConstStyles from './burgerconst.module.css';
import BurgerComponent from '../bcomponent/BurgerComponent';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../modal/Modal';
import { useDispatch, useSelector } from "../../services/redux/store";
import { useNavigate } from 'react-router-dom';
import { showSelector } from "../../services/redux/selectors/selectorsConstr";
import { fetchOrder } from "../../services/redux/thunks/thunkOrder";
import { showIngrBun, showIngr } from "../../services/redux/selectors/selectorsConstr";
import { TPrice, T_Id } from "../../utils/types";
import  OrderDetail  from "../../components/orderDetail/OrderDetail";
import { rSignInSelector } from '../../services/redux/selectors/selectorsLogin';
import { toastError } from '../../utils/func';
import { actionConstr } from '../../services/redux/actionCreators/actionConstr';


const BurgerConstructor = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const isShow = useSelector(showSelector)
  const { statusSign } = useSelector(rSignInSelector);

  const dataBun = useSelector(showIngrBun)
  const ingr = useSelector(showIngr)

  const openModal = () => { 

    if (statusSign){
      if (dataBun && ingr.length > 0) {
        const idInger2 = [dataBun._id, ...ingr.map((item: T_Id) => item._id), dataBun._id]
        dispatch( fetchOrder(idInger2) )
      }else{
        alert("Соберите заказ")
      }
    }else{
      toastError(`Только авторизованные пользователи могут оформить заказ`)
      navigate('/login')
    }
  }
  
  const close = useCallback(() => { 
        dispatch(actionConstr.setShow(false)) 
        dispatch(actionConstr.clearConstr())
    
}, [dispatch])

  const summIng = useMemo(() =>
    ingr.length > 0 ? (ingr.reduce((rez: number, arr: TPrice) => { return rez + arr.price }, 0) + (dataBun ? dataBun.price * 2 : 0)) : 0
    , [ingr, dataBun])

  return (
    <main className={ConstStyles.main}>
      
      <BurgerComponent />

      <section className={ConstStyles.info}>
        <div className={ConstStyles.price}>
          <p className={ConstStyles.p}>{summIng}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium" onClick={openModal} data-cy="button-order">
          Оформить заказ
        </Button>
      </section>

      {isShow &&
        <div>
          <Modal close= { close }>
            <OrderDetail />
          </Modal>
        </div>
      }
    </main>
  );

}

export default React.memo(BurgerConstructor)
