import React from 'react'
import ReactDOM from 'react-dom'
import moduleStyles from './ingrModal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/ModalOverlay';
import { ingredientsPropType } from '../../utils/prop-types';

const modalDiv = document.getElementById("modals")

const IngrModal = ({ isShow, close, dataModul }) => {

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
                        <span className={moduleStyles.headText}>Детали ингредиента</span>
                        <span className={moduleStyles.headClose} onClick={close}> <CloseIcon type="primary" /></span>
                    </div>

                    <img src={dataModul[0].image_large} className={moduleStyles.img} alt="изображение ингридиента"/>

                    <p className={moduleStyles.frame}>
                        <span className={moduleStyles.frameSpan}>{dataModul[0].name}</span>
                    </p>

                    <section className={moduleStyles.nutrition}>
                        <div className={moduleStyles.values1}>
                            <span className={moduleStyles.kkal}>Калории, ккал</span>
                            <span className={moduleStyles.valname}>{dataModul[0].calories}</span>
                        </div>
                        <div className={moduleStyles.values2}>
                            <span className={moduleStyles.kkal}>Белки, г</span>
                            <span className={moduleStyles.valname}>{dataModul[0].proteins}</span>
                        </div>
                        <div className={moduleStyles.values3}>
                            <span className={moduleStyles.kkal}>Жиры, г</span>
                            <span className={moduleStyles.valname}>{dataModul[0].fat}</span>
                        </div>
                        <div className={moduleStyles.values4}>
                            <span className={moduleStyles.kkal}>Углеводы, г</span>
                            <span className={moduleStyles.valname}>{dataModul[0].carbohydrates}</span>
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
    isShow: PropTypes.bool.isRequired,
    dataModul: PropTypes.arrayOf(ingredientsPropType.isRequired).isRequired
};