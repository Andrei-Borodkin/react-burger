import React, { ReactNode, FC } from 'react'
import ReactDOM from 'react-dom'
import moduleStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/ModalOverlay';

const modalDiv = document.getElementById("modals")!

type ModalProps = {
    children?: ReactNode;
    close: () => void;
}
    
const Modal: FC<ModalProps> = ({ children, close }) => {
  
    React.useEffect(() => {
        const modalDiv = document.getElementById("modal")
        const ModalOverlay = (e: MouseEvent) => { e.target === modalDiv && close() }
        document.addEventListener("click", ModalOverlay)
    
        const esc = (e: KeyboardEvent) => { e.key === "Escape" && close() }
        document.addEventListener("keydown", esc)
        
        return () => {
          document.removeEventListener("click", ModalOverlay)
          document.removeEventListener("keydown", esc)
        }
      }, [close]);
    
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