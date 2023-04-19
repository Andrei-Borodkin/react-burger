import { RootState } from "../store"

export const ordersSelectorWS = (state: RootState) => state.ws.data.orders
export const totalSelectorWS = (state: RootState) => state.ws.data.total
export const totalTodaySelectorWS = (state: RootState) => state.ws.data.totalToday
export const wsConnectedSelectorWS = (state: RootState) => state.ws.wsConnected