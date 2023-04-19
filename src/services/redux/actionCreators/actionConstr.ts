import { v4 as uuid } from "uuid";
import { SET_SHOW , ADD_CONSTR, CL_CONSTR, DEL_INGR, UPD_INGR } from "../actionTypes/actionTypes";
import { TValPunsAction } from "../../../utils/types"


export type TsetShow = {
  readonly type: typeof SET_SHOW;
  readonly payload: boolean;
}

export type TaddConstr = {
  readonly type: typeof ADD_CONSTR;
  readonly payload: TValPunsAction;
}

export type TclearConstr = {
  readonly type: typeof CL_CONSTR;
}

export type TdelIngr = {
  readonly type: typeof DEL_INGR;
  readonly payload: string;

}
export type TupdIngr = {
  readonly type: typeof UPD_INGR;
  readonly payload: TValPunsAction[];
}

export type TActionConstr = TsetShow | TaddConstr | TclearConstr | TdelIngr | TupdIngr

export const actionConstr = {
  setShow: (payload: boolean): TsetShow => ({
    type: SET_SHOW,
    payload
  }),
  addConstr: (payload: TValPunsAction): TaddConstr => ({
    type: ADD_CONSTR,
    payload: {
      ...payload,
      id: uuid(),
    }
  }),
  clearConstr: (): TclearConstr => ({
    type: CL_CONSTR,
  }),
  delIngr: (payload: string): TdelIngr => ({
    type: DEL_INGR,
    payload
  }),
  updIngr: (payload: TValPunsAction[] ): TupdIngr => ({
    type: UPD_INGR,
    payload
  }),
 }
