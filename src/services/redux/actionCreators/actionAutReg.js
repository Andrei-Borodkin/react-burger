import { REGISTER_FORM_SET_VALUE, SET_STATUS_REGISTER } from "../actionTypes/actionTypes";

export const actionAutReg = {
  setRegister: (field, value) => ({
    type: REGISTER_FORM_SET_VALUE,
    field,
    value
  }),
  setStatus: (payload) => ({
    type: SET_STATUS_REGISTER,
    payload
  }),

 }
