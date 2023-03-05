import { LOADING } from "../actionTypes/actionTypes";

export const initialState = {
  isLoading: true,
}

export const reducerSpinner = (state = initialState, action) => {
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
