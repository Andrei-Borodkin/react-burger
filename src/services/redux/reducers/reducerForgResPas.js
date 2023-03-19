import { SET_FORGOT_MAIL, SET_FORGOT_STATUS, SET_FORGOT_PASSWORD, SET_RESET_STATUS, CL_RES_PASS } from "../actionTypes/actionTypes";

export const initialState = {
    email: "",
    password: "",
    kod: "",
    status: false,
    statusRes: false
}

export const reducerForgResPas = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORGOT_MAIL:
      return {
        ...state,
        email: action.payload,
      }

      case SET_FORGOT_STATUS:
        return {
          ...state,
          status: action.payload
        }

        case SET_FORGOT_PASSWORD:
          return {
            ...state,
            [action.field]: action.value
          }

          case SET_RESET_STATUS:
            return {
              ...state,
              statusRes: action.payload
            }

            case CL_RES_PASS:
              return {
                ...initialState
              }
  
    default:
      return state;
  }
}
