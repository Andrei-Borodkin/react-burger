import moduleStyles from './modal.module.css';
import './Modal.css';
import { CloseIcon, CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

const modal = (props) => {
    return (
        <div className= {props.show ? "modal-bg" : ""}>
            <div className={moduleStyles.wrapper}
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                
                <div className={moduleStyles.card}>

                    <div className={moduleStyles.header}>
                        <span onClick={props.close}> <CloseIcon type="primary" /></span>
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
        </div>
    )
}

export default modal;

modal.propTypes = {
    show: PropTypes.bool,
    close: PropTypes.func
}; 