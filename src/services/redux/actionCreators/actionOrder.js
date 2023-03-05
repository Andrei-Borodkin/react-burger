import { SET_ORDER, GET_ORDER_FAILED } from "../actionTypes/actionTypes";

export const actionOrder = {
  setOrder: (payload) => ({
    type: SET_ORDER,
    payload
  }),
  setInitialState: () => ({
    type: GET_ORDER_FAILED,
  }),
}
