import React, { useMemo, useEffect } from 'react';
import ConstStyles from './burgerconst.module.css';
import BurgerComponent from '../bcomponent/BurgerComponent';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../modal/Modal';
import { useDispatch, useSelector } from "react-redux";
import { showSelector } from "../../services/redux/selectors/selectorsConstr";
import { dataSelector } from "../../services/redux/selectors/selectorsIngr";
import { fetchOrder } from "../../services/redux/thunks/thunkOrder";
import { showIngrBun, showIngr } from "../../services/redux/selectors/selectorsConstr";
import { actionConstr } from "../../services/redux/actionCreators/actionConstr"

const BurgerConstructor = () => {


  const dispatch = useDispatch()

  const isShow = useSelector(showSelector)
  const  data = useSelector(dataSelector)

  // временное решение .. тк непонятно как должен выглядеть конструктор без ингридиентов
  useEffect(() => {

    dispatch(actionConstr.clearConstr())
    data.map((val, index)=> (
        dispatch(actionConstr.addConstr(val))
    ))
    
  }, [data])
  
  const dataBun = useSelector(showIngrBun)
  const ingr = useSelector(showIngr)

  const openModal = () => { 
    if (dataBun && ingr.length > 0) {
      const idInger2 = [dataBun._id, ...ingr.map(item => item._id), dataBun._id]
      dispatch( fetchOrder(idInger2) )
    }else{
      alert("Соберите заказ")
    }
  }
  
  const summIng = useMemo(() =>
    ingr.length > 0 ? (ingr.reduce((rez, arr) => { return rez + arr.price }, 0) + (dataBun ? dataBun.price * 2 : 0)) : 0
    , [ingr, dataBun])

  return (
    <main className={ConstStyles.main}>
      
      <BurgerComponent />

      <section className={ConstStyles.info}>
        <div className={ConstStyles.price}>
          <p className={ConstStyles.p}>{summIng}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium" onClick={openModal}>
          Оформить заказ
        </Button>
      </section>

      {isShow &&
        <div>
          <Modal />
        </div>
      }
    </main>
  );

}

export default React.memo(BurgerConstructor)
