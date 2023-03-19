import { combineReducers } from 'redux';
import { reducerConstr } from "./reducerConstr";
import { reducerIngr } from "./reducerIngr";
import { reducerOrder } from "./reducerOrder";
import { reducerSpinner } from "./reducerSpinner";
import { reducerAutReg } from "./reducerAutReg";
import { reducerSignIn } from "./reducerSingIn";
import { reducerForgResPas } from "./reducerForgResPas";


export const rootReducer = combineReducers({
  constr: reducerConstr,
  ingr: reducerIngr,
  order: reducerOrder,
  spinner: reducerSpinner,
  autReg: reducerAutReg,
  rSignIn: reducerSignIn,
  rFRP: reducerForgResPas
});