import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burCompStyles from './burcomp.module.css';
import PropTypes from 'prop-types';

const BurgerComponent = (props) => {

    const col = props.data.length - 1
    return (
        <>
        {props.data.map((val, index)=>(
            <div className={burCompStyles.component} key={index}>
                <div className={burCompStyles.svg}>
                    <DragIcon type="primary" />
                </div>
                
                <ConstructorElement
                    type={ col === index ? "bottom" : index === 0 ? "top" : ""}
                    isLocked={true}
                    text={val.name}
                    price={val.price}
                    thumbnail={val.image}
                />
                
            </div>
        ))}
        </>      
      )
  }

  export default BurgerComponent

  BurgerComponent.propTypes = {
    data: PropTypes.array
  }; 
  