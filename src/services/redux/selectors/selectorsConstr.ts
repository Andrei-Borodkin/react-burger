
import { RootState } from "../store"

export const showSelector = (state: RootState) => state.constr.isShow
export const showIngrBun = (state: RootState) => state.constr.bun
export const showIngr = (state: RootState) => state.constr.ingr