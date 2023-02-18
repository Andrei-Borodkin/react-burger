import React, {useState} from 'react';
import IngrStyles from './ingredients.module.css';
import TabComp from '../tab/TabComp';
import Puns from '../puns/Puns';
import IngrModal from '../ingrModal/IngrModal';
import PropTypes from 'prop-types';
import { ingredientsPropType } from '../../utils/prop-types';

const BurgerIngredients = ({data}) => {

  const [isShow, setState] = useState(false)

  const openModal = () => { setState(true) }
  const closeModal = () => { setState(false) }

  React.useEffect(() => {
    const modalDiv = document.getElementById("modalIngr")
    const ModalOverlay = (e) => { e.target === modalDiv && closeModal() }
    document.addEventListener("click", ModalOverlay)

    const esc = (e) => { e.key === "Escape" && isShow && closeModal() }
    document.addEventListener("keydown", esc)

    return () => {
      document.removeEventListener("click", ModalOverlay)
      document.removeEventListener("keydown", esc)
    }
  }, [isShow]);

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
            <div className={IngrStyles.headline} id={val}>
              <span className={IngrStyles.headlineSpan}>{rusHead(val)}</span>
            </div>

            <div className={IngrStyles.puns} onClick={openModal}>
              <Puns type={val} data={data} />
            </div>
          </div>
        ))}

      </section>

      {isShow && (
        <div>
          <IngrModal close={closeModal} />
        </div>
      )}

    </main>
  );

}

export default React.memo(BurgerIngredients)

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientsPropType.isRequired).isRequired
};