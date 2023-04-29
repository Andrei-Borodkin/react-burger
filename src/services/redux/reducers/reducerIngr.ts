import { SET_DATA,  SET_ID_MOD, SET_SHOW_INGR, SET_NAVIGATION, GET_INGR_FAILED, SET_ISSHOWINGER_ID} from "../actionTypes/actionTypes";
import { TIngr } from "../../../utils/types";
import { TactionIngr } from "../actionCreators/actionIngr";


export type TinitialState = {
  data: ReadonlyArray<TIngr>,
  isShowInger: boolean,
  idtouch: string,
  curNav: string,
  idmove: string,
}

export const initialState: TinitialState = {
  data: [],
  isShowInger: false,
  idtouch: "",
  curNav: "bun",
  idmove: "",
}

export const reducerIngr = (state = initialState, action: TactionIngr) => {
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
      case SET_ISSHOWINGER_ID:
        return {
          ...state,
          isShowInger: action.payload,
          idtouch: action.id
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
      case GET_INGR_FAILED:
        return {
          ...initialState
        }
    default:
      return state;
  }
}
