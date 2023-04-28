import { reducerAutReg, initialState, TinitialState } from './reducerAutReg'
import { actionAutReg } from '../actionCreators/actionAutReg';

describe('reducerAutReg reducer', () => {

  test("should return the initial state", () => { expect(reducerAutReg(undefined, {} as any)).toEqual(initialState) })

  test("should REGISTER_FORM_SET_VALUE form", () => {
    const expectVal: TinitialState = {
      ...initialState,
      email: "email"
    }
    expect(reducerAutReg(initialState, actionAutReg.setRegister('email', 'email'))).toEqual(expectVal)
  })

  test("should status SET_STATUS_REGISTER ", () => {
    const expectVal: TinitialState = {
      ...initialState,
      statusReg: true
    }
    expect(reducerAutReg(initialState, actionAutReg.setStatus(true))).toEqual(expectVal)
  })


})