import type { Middleware, MiddlewareAPI } from 'redux';
import { TApplicationActions } from "../actionCreators/index";
import type { AppDispatch, RootState } from '../store';
import { actionWS } from '../actionCreators/actionWS';
import { actionSpinner } from '../actionCreators/actionSpinner';

export const socketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: TApplicationActions) => {
      const { dispatch, getState } = store;
      const { type } = action;


      if (type === 'WS_CONNECTION_START') {
        socket = new WebSocket(action.payload);
        dispatch(actionSpinner.loading(true))

      }
      if (socket) {

        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch(actionWS.socketOnopen(event));
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch(actionWS.socketOnerror(event));
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data)
          dispatch(actionWS.socketOnmessage(parsedData));
          dispatch(actionSpinner.loading(false))
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = ev => {
          dispatch(actionWS.socketOnclose());
          dispatch(actionSpinner.loading(false))

        };
        // onclose долго закрывает .. помогаем
        if (type === 'WS_CONNECTION_CLOSED') {
          if (socket.readyState === WebSocket.OPEN) {
            socket.close();
          }
        }
      }

      next(action);
    };
  })
};