import { SET_DATA,  SET_ID_MOD, SET_SHOW_INGR, SET_NAVIGATION} from "../actionTypes/actionTypes";

export const initialState = {
  data: [],
  isShowInger: false,
  idtouch: "",
  curNav: "bun",
  idmove: "",
}

export const reducerIngr = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload
      }
    case SET_SHOW_INGR:
      return {
        ...state,
        isShowInger: action.payload,
        idtouch: initialState.idtouch
      }
    case SET_ID_MOD:
      return {
        ...state,
        idtouch: action.payload
      }
    case SET_NAVIGATION:
      return {
        ...state,
        curNav: action.payload
      }
    default:
      return state;
  }
}
