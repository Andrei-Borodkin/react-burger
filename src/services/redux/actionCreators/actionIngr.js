import { SET_DATA, SET_ID_MOD, SET_SHOW_INGR, SET_NAVIGATION, GET_INGR_FAILED, SET_ISSHOWINGER_ID } from "../actionTypes/actionTypes";

export const actionIngr = {
  setData: (payload) => ({
    type: SET_DATA,
    payload
  }),
  setShowIngr: (payload) => ({
    type: SET_SHOW_INGR,
    payload
  }),
  setShowIngrID: (payload, id) => ({
    type: SET_ISSHOWINGER_ID,
    payload,
    id
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
