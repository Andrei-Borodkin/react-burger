import { reducerIngr, initialState, TinitialState } from './reducerIngr'
import { actionIngr } from '../actionCreators/actionIngr';
import { TIngr } from '../../../utils/types';

describe('reducerIngr reducer', () => {

  test("should return the initialstate", () => { expect(reducerIngr(undefined, {} as any)).toEqual(initialState) })

  test("should show modal и clear id ingr SET_SHOW_INGR", () => {
    const expectVal: TinitialState = {
      ...initialState,
      isShowInger: true,
      idtouch: ""
    }
    expect(reducerIngr(initialState, actionIngr.setShowIngr(true))).toEqual(expectVal)
  })

  test("should id click SET_ISSHOWINGER_ID", () => {
    const expectVal: TinitialState = {
      ...initialState,
      isShowInger: true,
      idtouch: "id"
    }
    expect(reducerIngr(initialState, actionIngr.setShowIngrID(true, "id"))).toEqual(expectVal)
  })

  test("should id in idtouch SET_ID_MOD", () => {
    const expectVal: TinitialState = {
      ...initialState,
      idtouch: "id"
    }
    expect(reducerIngr(initialState, actionIngr.setIdMod("id"))).toEqual(expectVal)
  })

  test("should navigation Tab SET_NAVIGATION", () => {
    const expectVal: TinitialState = {
      ...initialState,
      curNav: "bun"
    }
    expect(reducerIngr(initialState, actionIngr.setNavigation("bun"))).toEqual(expectVal)
  })

  test("should initialstate GET_INGR_FAILED", () => {
    const expectVal: TinitialState = {
      ...initialState,
    }
    expect(reducerIngr(initialState, actionIngr.setInitialState())).toEqual(expectVal)
  })

  test("should data SET_DATA", () => {

    const ingr: TIngr[] = [{
        _id: "_id",
        name: "name",
        type: 'bun',
        proteins: 1,
        fat: 1,
        carbohydrates: 1,
        calories: 1,
        price: 1,
        image: "image",
        image_mobile: "image_mobile",
        image_large: "image_large"
    }]


    const expectVal: TinitialState = {
      ...initialState,
      data: ingr
    }
    expect(reducerIngr(initialState, actionIngr.setData(ingr))).toEqual(expectVal)
  })


})