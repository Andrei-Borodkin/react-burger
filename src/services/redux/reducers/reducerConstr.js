import { SET_SHOW, ADD_CONSTR, CL_CONSTR, DEL_INGR, UPD_INGR } from "../actionTypes/actionTypes";

export const initialState = {
  isShow: false,
  bun: null,
  ingr: [],
}

export const reducerConstr = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW:
      return {
        ...state,
        isShow: action.payload
      }
    case ADD_CONSTR: {
      if (action.payload.type === "bun") {
        return { ...state, bun: action.payload }
      }
      return {
        ...state,
        ingr: [...state.ingr, action.payload],
      }
    }
    case CL_CONSTR:
      return {
        ...state,
        bun: initialState.bun,
        ingr: initialState.ingr,
      }
    case DEL_INGR:
      return {
        ...state,
        ingr: state.ingr.filter((item) => item.id !== action.payload)
      }
    case UPD_INGR:
      return {
        ...state,
        ingr: action.payload
      }
    default:
      return state;
  }
}
