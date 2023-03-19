import React, { useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'
import moduleStyles from './ingrModal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/ModalOverlay';
import { useDispatch, useSelector } from "react-redux";
import { dataSelector, idSelector, showIngrSelector } from "../../services/redux/selectors/selectorsIngr";
import { actionIngr } from "../../services/redux/actionCreators/actionIngr";
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../../services/redux/thunks/thunkIngr';
import { getCookie } from '../../utils/func-cooke';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

const modalDiv = document.getElementById("modals")

const IngrModal = ({ ipProps }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const isShow = useSelector(showIngrSelector)
    const data = useSelector(dataSelector)
    const id = useSelector(idSelector)

    useEffect(() => {
        const accessToken = getCookie('accessToken')
        if (!accessToken) {
            //toast.error('Только авторизованные пользователи могут просматривать ингредиенты', { duration: 4000, position: 'top-right', style: { background: 'black', color: 'white', border: '2px solid #4c4cff', fontfamily: 'JetBrains Mono' } });
            navigate('/login', { replace: true })
        }
        if (data && accessToken) {
            dispatch(fetchData())
        }
    }, []);


    const dataModul = data.filter((item) => item._id === id || ipProps )

    const close = useCallback(() => {
        dispatch(actionIngr.setShowIngr(false))
        navigate(-1);
    }, [isShow, navigate, dispatch])

    useEffect(() => {
        const modalDiv = document.getElementById("modalIngr")
        const ModalOverlay = (e) => { e.target === modalDiv && close() }
        document.addEventListener("click", ModalOverlay)

        const esc = (e) => { e.key === "Escape" && isShow && close() }
        document.addEventListener("keydown", esc)

        return () => {
            document.removeEventListener("click", ModalOverlay)
            document.removeEventListener("keydown", esc)
        }
    }, [isShow, close]);

    return ReactDOM.createPortal(
        <>
            {dataModul[0] &&
                <>
                    <div className={moduleStyles.wrapper}>
                        <div className={`${ id ? moduleStyles.card : moduleStyles.cardNoModal}`}>
                        
                            <div className={moduleStyles.header}>
                                <span className={`${ id ? moduleStyles.headText : moduleStyles.headTextNoModal}`}>Детали ингредиента</span>
                                {id &&
                                <span className={moduleStyles.headClose} onClick={close}> <CloseIcon type="primary" /></span>
                                }
                            </div>

                            <img src={dataModul[0].image_large} className={moduleStyles.img} alt="изображение ингридиента" />

                            <p className={moduleStyles.frame}>
                                <span className={moduleStyles.frameSpan}>{dataModul[0].name}</span>
                            </p>

                            <section className={moduleStyles.nutrition}>
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
                    </div><ModalOverlay id="modalIngr" />
                </>
            }
            
        </>,
        modalDiv
    )
}

export default React.memo(IngrModal);

IngrModal.propTypes = {
    ipProps: PropTypes.any
};