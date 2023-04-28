import { TactionSignIn } from "../actionCreators/actionSignIn";
import { SET_SIGNIN, SET_SIGNIN_STATUS, SET_SIGNIN_STATUS_REF, CL_SIGNIN, SET_SIGNIN_NEW, CL_SIGNIN_NEW } from "../actionTypes/actionTypes";


type TinitialState = {
  email: string,
  password: string,
  name: string,
  emailNew: string,
  passwordNew: string,
  nameNew: string,
  statusSign: boolean
}

export const initialState: TinitialState = {
  email: "",
  password: "",
  name: "",
  emailNew: "",
  passwordNew: "",
  nameNew: "",
  statusSign: false
}

export const reducerSignIn = (state = initialState, action: TactionSignIn): TinitialState => {
  switch (action.type) {
    case SET_SIGNIN:
      return {
        ...state,
        [action.field]: action.value,
      }
    case SET_SIGNIN_NEW:
      return {
        ...state,
        [action.field]: action.value,
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

      case CL_SIGNIN_NEW:
        return {
          ...state,
          emailNew: initialState.emailNew,
          passwordNew: initialState.passwordNew,
          nameNew: initialState.nameNew,
        }
      

    default:
      return state;
  }
}
