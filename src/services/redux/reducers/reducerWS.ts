// rootReducer.ts

import { TData } from '../../../utils/types';
import { TactionWS } from '../actionCreators/actionWS';
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_DATA
} from '../actionTypes/actionTypes';

type TinitialState = {
  wsConnected: boolean,
  data: TData,
  error?: Event;
}

const initialState: TinitialState = {
  wsConnected: false,
  data: { orders: [], total: 0, totalToday: 0 }
};

// Создадим редьюсер для WebSocket
export const reducerWS = (state = initialState, action: TactionWS): TinitialState => {
  switch (action.type) {
    // Опишем обработку экшена с типом WS_CONNECTION_SUCCESS
    // Установим флаг wsConnected в состояние true
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };

    // Опишем обработку экшена с типом WS_CONNECTION_ERROR
    // Установим флаг wsConnected в состояние false и передадим ошибку из action.payload
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };

    // Опишем обработку экшена с типом WS_CONNECTION_CLOSED, когда соединение закрывается
    // Установим флаг wsConnected в состояние false
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        data: initialState.data,
        error: undefined,
        wsConnected: false
      };

    // Опишем обработку экшена с типом WS_GET_DATA
    // Обработка происходит, когда с сервера возвращаются данные
    // В messages передадим данные, которые пришли с сервера
    case WS_GET_DATA:
      return {
        ...state,
        error: undefined,
        //messages: [...state.messages, action.payload]
        data: action.payload
      };
    default:
      return state;
  }
};