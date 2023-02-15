import React from 'react';
import headerStyles from './header.module.css';
import { Logo, ProfileIcon, BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'

class AppHeader extends React.Component {
  render() {
    return (
        
      <header className={headerStyles.header}>
        <div className={headerStyles.content}>

          <nav className={headerStyles.nav}>
            <div className={headerStyles.active}>
              <div className={headerStyles.ico}>
                  <BurgerIcon type="primary" />
              </div>
              <span className={headerStyles.spanActiv}>
                  Конструктор
              </span>
            </div>

              <div className={headerStyles.inactive}>
                <div className={headerStyles.ico}>
                    <ListIcon type="secondary" />
                </div>
                <span className={headerStyles.span}>
                    Лента заказов
                </span>
              </div>
            </nav>


            <div className={headerStyles.logo}>
                <Logo />
            </div>

            <nav className={headerStyles.login}>
                <div className={headerStyles.ico}>
                    <ProfileIcon type="secondary" />
                </div>
                <span className={headerStyles.span}>
                    Личный кабинет
                </span>
            </nav>

        </div>
      </header>
      
    );
  }
}

export default AppHeader