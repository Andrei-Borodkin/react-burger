import { TactionOrder } from "../actionCreators/actionOrder";
import { GET_ORDER_FAILED, SET_ORDER } from "../actionTypes/actionTypes";

export type TinitialState = {
  order: string,
}

export const initialState: TinitialState = {
  order: ""
}

export const reducerOrder = (state = initialState, action: TactionOrder): TinitialState => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        order: action.payload
      }
      case GET_ORDER_FAILED:
        return {
          order: initialState.order
        }
    default:
      return state;
  }
}
