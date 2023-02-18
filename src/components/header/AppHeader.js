import React from 'react';
import headerStyles from './header.module.css';
import { Logo, ProfileIcon, BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'


const AppHeader = () => {
  return (

    <header className={headerStyles.header}>
      <div className={headerStyles.content}>

        <nav className={headerStyles.nav}>
          <a className={headerStyles.active}>
            <div className={headerStyles.ico}>
              <BurgerIcon type="primary" />
            </div>
            <span className={headerStyles.spanActiv}>
              Конструктор
            </span>
          </a>

          <a className={headerStyles.inactive}>
            <div className={headerStyles.ico}>
              <ListIcon type="secondary" />
            </div>
            <span className={headerStyles.span}>
              Лента заказов
            </span>
          </a>
        </nav>


        <div className={headerStyles.logo}>
          <Logo />
        </div>

        <nav>
          <a className={headerStyles.login} >
            <div className={headerStyles.ico}>
              <ProfileIcon type="secondary" />
            </div>
            <span className={headerStyles.span}>
              Личный кабинет
            </span>
          </a>
        </nav>

      </div>
    </header>

  );

}

export default React.memo(AppHeader)