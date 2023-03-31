import {  SET_FORGOT_MAIL, SET_FORGOT_STATUS, SET_FORGOT_PASSWORD, SET_RESET_STATUS, CL_RES_PASS } from "../actionTypes/actionTypes";

export const actionForgResPas = {
  setMail: (payload) => ({
    type: SET_FORGOT_MAIL,
    payload
  }),

  setStatus: (payload) => ({
    type: SET_FORGOT_STATUS,
    payload
  }),
  setPassword: (field, value) => ({
    type: SET_FORGOT_PASSWORD,
    field,
    value
  }),

  setStatusRes: (payload) => ({
    type: SET_RESET_STATUS,
    payload
  }),

  setInitialState: () => ({
    type: CL_RES_PASS,
  }),
  

 }
