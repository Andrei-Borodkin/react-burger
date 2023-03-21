import React from 'react';
import headerStyles from './header.module.css';
import { Logo, ProfileIcon, BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AppHeader = () => {

  const navigate = useNavigate();
  const onClickLogo = () => { navigate('/profile') }
  const onClickConstr = () => { navigate('/') }
  
  let location = useLocation();

  return (

    <header className={headerStyles.header}>
      <div className={headerStyles.content}>

        <nav className={headerStyles.nav}>
          <div className={headerStyles.active} onClick={onClickConstr}>
            <div className={headerStyles.ico}>
              {location.pathname === '/' ? <BurgerIcon type="primary"/> : <BurgerIcon type="secondary"/> } 
            </div>
            <span className={` ${headerStyles.span} ${location.pathname === '/' && headerStyles.spanActiv } `} >
              Конструктор
            </span>
          </div>

          <div className={headerStyles.inactive}>
            <div className={headerStyles.ico}>
              <ListIcon type="secondary" />
            </div>
            <span className={headerStyles.span} >
              Лента заказов
            </span>
          </div>
        </nav>


        <div className={headerStyles.logo}>
          <Link to={{ pathname: `/` }} > <Logo /> </Link>
        </div>

          <nav className={headerStyles.login} onClick={onClickLogo} >
            <div className={headerStyles.ico}>
            {location.pathname === '/profile' ? <ProfileIcon type="primary"/> : <ProfileIcon type="secondary"/> } 
            </div>
            <span  className={` ${headerStyles.span} ${location.pathname === '/profile' && headerStyles.spanActiv } `} >
              Личный кабинет
            </span>
          </nav>
        

      </div>
    </header>

  );

}

export default React.memo(AppHeader)