import React, { FC, useMemo, useEffect } from 'react';
import styles from './feed-order-detail.module.css';
import FeedOrderDetailList from '../feed-order-detail-list/FeedOrderDetailList';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from "../../services/redux/store";
import { dataSelector, idSelector } from '../../services/redux/selectors/selectorsIngr';
import { ordersSelectorWS } from '../../services/redux/selectors/selectorsWS';
import { actionWS } from '../../services/redux/actionCreators/actionWS';
import { wsUrl } from '../../utils/const-url';
import { Tcounts, TmasIngr, Torders } from '../../utils/types';

type TFeddOrderDetailProps = {
    idProps?: string;
    bmodal?: boolean;
}

const FeddOrderDetail: FC<TFeddOrderDetailProps> = ({ bmodal = false, idProps }) => {

    const position = bmodal ? 'relative' : '';
    const marginTop = bmodal ? '8%' : '';
    const justifyContent = bmodal ? 'space-around' : '';

    const dispatch = useDispatch()

    const data = useSelector(dataSelector)
    const id = useSelector(idSelector)
    const orders = useSelector(ordersSelectorWS)


    useEffect(() => {
        if (idProps) dispatch(actionWS.socketConnect(wsUrl));
        return () => { if (idProps) dispatch(actionWS.socketOnclose()) }
    }, [])

    const orderFind: Torders = orders.filter((item: Torders) => item._id === (id || idProps))[0]

    const masIngr: TmasIngr[] = []
    const summ: number[] = []
    orderFind &&
        orderFind.ingredients.forEach((element: string) => {
            if (element !== null) {
                data.find(item => {
                    if (item._id === element) {
                        masIngr.push({ image: item.image_large, name: item.name, price: item.price, id: item._id })
                        summ.unshift(item.price)
                    }
                })
            }

        })

    const summIng = useMemo(() => summ.reduce((rez, arr) => { return rez + arr }, 0), [summ])

    const counts: Tcounts = {};
    masIngr.forEach((element: TmasIngr) => { counts[element.id] = (counts[element.id] || 0) + 1; });
    
    const orderFindUnik = masIngr.filter((ele, ind) => ind === masIngr.findIndex((elem) => elem.id === ele.id))

    return (
        <>
            {orderFind && orderFindUnik[0] &&
                <>
                    <div style={{ position, marginTop } as React.CSSProperties}>
                        <div className={styles.frame}>
                            <span className={styles.frameText} style={{ justifyContent }}>#{orderFind.number}</span>
                        </div>

                        <div className={styles.info}>
                            <div className={styles.infoFrame}>
                                <span className={styles.infoText}>{orderFind.name}</span>
                            </div>
                            <div className={styles.infoFrame}>
                                <span className={styles.infoStatus}>{orderFind.status}</span>
                            </div>
                        </div>

                        <div className={styles.ingr}>
                            <div className={styles.ingrFrame}>
                                <span className={styles.ingrStatus}>Состав:</span>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.items}>
                                    {orderFindUnik.map((val, index: number) => (
                                        <div key={index}>
                                            <FeedOrderDetailList list={val} counts={counts} />
                                        </div>
                                    ))}

                                </div>
                            </div>

                        </div>

                        <div className={styles.timePrice}>
                            <div className={styles.alignment}>

                                <span className={styles.time}><FormattedDate date={new Date(orderFind.createdAt)} /></span>
                                <div className={styles.alignmentPrice}>
                                    <span className={styles.tPrice}>{summIng}</span>
                                    <CurrencyIcon type="primary" />
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default React.memo(FeddOrderDetail)