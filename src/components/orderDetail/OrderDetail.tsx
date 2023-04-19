import React from 'react'
import moduleStyles from './order-detail.module.css';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from "../../services/redux/store";
import { orderSelector } from "../../services/redux/selectors/selectorsOrder";


const OrderDetail = () => {

    const order = useSelector(orderSelector)

    return (
        <>
            <h1 className={moduleStyles.number}>
                <span className={moduleStyles.numberSpan}>{order}</span>
            </h1>

            <p className={moduleStyles.id}>
                <span className={moduleStyles.idSpan}>идентификатор заказа</span>
            </p>

            <div className={moduleStyles.done}>
                <div className={moduleStyles.ico}><CheckMarkIcon type="primary" /></div>
                <div className={moduleStyles.vector1}></div>
                <div className={moduleStyles.vector2}></div>
                <div className={moduleStyles.vector3}></div>
            </div>

            <p className={moduleStyles.go}>
                <span className={moduleStyles.goSpan}>Ваш заказ начали готовить</span>
            </p>

            <p className={moduleStyles.redy}>
                <span className={moduleStyles.redySpan}>Дождитесь готовности на орбитальной станции</span>
            </p>

        </>

    )
}

export default React.memo(OrderDetail);