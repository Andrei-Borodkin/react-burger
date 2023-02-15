import punsStyles from './puns.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

function Puns({type, data}) {
    return (
        <>
        {data.map((val, index)=>(
            val.type === type && (
                <div className={punsStyles.item} key={index}>
                    <div className={punsStyles.counter}>
                        <div className={punsStyles.round}>
                            <div className={punsStyles.remains}>
                                1
                            </div>
                        </div>
                    </div>

                    <div className={punsStyles.content}>
                        <img src={val.image} className={punsStyles.img} />
                        <div className={punsStyles.price}>
                            {val.price}
                            <CurrencyIcon type="primary" />
                        </div>
                        <div className={punsStyles.name}>
                            {val.name}
                        </div>
                    </div>
                </div>
            )
        ))}
        </>
    );
  }
  
export default Puns

Puns.propTypes = {
    data: PropTypes.array,
    type: PropTypes.string
  }; 