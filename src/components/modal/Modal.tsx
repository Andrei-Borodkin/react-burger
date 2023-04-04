import React, {useCallback, ReactNode, FC} from 'react'
import ReactDOM from 'react-dom'
import moduleStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/ModalOverlay';
import { useDispatch, useSelector } from "react-redux";
import { showSelector } from "../../services/redux/selectors/selectorsConstr";
import { actionConstr } from "../../services/redux/actionCreators/actionConstr";
import { showIngrSelector } from '../../services/redux/selectors/selectorsIngr';
import { actionIngr } from '../../services/redux/actionCreators/actionIngr';
import { useNavigate } from 'react-router-dom';

const modalDiv = document.getElementById("modals")!

type ModalProps = {
    children?: ReactNode
}
    
const Modal: FC<ModalProps> = ({ children }) => {
  
    const dispatch = useDispatch() as any
    const navigate = useNavigate();

    const isShow = useSelector(showSelector)
    const isShowIngr = useSelector(showIngrSelector)

    const close = useCallback(() => { 

        if (isShowIngr){
            dispatch(actionIngr.setShowIngr(false))
            navigate(-1);
        } else{
            dispatch(actionConstr.setShow(false)) 
            dispatch(actionConstr.clearConstr())
        }
    }, [dispatch])

    React.useEffect(() => {
        const modalDiv = document.getElementById("modal")
        const ModalOverlay = (e: MouseEvent) => { e.target === modalDiv && close() }
        document.addEventListener("click", ModalOverlay)
    
        const esc = (e: KeyboardEvent) => { e.key === "Escape" && isShow && close() }
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
                    <>{children}</>
                </div>
            </div>
            <ModalOverlay id="modal"/>
            </>,
        modalDiv
    )
}

export default React.memo(Modal);