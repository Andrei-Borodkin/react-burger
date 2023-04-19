import React, { useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import IngrStyles from './ingredients.module.css';
import TabComp from '../tab/TabComp';
import Puns from '../puns/Puns';
//import { useSelector, useDispatch } from "react-redux";
import { useDispatch, useSelector } from "../../services/redux/store";
import { dataSelector, showIngrSelector } from "../../services/redux/selectors/selectorsIngr";
import { actionIngr } from "../../services/redux/actionCreators/actionIngr"
import { TValType, TvalPunsProps, TValueType } from '../../utils/types';
import Modal from '../modal/Modal';
import IngrDetail from '../ingrDetail/IngrDetail';
import { useNavigate } from 'react-router-dom';

//type TValueType = 'main' | 'bun' | 'sauce';

const BurgerIngredients = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const data = useSelector(dataSelector)
  const isShow = useSelector(showIngrSelector)


  const bType = data.map((val) => val.type).filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  })
  
  const close = useCallback(() => {
    dispatch(actionIngr.setShowIngr(false))
    navigate(-1);
  }, [dispatch])

  const [bunsRef, inViewBuns] = useInView({ threshold: 0 })
  const [mainsRef, inViewMains] = useInView({ threshold: 0 })
  const [sauceRef, inViewSauce] = useInView({ threshold: 0 })

  useEffect(() => {
    if (inViewBuns) dispatch(actionIngr.setNavigation("bun"))
    else if (inViewMains) dispatch(actionIngr.setNavigation("main"))
    else if (inViewSauce) dispatch(actionIngr.setNavigation("sauce"))
  }, [inViewBuns, inViewMains, inViewSauce, dispatch])

  const rusHead = (val: TValueType) => {
    
    var ansver = {}
    switch (val) {
      case 'bun': return ansver = { kat: 'Булки', cref: bunsRef };
        break;
      case 'main': return ansver = { kat: 'Начинки', cref: mainsRef }
        break;
      case 'sauce': return ansver = { kat: 'Соусы', cref: sauceRef }
        break;
    }
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
            <div className={IngrStyles.headline} id={val} ref={rusHead(val).cref}>
              <span className={IngrStyles.headlineSpan}>{rusHead(val).kat}</span>
            </div>

            <div className={IngrStyles.puns} >
              {data.filter((item) => item.type === val).map((valPuns: TvalPunsProps, i: number) => (
                <div key={i}>
                  <Puns valPuns={valPuns} />
                </div>
              ))}
            </div>
          </div>
        ))}

      </section>

      {isShow && (
        <div>
          <Modal close={close}> <IngrDetail /></Modal>
        </div>
      )}

    </main>
  );

}

export default React.memo(BurgerIngredients)