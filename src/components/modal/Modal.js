import React from 'react'
import ReactDOM from 'react-dom'
import moduleStyles from './modal.module.css';
import { CloseIcon, CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

const modalDiv = document.getElementById("modals")

const modal = ({close}) => {
    return ReactDOM.createPortal (
        <div className= {moduleStyles.modal} id="modalConst">
            <div className={moduleStyles.wrapper}>
                <div className={moduleStyles.card}>

                    <div className={moduleStyles.header}>
                        <span onClick={close}> <CloseIcon type="primary" /></span>
                    </div>

                    <h1 className={moduleStyles.number}>
                        <span className={moduleStyles.numberSpan}>034536</span>
                    </h1>

                    <p className={moduleStyles.id}>
                        <span className={moduleStyles.idSpan}>идентификатор заказа</span>
                    </p>

                    <div className={moduleStyles.done}>
                        <div className={moduleStyles.ico}><CheckMarkIcon type="primary" /></div>
                        <div className={moduleStyles.vector1}></div>
                        <div className={moduleStyles.vector2}></div>
                        <div className={moduleStyles.vector3}></div>                        
                    </div>

                    <p className={moduleStyles.go}>
                        <span className={moduleStyles.goSpan}>Ваш заказ начали готовить</span>
                    </p>

                    <p className={moduleStyles.redy}>
                        <span className={moduleStyles.redySpan}>Дождитесь готовности на орбитальной станции</span>
                    </p>

                </div>
            </div>
        </div>,
        modalDiv
    )
}

export default React.memo(modal);

modal.propTypes = {
    close: PropTypes.func.isRequired
};