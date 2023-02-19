import React, {useState} from 'react';
import ConstStyles from './burgerconst.module.css';
import BurgerComponent from '../bcomponent/BurgerComponent';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../modal/Modal';
import PropTypes from 'prop-types';
import { ingredientsPropType } from '../../utils/prop-types';

const BurgerConstructor = ({data}) => {

  const [isShow, setState] = useState(false)

  const openModal = () => { setState(true) }
  const closeModal = () => { setState(false) }

  const summ = data.reduce((rez, arr) => {
    return rez + arr.price;
  }, 0);

  return (
    <main className={ConstStyles.main}>

      <section className={ConstStyles.section}>
        <BurgerComponent data={data} />
      </section>

      <section className={ConstStyles.info}>
        <div className={ConstStyles.price}>
          <p className={ConstStyles.p}>{summ}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium" onClick={openModal}>
          Оформить заказ
        </Button>
      </section>

      {isShow &&
        <div>
          <Modal isShow={isShow} close={closeModal} />
        </div>
      }
    </main>
  );

}

export default React.memo(BurgerConstructor)

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientsPropType.isRequired).isRequired
};
