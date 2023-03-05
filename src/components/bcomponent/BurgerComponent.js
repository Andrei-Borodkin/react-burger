import React, {useCallback } from 'react'
import { ConstructorElement  } from '@ya.praktikum/react-developer-burger-ui-components'
import burCompStyles from './burcomp.module.css';
import { useSelector, useDispatch } from "react-redux";
import { showIngrBun, showIngr } from "../../services/redux/selectors/selectorsConstr";
import { useDrop } from "react-dnd";
import { actionConstr } from "../../services/redux/actionCreators/actionConstr"
import CompConstructorElement from '../compConstructorElement/CompConstructorElement'
import  img_dump from '../../images/bun-dump.png';

const BurgerComponent = () => {
   
    const dispatch = useDispatch()

    const dataBun = useSelector(showIngrBun)
    const ingr = useSelector(showIngr)

    const [{ isHover }, dropTarget] = useDrop({
        accept: "data",
        drop(val) {
            dispatch(actionConstr.addConstr(val.valPuns))
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

    const border = isHover ? '0.5px dashed #4c4cff' : '1px dashed transparent';
    const borderRadius = isHover ? '40px' : '';

    
    return (
        <>
            {dataBun || ingr.length > 0 ?
                <section className={burCompStyles.section} style={{ border, borderRadius }} ref={dropTarget}>

                    <div className={`${burCompStyles.component} ml-4`}  >
                        {dataBun ?
                            <ConstructorElement
                                type={"top"}
                                isLocked={true}
                                text={`${dataBun.name} (верх)`}
                                price={dataBun.price}
                                thumbnail={dataBun.image}
                            />
                            :
                            <ConstructorElement
                                type={"top"}
                                isLocked={true}
                                text="Булка не выбрана"
                                price='0'
                                thumbnail={img_dump}
                            />
                        }
                    </div>

                    {ingr.length > 0 ?
                        <section className={`${burCompStyles.sectionOver} mb-2`} >
                            {ingr.map((val, index) => (
                                <div key={val.id} >
                                    <CompConstructorElement val={val} index={index} mConstElement={mConstElement} />
                                </div>
                            ))}
                        </section>
                        :
                        <span className={`${burCompStyles.noingr} text text_type_main-large`}>Перенесите <br /> ингридиенты <br /> для <br /> бургера </span>
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
                            <ConstructorElement
                                type={"bottom"}
                                isLocked={true}
                                text="Булка не выбрана"
                                price='0'
                                thumbnail={img_dump}
                            />
                        }
                    </div>
                </section>
                :
                <section className={burCompStyles.section} style={{ border: '0.5px dashed #4c4cff', borderRadius: '40px' }} ref={dropTarget}>
                    <div className={`${burCompStyles.component} ml-4`}  >
                        <span className={`${burCompStyles.noingrall} text text_type_main-large`}>Перенесите <br /> ингридиенты <br /> для <br /> бургера </span>
                    </div>
                </section>
            }
        </>
      )
  }

  export default React.memo(BurgerComponent)