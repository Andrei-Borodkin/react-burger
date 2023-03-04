import { SET_ORDER } from "../actionTypes/actionTypes";

export const initialState = {
  order: ""
}

export const reducerOrder = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        order: action.payload
      }
    default:
      return state;
  }
}
