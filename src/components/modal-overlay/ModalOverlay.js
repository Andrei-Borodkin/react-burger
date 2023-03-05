import React from 'react'
import modaloverlayStyles from './modaloverlay.module.css';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { showIngrSelector } from "../../services/redux/selectors/selectorsIngr";
import { showSelector } from "../../services/redux/selectors/selectorsConstr";

const ModalOverlay = ({ id }) => {
    
    const isShowIngr = useSelector(showIngrSelector)
    const isShow = useSelector(showSelector)
    
    return (isShow || isShowIngr) && <div className= {modaloverlayStyles.modal} id={id}></div>
}
export default React.memo(ModalOverlay);


ModalOverlay.propTypes = {
    id: PropTypes.string.isRequired
};