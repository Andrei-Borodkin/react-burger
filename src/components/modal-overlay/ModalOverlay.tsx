import React , {FC} from 'react'
import modaloverlayStyles from './modaloverlay.module.css';

type TModalOverlayProps = {
    id: string;
}

const ModalOverlay: FC<TModalOverlayProps> = ({ id }) => {
    return <div className= {modaloverlayStyles.modal} id={id}></div>
}
export default React.memo(ModalOverlay);