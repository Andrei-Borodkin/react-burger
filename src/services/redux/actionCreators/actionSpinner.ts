import { LOADING } from "../actionTypes/actionTypes";

export type Tloading= {
  readonly type: typeof LOADING;
  readonly payload: boolean;
}

export type TactionSpinner = Tloading

export const actionSpinner = {
  loading: (payload: boolean): Tloading => ({
    type: LOADING,
    payload,
  }),
}
