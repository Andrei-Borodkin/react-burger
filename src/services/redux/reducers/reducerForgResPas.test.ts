import { actionConstr } from '../actionCreators/actionConstr'
import { actionForgResPas } from '../actionCreators/actionForgResPas'
import { reducerForgResPas, initialState, TinitialState } from './reducerForgResPas'


describe('reducerConstr reducer', () => {

  test("should return the initial state", () => { expect(reducerForgResPas(undefined, {} as any)).toEqual(initialState) })

  test("should email SET_FORGOT_MAIL", () => {
    const expectVal: TinitialState = {
      ...initialState,
      email: 'email'
    }
    expect(reducerForgResPas(initialState, actionForgResPas.setMail('email'))).toEqual(expectVal)
  })

  test("should status SET_FORGOT_STATUS ", () => {
    const expectVal: TinitialState = {
      ...initialState,
      status: true
    }
    expect(reducerForgResPas(initialState, actionForgResPas.setStatus(true))).toEqual(expectVal)
  })

  test("should SET_FORGOT_PASSWORD form", () => {
    const expectVal: TinitialState = {
      ...initialState,
      password: "password"
    }
    expect(reducerForgResPas(initialState, actionForgResPas.setPassword('password', 'password'))).toEqual(expectVal)
  })

  test("should status SET_RESET_STATUS", () => {
    const expectVal: TinitialState = {
      ...initialState,
      statusRes: true
    }
    expect(reducerForgResPas(initialState, actionForgResPas.setStatusRes(true))).toEqual(expectVal)
  })

  test("should initialState", () => {
    const expectVal: TinitialState = {
      ...initialState
    }
    expect(reducerForgResPas(initialState, actionForgResPas.setInitialState())).toEqual(expectVal)
  })

})
