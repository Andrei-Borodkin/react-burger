import { SET_DATA, SET_ID_MOD, SET_SHOW_INGR, SET_NAVIGATION, GET_INGR_FAILED } from "../actionTypes/actionTypes";

export const actionIngr = {
  setData: (payload) => ({
    type: SET_DATA,
    payload
  }),
  setShowIngr: (payload) => ({
    type: SET_SHOW_INGR,
    payload
  }),
  setIdMod: (payload) => ({
    type: SET_ID_MOD,
    payload
  }),
  setNavigation: (payload) => ({
    type: SET_NAVIGATION,
    payload
  }),
  setInitialState: () => ({
    type: GET_INGR_FAILED,
  }),

}
