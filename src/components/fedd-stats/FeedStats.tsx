import React from 'react';
import styles from './feed-stats.module.css';
import FeedStatsList from "../feed-stats-list/FeedStatsList";
import { useSelector } from "../../services/redux/store";
import { ordersSelectorWS, totalSelectorWS, totalTodaySelectorWS } from '../../services/redux/selectors/selectorsWS';
import { Torders } from '../../utils/types';


const FeedStats = () => {

    const orders = useSelector(ordersSelectorWS)
    const totalToday = useSelector(totalTodaySelectorWS)
    const total = useSelector(totalSelectorWS)

    const done = orders.filter((item: Torders) => item.status === "done")
    const work = orders.filter((item: Torders) => item.status !== "done")

    return (
        <div className={styles.stats}>
            <div className={styles.orders}>
                <FeedStatsList title="Готовы:" ncolor='#00CCCC' masOrders={done} />
                <FeedStatsList title="В работе:" ncolor='#F2F2F3' masOrders={work} />
            </div>

            <div className={styles.completed}>
                <span className={styles.completedText}>Выполнено за все время:</span>
                <span className={styles.completedListText}>{total}</span>
            </div>

            <div className={styles.completed}>
                <span className={styles.completedText}>Выполнено за сегодня:</span>
                <span className={styles.completedListText}>{totalToday}</span>
            </div>
        </div>
    )
}

export default React.memo(FeedStats)