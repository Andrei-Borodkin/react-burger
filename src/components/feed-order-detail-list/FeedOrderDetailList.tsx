import React, { FC } from 'react';
import styles from './feed-order-detail-list.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { IngredientIcon } from '../fedd-ico/Feed-Ico';
import { Tcounts, TmasIngr } from '../../utils/types';

type TFeedOrderDetailList = {
    list: TmasIngr;
    counts: Tcounts;
}

const FeedOrderDetailList: FC<TFeedOrderDetailList> = ({ list, counts }) => {

    return (
        <div className={styles.listItem}>

            <IngredientIcon
                src={list.image}
                srcSet={list.image}
                extraClass={styles.items_picture}
            />

            <div className={styles.itemFrame}>
                <span className={styles.itemText}>{list.name}</span>
            </div>

            <div className={styles.price}>
                <p className={styles.textPrice}>{`${counts[list.id]} x ${list.price}`}</p>
                <div><CurrencyIcon type="primary" /></div>
            </div>
        </div>
    )
}

export default React.memo(FeedOrderDetailList)