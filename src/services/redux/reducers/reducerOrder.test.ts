import { reducerOrder, initialState, TinitialState } from './reducerOrder'
import { actionOrder } from '../actionCreators/actionOrder';

describe('reducerIngr reducer', () => {

    test("should return the initialstate", () => { expect(reducerOrder(undefined, {} as any)).toEqual(initialState) })

    test("should number order SET_ORDER", () => {
        const expectVal: TinitialState = {
            ...initialState,
            order: "16897",
        }
        expect(reducerOrder(initialState, actionOrder.setOrder("16897"))).toEqual(expectVal)
    })

    test("should TinitialState GET_ORDER_FAILED", () => {
        const expectVal: TinitialState = {
            ...initialState
        }
        expect(reducerOrder(initialState, actionOrder.setInitialState())).toEqual(expectVal)
    })

})