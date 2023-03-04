import { combineReducers } from 'redux';
import { reducerConstr } from "./reducerConstr";
import { reducerIngr } from "./reducerIngr";
import { reducerOrder } from "./reducerOrder";
import { reducerSpinner } from "./reducerSpinner";

export const rootReducer = combineReducers({
  constr: reducerConstr,
  ingr: reducerIngr,
  order: reducerOrder,
  spinner:reducerSpinner,
});