import { TActionAutReg } from "../actionCreators/actionAutReg";
import { REGISTER_FORM_SET_VALUE, SET_STATUS_REGISTER } from "../actionTypes/actionTypes";


type TinitialState = {
  email: string,
  password: string,
  name: string,
  statusReg: Boolean
}

export const initialState: TinitialState = {
    email: "",
    password: "",
    name: "",
    statusReg: false
}

export const reducerAutReg = (state = initialState, action: TActionAutReg): TinitialState => {
  switch (action.type) {
    case REGISTER_FORM_SET_VALUE:
      return {
        ...state,
        [action.field]: action.value
      }

      case SET_STATUS_REGISTER:
        return {
          ...state,
          statusReg: action.payload
        }
     
   
    default:
      return state;
  }
}
