import React, {useContext} from 'react'
import punsStyles from './puns.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import { DataContext } from '../../services/appContext';


const Puns = ({type, openModal, getId}) => {

    const [data]  = useContext(DataContext);

    const openAndGet = (id) => {
        openModal()
        getId(id)
    }

    return (
        <>
        {data.map((val)=>(
            val.type === type && (
                <div className={punsStyles.item} key={val._id} id={val._id} onClick={() => openAndGet(val._id)} >
                    <div className={punsStyles.counter}>
                        <div className={punsStyles.round}>
                            <div className={punsStyles.remains}>
                                1
                            </div>
                        </div>
                    </div>

                    <div className={punsStyles.content}>
                        <img src={val.image} className={punsStyles.img} alt="изображение ингридиента"/>
                        <div className={punsStyles.price}>
                            {val.price}
                            <CurrencyIcon type="primary" />
                        </div>
                        <div className={punsStyles.name}>
                            {val.name}
                        </div>
                    </div>
                </div>
            )
        ))}
        </>
    );
  }
  
export default React.memo(Puns)

Puns.propTypes = {
    type: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
    getId: PropTypes.func.isRequired
  }; 