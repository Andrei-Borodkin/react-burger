import { actionWS } from '../actionCreators/actionWS'
import { reducerWS, initialState, TinitialState } from './reducerWS'

describe('reducerConstr reducer', () => {

    test("should return the initial state", () => { expect(reducerWS(undefined, {} as any)).toEqual(initialState) })

    test("should set wsConnected true WS_CONNECTION_SUCCESS", () => {
        const expectVal: TinitialState = {
            ...initialState,
            error: undefined,
            wsConnected: true
        }
        expect(reducerWS(initialState, actionWS.socketOnopen(event as Event))).toEqual(expectVal)
    })

    test("should set wsConnected false, set error WS_CONNECTION_ERROR", () => {
        const expectVal: TinitialState = {
            ...initialState,
            error: event,
            wsConnected: false
        }
        //const error = "error from Event"
        expect(reducerWS(initialState, actionWS.socketOnerror(event as Event))).toEqual(expectVal)
    })

    test("should set data WS_GET_DATA", () => {

        const ordersObj = [{
            orders: {
                createdAt: "2023-04-26T15:24:22.725Z",
                ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0940', '643d69a5c3f7b9001cfa093e', '643d69a5c3f7b9001cfa0941', '643d69a5c3f7b9001cfa093d'],
                name: "Био-марсианский люминесцентный флюоресцентный метеоритный бургер",
                number: 1600,
                status: "done",
                updatedAt: "2023-04-26T15:24:22.759Z",
                _id: "6449422645c6f2001be6dcec"
            },
            success: true,
            total: 1226,
            totalToday: 134
        }]

        const expectVal = {
            ...initialState,
            error: undefined,
            data: [{
                orders: {
                    createdAt: "2023-04-26T15:24:22.725Z",
                    ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa0940', '643d69a5c3f7b9001cfa093e', '643d69a5c3f7b9001cfa0941', '643d69a5c3f7b9001cfa093d'],
                    name: "Био-марсианский люминесцентный флюоресцентный метеоритный бургер",
                    number: 1600,
                    status: "done",
                    updatedAt: "2023-04-26T15:24:22.759Z",
                    _id: "6449422645c6f2001be6dcec"
                },
                total: 1226,
                totalToday: 134
            }]
        }

        expect(reducerWS(initialState, actionWS.socketOnmessage(ordersObj as any))).toMatchObject(expectVal)
    })


    test("should close socket WS_CONNECTION_CLOSED", () => {
        const expectVal: TinitialState = {
            ...initialState,
            error: undefined,
        }
        const error = "error from Event"
        expect(reducerWS(initialState, actionWS.socketOnclose())).toEqual(expectVal)
    })

})