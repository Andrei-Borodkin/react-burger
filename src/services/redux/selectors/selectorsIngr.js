export const dataSelector = (state) => state.ingr.data
export const showIngrSelector = (state) => state.ingr.isShowInger
export const idSelector = (state) => state.ingr.idtouch
export const curNavSelector = (state) => state.ingr.curNav
export const dataSelectorId = (state) => state.ingr.data.map(item => item._id)