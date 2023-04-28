import { RootState } from "../store"

export const dataSelector = (state: RootState) => state.ingr.data
export const showIngrSelector = (state: RootState) => state.ingr.isShowInger
export const idSelector = (state: RootState) => state.ingr.idtouch
export const curNavSelector = (state: RootState) => state.ingr.curNav
export const dataSelectorId = (state: RootState) => state.ingr.data.map(item => item._id)