import { SET_SIGNIN, SET_SIGNIN_STATUS, SET_SIGNIN_STATUS_REF, CL_SIGNIN, SET_SIGNIN_NEW, CL_SIGNIN_NEW } from "../actionTypes/actionTypes";


export type TsetSignIn= {
  readonly type: typeof SET_SIGNIN;
  readonly field: string;
  readonly value: string;
}
export type TsetSignInNew= {
  readonly type: typeof SET_SIGNIN_NEW;
  readonly field: string;
  readonly value: string;
}
export type TsetStatusSignIn= {
  readonly type: typeof SET_SIGNIN_STATUS;
  readonly payload: string;
}
export type TsetStatusSignInRef= {
  readonly type: typeof SET_SIGNIN_STATUS_REF;
  readonly name: string;
  readonly email: string;
}
export type TclSignIn= {
  readonly type: typeof CL_SIGNIN;
}
export type TclSignInNew= {
  readonly type: typeof CL_SIGNIN_NEW;
}

export type TactionSignIn = TsetSignIn | TsetSignInNew | TsetStatusSignIn | TsetStatusSignInRef | TclSignIn | TclSignInNew

export const actionSignIn = {
  setSignIn: (field: string, value: string): TsetSignIn => ({
    type: SET_SIGNIN,
    field,
    value
  }),
  setSignInNew: (field: string, value: string): TsetSignInNew => ({
    type: SET_SIGNIN_NEW,
    field,
    value
  }),
  setStatusSignIn: (payload: string): TsetStatusSignIn => ({
    type: SET_SIGNIN_STATUS,
    payload
  }),
  setStatusSignInRef: (name: string, email: string): TsetStatusSignInRef => ({
    type: SET_SIGNIN_STATUS_REF,
    name,
    email
  }),

  clSignIn: (): TclSignIn => ({
    type: CL_SIGNIN,
  }),

  clSignInNew: (): TclSignInNew => ({
    type: CL_SIGNIN_NEW,
  }),


}
