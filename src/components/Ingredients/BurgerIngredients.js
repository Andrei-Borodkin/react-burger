import React from 'react';
import IngrStyles from './ingredients.module.css';
import TabComp from '../tab/TabComp';
import Puns from '../puns/Puns';
import IngrModal from '../ingrModal/IngrModal';
import PropTypes from 'prop-types';

class BurgerIngredients extends React.Component {

  state = {isShow: false}
  openModal = () => {this.setState({isShow: true});}
  closeModal = () => {this.setState({isShow: false});}

  render() {

    const bType = this.props.data.map(val => val.type).filter((item, index, arr) => {
      return arr.indexOf(item) === index;
    });
    
    const rusHead = (val) => {
      var ansver = ""
      switch (val) {
        case 'bun' : ansver = 'Булки';
          break;
        case 'main' : ansver = 'Начинки';
          break;
        case 'sauce': ansver = 'Соусы';
          break;
        default : ansver = 'мистический ингридиент';
      }
      return ansver
    }
    return (
      <main className={IngrStyles.main}>
        <div className={IngrStyles.title}>
          <span className={IngrStyles.span}>Соберите бургер</span>
        </div>
        <div className={IngrStyles.tab}>
          <TabComp />
        </div>
        <section className={IngrStyles.section}>
          {bType.map((val, index)=>(
            <div key={index}>
              <div className={IngrStyles.headline} >
                <span className={IngrStyles.headlineSpan}>{ rusHead(val) }</span>
              </div>

              <div className={IngrStyles.puns} onClick={this.openModal}>
                <Puns type = {val} data = {this.props.data} />
              </div>
            </div>
          ))}

        </section>

        <div>
            <IngrModal show={this.state.isShow} close={this.closeModal} data = {this.props.data} />
        </div>
      </main>
    );
  }
}

export default BurgerIngredients

BurgerIngredients.propTypes = {
  data: PropTypes.array
}; 