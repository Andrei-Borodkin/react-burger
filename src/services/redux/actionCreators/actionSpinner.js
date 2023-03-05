import { LOADING } from "../actionTypes/actionTypes";

export const actionSpinner = {
  loading: (payload) => ({
    type: LOADING,
    payload,
  }),
}
