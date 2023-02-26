import React, { useContext } from 'react'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burCompStyles from './burcomp.module.css';
import { DataContext } from '../../services/appContext';

const BurgerComponent = () => {
   
    const [data]  = useContext(DataContext);
    const dataBun =  data.filter((item) => item.type === "bun")
    
    return (
        <>
        <section  className={burCompStyles.section}>
            <div className={`${burCompStyles.component} ml-4`} >
                <ConstructorElement
                    type={ "top"}
                    isLocked={ true }
                    text={`${dataBun[0].name} (верх)`}
                    price={dataBun[0].price}
                    thumbnail={dataBun[0].image}
                />
            </div>

            <section className={`${burCompStyles.sectionOver} mb-2`} >
                {data.map((val, index)=> (
                    
                    val.type !== "bun" && 
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
                    text={`${dataBun[0].name} (низ)`}
                    price={dataBun[0].price}
                    thumbnail={dataBun[0].image}
                />
            </div>
        </section>
        </>
      )
  }

  export default React.memo(BurgerComponent)