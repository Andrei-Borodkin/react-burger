import { TIngr } from "../../../utils/types";
import { SET_DATA, SET_ID_MOD, SET_SHOW_INGR, SET_NAVIGATION, GET_INGR_FAILED, SET_ISSHOWINGER_ID } from "../actionTypes/actionTypes";

export type TsetData = {
  readonly type: typeof SET_DATA;
  readonly payload: TIngr[];
}
export type TsetShowIngr = {
  readonly type: typeof SET_SHOW_INGR;
  readonly payload: boolean;
}
export type TsetShowIngrID = {
  readonly type: typeof SET_ISSHOWINGER_ID;
  readonly payload: boolean;
  readonly id: string;
}
export type TsetIdMod = {
  readonly type: typeof SET_ID_MOD;
  readonly payload: string;
}
export type TsetNavigation = {
  readonly type: typeof SET_NAVIGATION;
  readonly payload: string;
}
export type TsetInitialState = {
  readonly type: typeof GET_INGR_FAILED;
}

export type TactionIngr = TsetData | TsetShowIngr | TsetShowIngrID | TsetIdMod | TsetNavigation | TsetInitialState


export const actionIngr = {
  setData: (payload: TIngr[]): TsetData => ({
    type: SET_DATA,
    payload
  }),
  setShowIngr: (payload: boolean): TsetShowIngr => ({
    type: SET_SHOW_INGR,
    payload
  }),
  setShowIngrID: (payload: boolean, id: string): TsetShowIngrID => ({
    type: SET_ISSHOWINGER_ID,
    payload,
    id
  }),
  setIdMod: (payload: string): TsetIdMod => ({
    type: SET_ID_MOD,
    payload
  }),
  setNavigation: (payload: string): TsetNavigation => ({
    type: SET_NAVIGATION,
    payload
  }),
  setInitialState: (): TsetInitialState => ({
    type: GET_INGR_FAILED,
  }),

}
