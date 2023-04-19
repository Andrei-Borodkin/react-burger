import { TData } from '../../../utils/types';
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_DATA,
  WS_CONNECTION_START,
} from '../actionTypes/actionTypes';


export type TsocketConnect = {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: string;
}

export type TsocketOnopen = {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  readonly payload: Event;
}
export type TsocketOnerror = {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: Event;
}
export type TsocketOnmessage = {
  readonly type: typeof WS_GET_DATA;
  readonly payload: TData;
}
export type TsocketOnclose = {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export type TactionWS = TsocketConnect | TsocketOnopen | TsocketOnerror | TsocketOnmessage | TsocketOnclose

export const actionWS = {
  socketConnect: (payload: string): TsocketConnect => ({
    type: WS_CONNECTION_START,
    payload
  }),
  socketOnopen: (payload: Event): TsocketOnopen => ({
    type: WS_CONNECTION_SUCCESS,
    payload
  }),
  socketOnerror: (payload: Event): TsocketOnerror => ({
    type: WS_CONNECTION_ERROR,
    payload
  }),
  socketOnmessage: (payload: TData): TsocketOnmessage => ({
    type: WS_GET_DATA,
    payload
  }),
  socketOnclose: (): TsocketOnclose => ({
    type: WS_CONNECTION_CLOSED,
  }),

}