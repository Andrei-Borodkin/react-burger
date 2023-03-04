import React, {useMemo} from 'react'
import punsStyles from './puns.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { actionIngr } from "../../services/redux/actionCreators/actionIngr";
import { showIngrBun, showIngr } from "../../services/redux/selectors/selectorsConstr";
import { useDrag } from "react-dnd";

const Puns = ({ valPuns }) => {

    const dispatch = useDispatch()

    const dataBun = useSelector(showIngrBun)
    const ingr = useSelector(showIngr)

    const colRemains = useMemo(() => {
        const masCount = {}
        if (ingr.length > 0){
            ingr.forEach(element => {
                if (!masCount[element._id]) masCount[element._id] = 0
                masCount[element._id]++
            })
        }
        if (dataBun) masCount[dataBun._id] = 2
        return masCount

    }, [ingr, dataBun])

    const openAndGet = (id) => {
        dispatch(actionIngr.setShowIngr(true))
        dispatch(actionIngr.setIdMod(id))
    }

    
    const [{ opacity }, dragRef] = useDrag({
        type: "data",
        item: {id_move: valPuns._id},
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.3 : 1
        })
    });
    
    return (
        <div 
            className={punsStyles.item} 
            key={valPuns._id} 
            id={valPuns._id} 
            onClick={() => openAndGet(valPuns._id)} 
            draggable="true"
            ref={dragRef}
            style={{ opacity }}
        >
            { colRemains[valPuns._id] &&
            <div className={punsStyles.counter}>
                <div className={punsStyles.round}>
                    <div className={punsStyles.remains}>
                        {colRemains[valPuns._id]}
                    </div>
                </div>
            </div>
            }
            <div className={punsStyles.content} >
                <img src={valPuns.image} className={punsStyles.img} alt="изображение ингридиента"/>
                <div className={punsStyles.price}>
                    {valPuns.price}
                    <CurrencyIcon type="primary" />
                </div>
                <div className={punsStyles.name}>
                    {valPuns.name}
                </div>
            </div>
        </div>
   );
  }
  
export default React.memo(Puns)

Puns.propTypes = {
    valPuns: PropTypes.shape({ 
        _id: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
     }).isRequired
};