import React from 'react'
import punsStyles from './puns.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import { ingredientsPropType } from '../../utils/prop-types';


const Puns = ({type, data}) => {
    return (
        <>
        {data.map((val, index)=>(
            val.type === type && (
                <div className={punsStyles.item} key={val._id} id={val._id} >
                    <div className={punsStyles.counter}>
                        <div className={punsStyles.round}>
                            <div className={punsStyles.remains}>
                                1
                            </div>
                        </div>
                    </div>

                    <div className={punsStyles.content}>
                        <img src={val.image} className={punsStyles.img} />
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
    data: PropTypes.arrayOf(ingredientsPropType.isRequired).isRequired,
    type: PropTypes.string.isRequired
  }; 