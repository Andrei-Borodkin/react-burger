import { SET_FORGOT_MAIL, SET_FORGOT_STATUS, SET_FORGOT_PASSWORD, SET_RESET_STATUS, CL_RES_PASS } from "../actionTypes/actionTypes";



export type TsetMail = {
  readonly type: typeof SET_FORGOT_MAIL;
  readonly payload: string;
}
export type TsetStatus = {
  readonly type: typeof SET_FORGOT_STATUS;
  readonly payload: boolean;
}
export type TsetPassword = {
  readonly type: typeof SET_FORGOT_PASSWORD;
  readonly field: string;
  readonly value: string;
}

export type TsetStatusRes = {
  readonly type: typeof SET_RESET_STATUS;
  readonly payload: boolean;
}
export type TsetInitialState = {
  readonly type: typeof CL_RES_PASS;
}

export type TactionForgResPas = TsetMail | TsetStatus | TsetPassword | TsetStatusRes | TsetInitialState


export const actionForgResPas = {
  setMail: (payload: string): TsetMail => ({
    type: SET_FORGOT_MAIL,
    payload
  }),

  setStatus: (payload: boolean): TsetStatus => ({
    type: SET_FORGOT_STATUS,
    payload
  }),
  setPassword: (field: string, value: string): TsetPassword => ({
    type: SET_FORGOT_PASSWORD,
    field,
    value
  }),

  setStatusRes: (payload: boolean): TsetStatusRes => ({
    type: SET_RESET_STATUS,
    payload
  }),

  setInitialState: () => ({
    type: CL_RES_PASS,
  }),


}
