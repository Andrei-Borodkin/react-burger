import React from 'react'
import spinnerStyles from './spinner.module.css';

const Spinner = () => {
    return (
       
        <div className={spinnerStyles.modal}>
            <div className={spinnerStyles.center}>
                <div className={spinnerStyles.loader}></div>
            </div>
        </div>
       
    )
}

export default React.memo(Spinner);
  
