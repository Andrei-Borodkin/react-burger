import React, { FC } from 'react'
import moduleStyles from './ingr-detail.module.css';
import { useSelector } from "react-redux";
import { dataSelector, idSelector, showIngrSelector } from "../../services/redux/selectors/selectorsIngr";
import { T_Id } from '../../utils/types';


type TIngrDetailProps = {
    idProps?: string;
}

const IngrDetail: FC<TIngrDetailProps> = ({ idProps }) => {

    const data = useSelector(dataSelector)
    const id = useSelector(idSelector)

    const dataModul = data.filter((item: T_Id) => item._id === id || idProps)

    return (
        <>
            {dataModul[0] &&
                <>
                <div className={`${ idProps &&  moduleStyles.cardNoModal}`}>
                    <div className={moduleStyles.header}>
                        <span className={moduleStyles.headText}>Детали ингредиента</span>
                    </div>

                    <img src={dataModul[0].image_large} className={`${ id ? moduleStyles.img : moduleStyles.imgNoModal}`} alt="изображение ингридиента" />

                    <p className={`${ id ? moduleStyles.frame : moduleStyles.frameNoModal}`}>
                        <span className={moduleStyles.frameSpan}>{dataModul[0].name}</span>
                    </p>

                    <section className={`${ id ? moduleStyles.nutrition : moduleStyles.nutritionNoModul}`}>
                        <div className={moduleStyles.values1}>
                            <span className={moduleStyles.kkal}>Калории, ккал</span>
                            <span className={moduleStyles.valname}>{dataModul[0].calories}</span>
                        </div>
                        <div className={moduleStyles.values2}>
                            <span className={moduleStyles.kkal}>Белки, г</span>
                            <span className={moduleStyles.valname}>{dataModul[0].proteins}</span>
                        </div>
                        <div className={moduleStyles.values3}>
                            <span className={moduleStyles.kkal}>Жиры, г</span>
                            <span className={moduleStyles.valname}>{dataModul[0].fat}</span>
                        </div>
                        <div className={moduleStyles.values4}>
                            <span className={moduleStyles.kkal}>Углеводы, г</span>
                            <span className={moduleStyles.valname}>{dataModul[0].carbohydrates}</span>
                        </div>
                    </section>
                </div>
                </>
            }

        </>

    )
}

export default React.memo(IngrDetail);