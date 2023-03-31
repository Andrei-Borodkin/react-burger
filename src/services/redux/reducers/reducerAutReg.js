import { REGISTER_FORM_SET_VALUE, SET_STATUS_REGISTER } from "../actionTypes/actionTypes";

export const initialState = {
    email: "",
    password: "",
    name: "",
    statusReg: false
}

export const reducerAutReg = (state = initialState, action) => {
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
