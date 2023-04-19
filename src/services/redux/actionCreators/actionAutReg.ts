import { REGISTER_FORM_SET_VALUE, SET_STATUS_REGISTER } from "../actionTypes/actionTypes";

export type TSetRegister = {
  readonly type: typeof REGISTER_FORM_SET_VALUE;
  readonly field: string;
  readonly value: string;
}

export type TSetStatus = {
  readonly type: typeof SET_STATUS_REGISTER;
  readonly payload: boolean;
}

export type TActionAutReg = TSetRegister | TSetStatus;

export const actionAutReg = {
  setRegister: (field: string, value: string): TSetRegister => ({
    type: REGISTER_FORM_SET_VALUE,
    field,
    value
  }),
  setStatus: (payload: boolean): TSetStatus => ({
    type: SET_STATUS_REGISTER,
    payload
  }),

}
