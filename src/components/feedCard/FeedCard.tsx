import React, { useMemo, FC } from 'react';
import styles from './feed-card.module.css';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from "../../services/redux/store";
import { IngredientIcon } from "../fedd-ico/Feed-Ico";
import { Link, useLocation } from 'react-router-dom';
import { actionIngr } from '../../services/redux/actionCreators/actionIngr';
import { dataSelector } from '../../services/redux/selectors/selectorsIngr';
import { Torders } from '../../utils/types';

type TFeedStatsList = {
    orders: Torders;
}

const FeedCard: FC<TFeedStatsList> = ({ orders }) => {

    const dispatch = useDispatch()
    const location = useLocation()

    const data = useSelector(dataSelector)

    const icons: string[] = []
    const summ: number[] = []
    orders.ingredients.forEach((element) => {
        if (element !== null) {

            data.find(item => {
                if (item._id === element) {
                    icons.unshift(item.image_large)
                    summ.unshift(item.price)
                }
            })
        }
    })

    const summIng = summ.reduce((rez, arr) => { return rez + arr }, 0)

    const openAndGet = (id: string) => {
        dispatch(actionIngr.setShowIngr(true))
        dispatch(actionIngr.setIdMod(id))
    }

    return (
        <Link
            to={{ pathname: `${location.pathname}/${orders._id}` }}
            state={{ background: location.pathname }}
            className={styles.link}
            onClick={() => openAndGet(orders._id)}
        >

            <>
                <div className={styles.card}>
                    <div className={styles.id}>
                        <span className={styles.textID}>#{orders.number}</span>
                        <span className={styles.textTime}><FormattedDate date={new Date(orders.createdAt)} /></span>
                    </div>

                    <div className={styles.info}>
                        <span className={styles.infoName}>{orders.name}</span>
                        <span className={styles.infoStatus}>{orders.status}</span>
                    </div>

                    <div className={styles.compPrice}>
                        <div className={styles.ingr}>
                            <div className={styles.items_list}>
                                {icons.map((el, index) => (
                                    index < 6 &&
                                    <IngredientIcon
                                        key={index}
                                        src={el}
                                        srcSet={el}
                                        overflow={icons.length > 6 && index === 0 ? icons.length - 5 : 0}
                                        extraClass={styles.items_picture}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className={styles.price}>
                            <p className={styles.textPrice}>{summIng}</p>
                            <div><CurrencyIcon type="primary" /></div>
                        </div>

                    </div>

                </div>
            </>
        </Link>
    )
}

export default React.memo(FeedCard)