import React, { FC } from 'react';
import styles from './feed-stats-list.module.css';
import { Torders } from '../../utils/types';

type TFeedStatsList = {
    title: string;
    ncolor: string;
    masOrders: Torders[];
}

const FeedStatsList: FC<TFeedStatsList> = ({ title, ncolor, masOrders }) => {

    return (
        <div className={styles.content}>
            <span className={styles.text}>{title}</span>
            <div className={styles.list}>
                <div className={styles.listItem} style={{ color: ncolor }}>
                    {masOrders[0] && masOrders.map((val, index) => (
                        <div key={val._id}>
                            {index < 10 && <span className={styles.listSpan}>{val.number}</span>}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default React.memo(FeedStatsList)