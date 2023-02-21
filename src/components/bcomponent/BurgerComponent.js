import React from 'react'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burCompStyles from './burcomp.module.css';
import PropTypes from 'prop-types';
import { ingredientsPropType } from '../../utils/prop-types';

const BurgerComponent = ({data}) => {
    
    const col = data.length - 1
    return (
        <>
        <section  className={burCompStyles.section}>
            <div className={`${burCompStyles.component} ml-4`} >
                <ConstructorElement
                    type={ "top"}
                    isLocked={ true }
                    text={`${data[0].name} (верх)`}
                    price={data[0].price}
                    thumbnail={data[0].image}
                />
            </div>

            <section className={`${burCompStyles.sectionOver} mb-2`} >
                {data.map((val, index)=> (
                    
                    index > 0 && index < col &&
                    <div className={burCompStyles.component} key={index}>
                        <div className={burCompStyles.svg}>
                            <DragIcon type="primary" />
                        </div>

                        <ConstructorElement
                            isLocked={false}
                            text={val.name}
                            price={val.price}
                            thumbnail={val.image}
                        />
                    </div>

                ))}
            </section>
            
            <div className={`${burCompStyles.component} ml-4`} >
                <ConstructorElement
                    type={"bottom"}
                    isLocked={true}
                    text={`${data[col].name} (низ)`}
                    price={data[col].price}
                    thumbnail={data[col].image}
                />
            </div>
        </section>
        </>
      )
  }

  export default React.memo(BurgerComponent)

  BurgerComponent.propTypes = {
    data: PropTypes.arrayOf(ingredientsPropType.isRequired).isRequired
  };
