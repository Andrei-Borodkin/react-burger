import moduleStyles from './ingrModal.module.css';
import './IngrModal.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

const IngrModal = (props) => {
    return (
        <div className= {props.show ? "ingr-modal-bg" : ""}>
            <div className={moduleStyles.wrapper}
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                
                <div className={moduleStyles.card}>

                    <div className={moduleStyles.header}>
                        <span className={moduleStyles.headText}>Загаловок</span>
                        <span className={moduleStyles.headClose} onClick={props.close}> <CloseIcon type="primary" /></span>
                    </div>

                    <img src="https://code.s3.yandex.net/react/code/bun-02.png" className={moduleStyles.img} />

                    <p className={moduleStyles.frame}>
                        <span className={moduleStyles.frameSpan}>идентификатор заказа</span>
                    </p>

                    <section className={moduleStyles.nutrition}>
                        <div className={moduleStyles.values1}>
                            <span className={moduleStyles.kkal}>asdasda</span>
                            <span className={moduleStyles.valname}>123</span>
                        </div>
                        <div className={moduleStyles.values2}>
                            <span className={moduleStyles.kkal}>asdasda</span>
                            <span className={moduleStyles.valname}>123</span>
                        </div>
                        <div className={moduleStyles.values3}>
                            <span className={moduleStyles.kkal}>asdasda</span>
                            <span className={moduleStyles.valname}>234</span>
                        </div>
                        <div className={moduleStyles.values4}>
                            <span className={moduleStyles.kkal}>asdasda</span>
                            <span className={moduleStyles.valname}>234</span>
                        </div>
                    </section>


                </div>
            </div>
        </div>
    )
}

export default IngrModal;

IngrModal.propTypes = {
    show: PropTypes.bool,
    close: PropTypes.func
}; 