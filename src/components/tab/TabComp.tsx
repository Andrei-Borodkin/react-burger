import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { curNavSelector } from "../../services/redux/selectors/selectorsIngr";
import { useSelector, useDispatch } from "react-redux";
import { actionIngr } from "../../services/redux/actionCreators/actionIngr"

type TonTabClick = (current: string) => void;

const TabComp = () => {
  
  const dispatch = useDispatch() as any
  const current = useSelector(curNavSelector)

  const onTabClick: TonTabClick = (current) => {
    dispatch(actionIngr.setNavigation(current))
    const el = document.getElementById(current)
    el && el.scrollIntoView({ behavior: "smooth"})
  }

  return (
    <div style={{ display: 'flex' }}>
      <Tab value="bun" active={current === 'bun'} onClick={onTabClick}>
        Булки
      </Tab>
      <Tab value="main" active={current === 'main'} onClick={onTabClick}>
        Начинки
      </Tab>
      <Tab value="sauce" active={current === 'sauce'} onClick={onTabClick}>
        Соусы
      </Tab>

    </div>
  )
}

export default React.memo(TabComp)