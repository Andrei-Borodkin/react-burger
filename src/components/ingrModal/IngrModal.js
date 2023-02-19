import React from 'react'
import ReactDOM from 'react-dom'
import moduleStyles from './ingrModal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/ModalOverlay';

const modalDiv = document.getElementById("modals")

const IngrModal = ({ isShow, close }) => {

    React.useEffect(() => {
        const modalDiv = document.getElementById("modalIngr")
        const ModalOverlay = (e) => { e.target === modalDiv && close() }
        document.addEventListener("click", ModalOverlay)

        const esc = (e) => { e.key === "Escape" && isShow && close() }
        document.addEventListener("keydown", esc)

        return () => {
            document.removeEventListener("click", ModalOverlay)
            document.removeEventListener("keydown", esc)
        }
    }, [isShow, close]);


    return ReactDOM.createPortal(
        <>
            <div className={moduleStyles.wrapper}>
                <div className={moduleStyles.card}>

                    <div className={moduleStyles.header}>
                        <span className={moduleStyles.headText}>Загаловок</span>
                        <span className={moduleStyles.headClose} onClick={close}> <CloseIcon type="primary" /></span>
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
            <ModalOverlay isShow={isShow} id="modalIngr" />
        </>,
        modalDiv
    )
}

export default React.memo(IngrModal);

IngrModal.propTypes = {
    close: PropTypes.func.isRequired,
    isShow: PropTypes.bool.isRequired
};