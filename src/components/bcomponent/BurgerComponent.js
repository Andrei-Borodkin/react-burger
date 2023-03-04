import React, {useCallback } from 'react'
import { ConstructorElement  } from '@ya.praktikum/react-developer-burger-ui-components'
import burCompStyles from './burcomp.module.css';
import { useSelector, useDispatch } from "react-redux";
import { showIngrBun, showIngr } from "../../services/redux/selectors/selectorsConstr";
import { useDrop } from "react-dnd";
import { dataSelector } from "../../services/redux/selectors/selectorsIngr";
import { actionConstr } from "../../services/redux/actionCreators/actionConstr"
import CompConstructorElement from '../compConstructorElement/CompConstructorElement'

const BurgerComponent = () => {
   
    const dispatch = useDispatch()

    const dataBun = useSelector(showIngrBun)
    const ingr = useSelector(showIngr)
    const data = useSelector(dataSelector)

    const [{ isHover }, dropTarget] = useDrop({
        accept: "data",
        drop(id) {
            const val = data.filter((item) => item._id === id.id_move)
            dispatch(actionConstr.addConstr(val[0]))
        },
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
    });

    const mConstElement = useCallback((dragIndex, hoverIndex) => {
        const dragElem = ingr[dragIndex];
        const newElem = [...ingr]
        newElem.splice(dragIndex, 1)
        newElem.splice(hoverIndex, 0, dragElem)
        dispatch(actionConstr.updIngr(newElem))
    }, [ingr, dispatch]);

    const border = isHover ? '0.5px dotted #4c4cff' : '1px dotted transparent';
    const borderRadius = isHover ? '40px' : '';

    return (
        <section className={burCompStyles.section} style={{border, borderRadius}} ref={dropTarget}>
            <div className={`${burCompStyles.component} ml-4`}  >

                
            {dataBun ? 
                <ConstructorElement
                    type={ "top"}
                    isLocked={ true }
                    text={`${dataBun.name} (верх)`}
                    price={dataBun.price}
                    thumbnail={dataBun.image}
                />
                :
                <ConstructorElement type={ "top"} isLocked={ true } />
            }
            </div>

            { ingr.length > 0 &&
            <section className={`${burCompStyles.sectionOver} mb-2`} >
                {ingr.map((val, index)=> (
                    <div key={val.id} >
                        <CompConstructorElement val={val} index={index} mConstElement={mConstElement}/>
                    </div>
                ))}
            </section>
}
            <div className={`${burCompStyles.component} ml-4`} >

            {dataBun ? 
                <ConstructorElement
                    type={"bottom"}
                    isLocked={true}
                    text={`${dataBun.name} (низ)`}
                    price={dataBun.price}
                    thumbnail={dataBun.image}
                />
                :
                <ConstructorElement type={ "bottom"} isLocked={ true } />
            }
            </div>
        </section>
      )
  }

  export default React.memo(BurgerComponent)