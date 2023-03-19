import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import IngrStyles from './ingredients.module.css';
import TabComp from '../tab/TabComp';
import Puns from '../puns/Puns';
import IngrModal from '../ingrModal/IngrModal';
import { useSelector, useDispatch } from "react-redux";
import { dataSelector,  showIngrSelector } from "../../services/redux/selectors/selectorsIngr";
import { actionIngr } from "../../services/redux/actionCreators/actionIngr"
import { useNavigate } from 'react-router-dom';
import { rSignInSelector } from '../../services/redux/selectors/selectorsLogin';
import { getCookie } from '../../utils/func-cooke';
import { fetchData } from '../../services/redux/thunks/thunkIngr';
import { actionSignIn } from '../../services/redux/actionCreators/actionSignIn';

const BurgerIngredients = () => {

  const dispatch = useDispatch()
  const data = useSelector(dataSelector)
  const isShow = useSelector(showIngrSelector)
  
  const navigate = useNavigate();
  const { statusSign } = useSelector(rSignInSelector);

  useEffect(() => {

    if (statusSign) {
      dispatch(fetchData())
    } else {

      const accessToken = getCookie('accessToken')
      if (accessToken) {
        dispatch(fetchData())
        dispatch(actionSignIn.setStatusSignInRef(getCookie('name'), getCookie('email')))
      } else {
        navigate('/login', { replace: true })
      }
    }

  }, [])

  const bType = data.map(val => val.type).filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });

  const [bunsRef, inViewBuns] = useInView({threshold: 0})
  const [mainsRef, inViewMains] = useInView({threshold: 0})
  const [sauceRef, inViewSauce] = useInView({threshold: 0})

  useEffect(()=>{
    if (inViewBuns) dispatch(actionIngr.setNavigation("bun"))
    else if (inViewMains) dispatch(actionIngr.setNavigation("main"))
    else if (inViewSauce) dispatch(actionIngr.setNavigation("sauce"))
  }, [inViewBuns, inViewMains, inViewSauce, dispatch])

  const rusHead = (val) => {
    var ansver = {}
    switch (val) {
      case 'bun': ansver = {kat: 'Булки', cref: bunsRef};
        break;
      case 'main': ansver = {kat: 'Начинки', cref: mainsRef}
        break;
      case 'sauce': ansver = {kat: 'Соусы', cref: sauceRef}
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
            <div className={IngrStyles.headline} id={val} ref={rusHead(val).cref}>
              <span className={IngrStyles.headlineSpan}>{rusHead(val).kat}</span>
            </div>

            <div className={IngrStyles.puns} >
              {data.filter((item) => item.type === val).map(( valPuns , i ) => (
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
          <IngrModal />
        </div>
      )}

    </main>
  );

}

export default React.memo(BurgerIngredients)