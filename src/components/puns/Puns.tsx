import React, { useMemo, FC } from 'react'
import punsStyles from './puns.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from "../../services/redux/store";
import { actionIngr } from "../../services/redux/actionCreators/actionIngr";
import { showIngrBun, showIngr } from "../../services/redux/selectors/selectorsConstr";
import { useDrag } from "react-dnd";
import { Link, useLocation } from 'react-router-dom';
import { TvalPunsProps } from "../../utils/types";


export type TvalPunsPropsComp = {
    valPuns: TvalPunsProps;
}

export type TElement_id = {
    _id: string;
}

export type TMasCount = {
    [_id: string]: number;
}

const Puns: FC<TvalPunsPropsComp> = ({ valPuns }) => {

    const dispatch = useDispatch()
    const location = useLocation();

    const dataBun = useSelector(showIngrBun)
    const ingr = useSelector(showIngr)

    const colRemains = useMemo(() => {
        const masCount: TMasCount = {}
        if (ingr.length > 0) {
            ingr.forEach((element: TElement_id) => {
                if (!masCount[element._id]) masCount[element._id] = 0
                masCount[element._id]++
            })
        }
        if (dataBun) masCount[dataBun._id] = 2
        return masCount

    }, [ingr, dataBun])

    const openAndGet = (id: string) => {
        dispatch(actionIngr.setShowIngr(true))
        dispatch(actionIngr.setIdMod(id))
    }

    const [{ opacity }, dragRef] = useDrag({
        type: "data",
        item: { valPuns },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.3 : 1
        })
    });

    return (

        <Link

            key={valPuns._id}
            to={{ pathname: `/ingredients/${valPuns._id}` }}
            state={{ background: location.pathname }}
            className={punsStyles.link}
            data-cy="puns"
        >

            <div
                className={punsStyles.item}
                key={valPuns._id}
                id={valPuns._id}
                onClick={() => openAndGet(valPuns._id)}
                draggable="true"
                ref={dragRef}
                style={{ opacity }}
            >
                {colRemains[valPuns._id] &&
                    <div className={punsStyles.counter}>
                        <div className={punsStyles.round}>
                            <div className={punsStyles.remains}>
                                {colRemains[valPuns._id]}
                            </div>
                        </div>
                    </div>
                }
                <div className={punsStyles.content} >
                    <img src={valPuns.image} className={punsStyles.img} alt="изображение ингридиента" />
                    <div className={punsStyles.price}>
                        {valPuns.price}
                        <CurrencyIcon type="primary" />
                    </div>
                    <div className={punsStyles.name}>
                        {valPuns.name}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default React.memo(Puns)