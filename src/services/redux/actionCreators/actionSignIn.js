import { SET_SIGNIN, SET_SIGNIN_STATUS, SET_SIGNIN_STATUS_REF, CL_SIGNIN } from "../actionTypes/actionTypes";

export const actionSignIn = {
  setSignIn: (field, value) => ({
    type: SET_SIGNIN,
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

 }
