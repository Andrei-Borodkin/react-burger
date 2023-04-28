import { actionSpinner } from '../actionCreators/actionSpinner'
import { reducerSpinner, initialState, TinitialState } from './reducerSpinner'


describe('reducerConstr reducer', () => {

  test("should return the initial state", () => { expect(reducerSpinner(undefined, {} as any)).toEqual(initialState) })

  test("should status isLoading", () => {
    const expectVal: TinitialState = {
      ...initialState,
      isLoading: true
    }
    expect(reducerSpinner(initialState, actionSpinner.loading(true))).toEqual(expectVal)
  })
  
})

