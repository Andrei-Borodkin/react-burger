import React from 'react';
import headerStyles from './header.module.css';
import { Logo, ProfileIcon, BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useNavigate, useParams } from 'react-router-dom';

const AppHeader = () => {

  const navigate = useNavigate();
  const onClickLogo = () => { navigate('/profile') }
  const onClickConstr = () => { navigate('/') }
  
  return (

    <header className={headerStyles.header}>
      <div className={headerStyles.content}>

        <nav className={headerStyles.nav}>
          <div className={headerStyles.active} onClick={onClickConstr}>
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

          <nav className={headerStyles.login} onClick={onClickLogo}>
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

export default React.memo(AppHeader)