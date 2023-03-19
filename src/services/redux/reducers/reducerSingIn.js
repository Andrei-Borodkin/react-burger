import {  SET_SIGNIN, SET_SIGNIN_STATUS, SET_SIGNIN_STATUS_REF, CL_SIGNIN } from "../actionTypes/actionTypes";

export const initialState = {
    email: "",
    password: "",
    name: "",
    statusSign: false
}

export const reducerSignIn = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNIN:
      return {
        ...state,
        [action.field]: action.value
      }

      case SET_SIGNIN_STATUS:
        return {
          ...state,
          password: initialState.password,
          statusSign: true,
          name: action.payload
        }
     
        case SET_SIGNIN_STATUS_REF:
          return {
            ...state,
            statusSign: true,
            name: action.name,
            email: action.email,
          }
          case CL_SIGNIN:
            return {
              ...initialState
            }
         
    default:
      return state;
  }
}
