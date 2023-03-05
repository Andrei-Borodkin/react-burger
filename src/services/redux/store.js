import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, applyMiddleware } from "redux";
import  { rootReducer } from "./reducers/index";

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
)





