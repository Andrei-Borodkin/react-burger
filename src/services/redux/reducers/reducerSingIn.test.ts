import { reducerSignIn, initialState, TinitialState } from './reducerSingIn'
import { actionSignIn } from '../actionCreators/actionSignIn';

describe('reducerIngr reducer', () => {

  test("should return the initialstate", () => { expect(reducerSignIn(undefined, {} as any)).toEqual(initialState) })

  test("should form SET_SIGNIN", () => {
    const expectVal: TinitialState = {
      ...initialState,
      email: 'email'
    }
    expect(reducerSignIn(initialState, actionSignIn.setSignIn('email', 'email'))).toEqual(expectVal)
  })

  test("should form SET_SIGNIN_NEW", () => {
    const expectVal: TinitialState = {
      ...initialState,
      emailNew: 'emailNew'
    }
    expect(reducerSignIn(initialState, actionSignIn.setSignIn('emailNew', 'emailNew'))).toEqual(expectVal)
  })

  test("should set status SET_SIGNIN_STATUS", () => {
    const expectVal: TinitialState = {
      ...initialState,
      password: "",
      statusSign: true,
      name: "name"
    }
    expect(reducerSignIn(initialState, actionSignIn.setStatusSignIn("name"))).toEqual(expectVal)
  })

  test("should set statusSign + name + email SET_SIGNIN_STATUS_REF", () => {
    const expectVal: TinitialState = {
      ...initialState,
      statusSign: true,
      name: "name",
      email: "email",
    }
    expect(reducerSignIn(initialState, actionSignIn.setStatusSignInRef("name", "email"))).toEqual(expectVal)
  })

  test("should initialState CL_SIGNIN", () => {
    const expectVal: TinitialState = {
      ...initialState
    }
    expect(reducerSignIn(initialState, actionSignIn.clSignIn())).toEqual(expectVal)
  })

  test("should clear _New CL_SIGNIN_NEW", () => {
    const expectVal: TinitialState = {
      ...initialState,
      emailNew: "",
      passwordNew: "",
      nameNew: "",
    }
    expect(reducerSignIn(initialState, actionSignIn.clSignInNew())).toEqual(expectVal)
  })

})