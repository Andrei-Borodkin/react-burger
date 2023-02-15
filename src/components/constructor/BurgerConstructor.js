import React from 'react';
import ConstStyles from './burgerconst.module.css';
import BurgerComponent from '../bcomponent/BurgerComponent';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../modal/Modal';
import PropTypes from 'prop-types';


class BurgerConstructor extends React.Component {
  
  state = {
    isShow: false
  }

  openModal = () => {
    this.setState({
        isShow: true
    });
  }

  closeModal = () => {
      this.setState({
          isShow: false
      });
  }

  render() {
    const summ = this.props.data.reduce((rez, arr) => { 
      return rez + arr.price;
    },0);

    return (
      <main className={ConstStyles.main}>

        <section className={ConstStyles.section}>
          <BurgerComponent data={this.props.data}/>
        </section>

        <section className={ConstStyles.info}>
          <div className={ConstStyles.price}>
            <p className={ConstStyles.p}>{summ}</p>
            <CurrencyIcon type="primary" />
          </div>
          <Button htmlType="button" type="primary" size="medium" onClick={this.openModal}>
            Оформить заказ
          </Button>
        </section>

        <div>
            <Modal show={this.state.isShow} close={this.closeModal} />
        </div>

      </main>
    );
  }
}

export default BurgerConstructor

BurgerConstructor.propTypes = {
  data: PropTypes.array
}; 