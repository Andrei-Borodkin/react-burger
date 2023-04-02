import React , {FC} from 'react'
import modaloverlayStyles from './modaloverlay.module.css';
import { useSelector } from "react-redux";
import { showIngrSelector } from "../../services/redux/selectors/selectorsIngr";
import { showSelector } from "../../services/redux/selectors/selectorsConstr";

type TModalOverlayProps = {
    id: string;
}

const ModalOverlay: FC<TModalOverlayProps> = ({ id }) => {
    
    const isShowIngr = useSelector(showIngrSelector)
    const isShow = useSelector(showSelector)
   
    return (isShow || isShowIngr) && <div className= {modaloverlayStyles.modal} id={id}></div>
}
export default React.memo(ModalOverlay);