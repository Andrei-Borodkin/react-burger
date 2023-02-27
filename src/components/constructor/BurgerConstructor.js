import React, {useState, useContext, useMemo} from 'react';
import ConstStyles from './burgerconst.module.css';
import BurgerComponent from '../bcomponent/BurgerComponent';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../modal/Modal';
import { DataContext } from '../../services/appContext';
import { getOrder } from '../../utils/burger-api';

const BurgerConstructor = () => {

  const [isShow, setState] = useState(false)
  const [order, setOrder] = useState()

  const [data]  = useContext(DataContext);


  const openModal = () => { 

    
    const idInger = data.map(item => item._id) // в будующем [bun.id, ...ingredientsId, bun.id]
    getOrder(idInger)
      .then(setOrder)
      .catch(() => alert("Ошибка заказа"))
      .finally(() => setState(true))

  }

  const closeModal = () => { setState(false) }

  const summIng = useMemo(() =>
    data.reduce((rez, arr) => {
      return rez + (arr.type !== "bun" && arr.price)
    }, 0), [data])
      
  const dataBun =  data.find((item) => item.type === "bun")

  return (
    <main className={ConstStyles.main}>
      
      <BurgerComponent />

      <section className={ConstStyles.info}>
        <div className={ConstStyles.price}>
          <p className={ConstStyles.p}>{summIng + (dataBun.price * 2)}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium" onClick={openModal}>
          Оформить заказ
        </Button>
      </section>

      {isShow &&
        <div>
          <Modal isShow={isShow} close={closeModal} order={order}/>
        </div>
      }
    </main>
  );

}

export default React.memo(BurgerConstructor)
