import React from 'react'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burCompStyles from './burcomp.module.css';
import PropTypes from 'prop-types';
import { ingredientsPropType } from '../../utils/prop-types';

const BurgerComponent = ({data}) => {
    
    const col = data.length - 1
    return (
        <>
        {data.map((val, index)=>(
            <div className={burCompStyles.component} key={index}>
                <div className={burCompStyles.svg}>
                    <DragIcon type="primary" />
                </div>
                
                <ConstructorElement
                    type={ col === index ? "bottom" : index === 0 ? "top" : ""}
                    isLocked={ col === index || index === 0 ? true : false}
                    text={val.name}
                    price={val.price}
                    thumbnail={val.image}
                />
                
            </div>
        ))}
        </>      
      )
  }

  export default React.memo(BurgerComponent)

  BurgerComponent.propTypes = {
    data: PropTypes.arrayOf(ingredientsPropType.isRequired).isRequired
  };
