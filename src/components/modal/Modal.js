import React, {useCallback} from 'react'
import ReactDOM from 'react-dom'
import moduleStyles from './modal.module.css';
import { CloseIcon, CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/ModalOverlay';
import { useDispatch, useSelector } from "react-redux";
import { showSelector } from "../../services/redux/selectors/selectorsConstr";
import { orderSelector } from "../../services/redux/selectors/selectorsOrder";
import { actionConstr } from "../../services/redux/actionCreators/actionConstr";

const modalDiv = document.getElementById("modals")

const Modal = () => {

    const dispatch = useDispatch()

    const isShow = useSelector(showSelector)
    const order = useSelector(orderSelector)

    const close = useCallback(() => { dispatch(actionConstr.setShow(false)) }, [dispatch])

    React.useEffect(() => {
        const modalDiv = document.getElementById("modalConst")
        const ModalOverlay = (e) => { e.target === modalDiv && close() }
        document.addEventListener("click", ModalOverlay)
    
        const esc = (e) => { e.key === "Escape" && isShow && close() }
        document.addEventListener("keydown", esc)
        
        return () => {
          document.removeEventListener("click", ModalOverlay)
          document.removeEventListener("keydown", esc)
        }
      }, [isShow, close]);
    

    return ReactDOM.createPortal (
        <>
            <div className={moduleStyles.wrapper}>
                <div className={moduleStyles.card}>

                    <div className={moduleStyles.header}>
                        <span onClick={close}> <CloseIcon type="primary" /></span>
                    </div>

                    <h1 className={moduleStyles.number}>
                        <span className={moduleStyles.numberSpan}>{order}</span>
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
            <ModalOverlay id="modalConst"/>
            </>,
        modalDiv
    )
}

export default React.memo(Modal);