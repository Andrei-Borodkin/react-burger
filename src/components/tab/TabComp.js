import React, { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

const TabComp = () => {
  const [current, setCurrent] = useState('bun')

  const onTabClick = (tab) => {
    setCurrent(tab)
    const el = document.getElementById(tab)
    el && el.scrollIntoView({ behavior: "smooth"})
  }

  return (
    <div style={{ display: 'flex' }}>
      <Tab value="bun" active={current === 'bun'} onClick={onTabClick}>
        Булки
      </Tab>
      <Tab value="main" active={current === 'main'} onClick={onTabClick}>
        Соусы
      </Tab>
      <Tab value="sauce" active={current === 'sauce'} onClick={onTabClick}>
        Начинки
      </Tab>
    </div>
  )
}

export default React.memo(TabComp)