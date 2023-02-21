import React, {useState} from 'react';
import IngrStyles from './ingredients.module.css';
import TabComp from '../tab/TabComp';
import Puns from '../puns/Puns';
import IngrModal from '../ingrModal/IngrModal';
import PropTypes from 'prop-types';
import { ingredientsPropType } from '../../utils/prop-types';

const BurgerIngredients = ({data}) => {
  
  const [isShow, setState] = useState(false)
  const [id, setId] = useState("")
 
  const openModal = () => { setState(true) }
  const getId = (id) => { setId(id) }
  const closeModal = () => { setState(false) }
  
  const dataModul =  data.filter((item) => item._id === id)

  const bType = data.map(val => val.type).filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });

  const rusHead = (val) => {
    var ansver = ""
    switch (val) {
      case 'bun': ansver = 'Булки';
        break;
      case 'main': ansver = 'Начинки';
        break;
      case 'sauce': ansver = 'Соусы';
        break;
      default: ansver = 'мистический ингридиент';
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
        {bType.map((val, index) => (
          <div key={index}>
            <div className={IngrStyles.headline} id={val} >
              <span className={IngrStyles.headlineSpan}>{rusHead(val)}</span>
            </div>

            <div className={IngrStyles.puns} >
              <Puns type={val} data={data} openModal={openModal} getId={getId}/>
            </div>
          </div>
        ))}

      </section>

      {isShow && (
        <div>
          <IngrModal isShow={isShow} close={closeModal} dataModul={dataModul}/>
        </div>
      )}

    </main>
  );

}

export default React.memo(BurgerIngredients)

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientsPropType.isRequired).isRequired
};