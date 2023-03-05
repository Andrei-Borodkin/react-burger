import React, { useRef} from 'react'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import burCompStyles from './burel.module.css';
import { useDispatch } from "react-redux";
import { useDrop, useDrag } from "react-dnd";
import { actionConstr } from "../../services/redux/actionCreators/actionConstr"
import PropTypes from 'prop-types';

const CompConstructorElement = ({val, index, mConstElement}) => {
   
    const dispatch = useDispatch()
    const ref = useRef(null);

    const delIngr = (id) => {
        dispatch(actionConstr.delIngr(id))
    }

      const [{ handlerId }, dropTarget] = useDrop({
        accept: 'component',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            mConstElement(dragIndex, hoverIndex);
            item.index = hoverIndex;
        }
    })

    const [{ isDragging }, dragRef] = useDrag({
        type: 'component',
        item: () => ({ id: val.id, index }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    dragRef(dropTarget(ref));

    const opacity = isDragging ? 0 : 1;
    const preventDefault = (e) => e.preventDefault();


    return (
                      
        <div 
            className={burCompStyles.component} 
            ref={ref}
            style={{ opacity }}
            onDrop={preventDefault}
            data-handler-id={handlerId}
        >
            <div className={burCompStyles.svg}>
                <DragIcon type="primary" />
            </div>

            <ConstructorElement
                isLocked={false}
                text={val.name}
                price={val.price}
                thumbnail={val.image}
                handleClose = {() => delIngr(val.id)}
                
            />
        </div>

      )
  }

  export default React.memo(CompConstructorElement)

CompConstructorElement.propTypes = {
    val: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired,
    mConstElement: PropTypes.func.isRequired
}