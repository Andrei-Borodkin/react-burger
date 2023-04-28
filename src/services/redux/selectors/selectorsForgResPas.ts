import { RootState } from "../store"

export const rFRPSelector = (state: RootState) => state.rFRP
export const rFRPEmailSelector = (state: RootState) => state.rFRP.email