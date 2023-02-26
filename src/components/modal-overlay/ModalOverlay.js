import React from 'react'
import modaloverlayStyles from './modaloverlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({isShow, id}) => {
    return isShow && <div className= {modaloverlayStyles.modal} id={id}></div>
}
export default React.memo(ModalOverlay);


ModalOverlay.propTypes = {
    isShow: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
};