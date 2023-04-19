import { SET_ORDER, GET_ORDER_FAILED } from "../actionTypes/actionTypes";

export type TsetOrder = {
  readonly type: typeof SET_ORDER;
  readonly payload: string;
}
export type TsetInitialState= {
  readonly type: typeof GET_ORDER_FAILED;
}

export type TactionOrder = TsetOrder | TsetInitialState

export const actionOrder = {
  setOrder: (payload: string): TsetOrder => ({
    type: SET_ORDER,
    payload
  }),
  setInitialState: (): TsetInitialState => ({
    type: GET_ORDER_FAILED,
  }),
}
