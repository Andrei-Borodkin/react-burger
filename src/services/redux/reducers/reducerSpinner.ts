import { TactionSpinner } from "../actionCreators/actionSpinner";
import { LOADING } from "../actionTypes/actionTypes";

type TinitialState = {
  isLoading: boolean
}

export const initialState: TinitialState = {
  isLoading: true,
}

export const reducerSpinner = (state = initialState, action: TactionSpinner): TinitialState => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state;
  }
}
