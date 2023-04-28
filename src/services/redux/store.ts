import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, applyMiddleware, ActionCreator } from "redux";
import  { rootReducer } from "./reducers/index";
import  { TApplicationActions } from "./actionCreators/index";
import { ThunkDispatch, ThunkAction } from "redux-thunk";

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { socketMiddleware } from "./socketMiddleware/socketMiddleware";

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware, socketMiddleware())
  )
)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>
export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, RootState, never, TApplicationActions>>

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch>()