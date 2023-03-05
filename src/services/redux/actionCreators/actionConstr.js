import { v4 as uuid } from "uuid";
import { SET_SHOW , ADD_CONSTR, CL_CONSTR, DEL_INGR, UPD_INGR } from "../actionTypes/actionTypes";

export const actionConstr = {
  setShow: (payload) => ({
    type: SET_SHOW,
    payload
  }),
  addConstr: (payload) => ({
    type: ADD_CONSTR,
    payload:{
      ...payload,
      id: uuid(),
    }
  }),
  clearConstr: () => ({
    type: CL_CONSTR,
  }),
  delIngr: (payload) => ({
    type: DEL_INGR,
    payload
  }),
  updIngr: (payload) => ({
    type: UPD_INGR,
    payload
  }),
 }
