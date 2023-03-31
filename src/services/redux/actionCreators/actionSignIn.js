import { SET_SIGNIN, SET_SIGNIN_STATUS, SET_SIGNIN_STATUS_REF, CL_SIGNIN, SET_SIGNIN_NEW, CL_SIGNIN_NEW } from "../actionTypes/actionTypes";

export const actionSignIn = {
  setSignIn: (field, value) => ({
    type: SET_SIGNIN,
    field,
    value
  }),
  setSignInNew: (field, value) => ({
    type: SET_SIGNIN_NEW,
    field,
    value
  }),
  setStatusSignIn: (payload) => ({
    type: SET_SIGNIN_STATUS,
    payload
  }),
  setStatusSignInRef: (name, email) => ({
    type: SET_SIGNIN_STATUS_REF,
    name,
    email
  }),

  clSignIn: () => ({
    type: CL_SIGNIN,
  }),

  clSignInNew: () => ({
    type: CL_SIGNIN_NEW,
  }),


}
