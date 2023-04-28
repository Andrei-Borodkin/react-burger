import { RootState } from "../store"

export const loadingSelector = (state: RootState) => state.spinner.isLoading