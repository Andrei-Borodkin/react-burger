import { actionConstr } from '../actionCreators/actionConstr'
import { reducerConstr, initialState, TinitialState } from './reducerConstr'


describe('reducerConstr reducer', () => {

  test("should return the initial state", () => { expect(reducerConstr(undefined, {} as any)).toEqual(initialState) })

  test("should status setShow", () => {
    const expectVal: TinitialState = {
      ...initialState,
      isShow: true
    }
    expect(reducerConstr(initialState, actionConstr.setShow(true))).toEqual(expectVal)
  })


  test("should initialState", () => {
    const expectVal: TinitialState = {
      ...initialState
    }
    expect(reducerConstr(initialState, actionConstr.clearConstr())).toEqual(expectVal)
  })

  test("should ADD_CONSTR + uuid()", () => {

    const val = {
      _id: "643d69a5c3f7b9001cfa093e1",
      name: "Филе Люминесцентного тетраодонтимформа",
      type: "main",
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: "https://code.s3.yandex.net/react/code/meat-03.png",
      image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
      __v: "0"
    }

    const expectVal = {
      ...initialState,
      ingr: [
        ...initialState.ingr,
        {
          _id: "643d69a5c3f7b9001cfa093e1",
          name: "Филе Люминесцентного тетраодонтимформа",
          type: "main",
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: "https://code.s3.yandex.net/react/code/meat-03.png",
          image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
          __v: "0",
          id: expect.any(String)
        }
      ]
    }
    expect(reducerConstr(initialState, actionConstr.addConstr(val as any))).toEqual(expectVal)
  })



  test("should del item ingr by id", () => {
    const state = {
      isShow: false,
      bun: null,
      ingr: [
        {
          _id: "643d69a5c3f7b9001cfa093e1",
          name: "Филе Люминесцентного тетраодонтимформа",
          type: "main",
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: "https://code.s3.yandex.net/react/code/meat-03.png",
          image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
          __v: "0",
          id: "991e2a31-75e6-4cef-9ee2-aff6510ad3fc1"
        },
        {
          _id: "643d69a5c3f7b9001cfa093e1",
          name: "Филе Люминесцентного тетраодонтимформа",
          type: "main",
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: "https://code.s3.yandex.net/react/code/meat-03.png",
          image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
          __v: "0",
          id: "991e2a31-75e6-4cef-9ee2-aff6510ad3fc2"
        }
      ]
    }


    const expectVal = {
      ...state,
      ingr: [
        {
          _id: "643d69a5c3f7b9001cfa093e1",
          name: "Филе Люминесцентного тетраодонтимформа",
          type: "main",
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: "https://code.s3.yandex.net/react/code/meat-03.png",
          image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
          __v: "0",
          id: "991e2a31-75e6-4cef-9ee2-aff6510ad3fc1"
        }
      ]
    }
    expect(reducerConstr(state, actionConstr.delIngr("991e2a31-75e6-4cef-9ee2-aff6510ad3fc2"))).toEqual(expectVal)
  })

  // точно ли нужно работать с пустыми обьектами ????
  test("should new {} update old {} ", () => {
    const state = {
      isShow: false,
      bun: null,
      ingr: [
        {
          _id: "643d69a5c3f7b9001cfa093e1",
          name: "Филе Люминесцентного тетраодонтимформа",
          type: "main",
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: "https://code.s3.yandex.net/react/code/meat-03.png",
          image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
          __v: "0",
          id: "991e2a31-75e6-4cef-9ee2-aff6510ad3fc1"
        },
        {
          _id: "643d69a5c3f7b9001cfa093e1",
          name: "Филе Люминесцентного тетраодонтимформа",
          type: "main",
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: "https://code.s3.yandex.net/react/code/meat-03.png",
          image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
          __v: "0",
          id: "991e2a31-75e6-4cef-9ee2-aff6510ad3fc2"
        }
      ]
    }
    const expectVal: TinitialState = {
      ...state,
      ingr: [
        {
          _id: "643d69a5c3f7b9001cfa093e1",
          name: "Филе Люминесцентного тетраодонтимформа",
          type: "main",
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: "https://code.s3.yandex.net/react/code/meat-03.png",
          image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
          __v: "0",
          id: "991e2a31-75e6-4cef-9ee2-aff6510ad3fc1"
        },
        {
          _id: "643d69a5c3f7b9001cfa093e1",
          name: "Филе Люминесцентного тетраодонтимформа",
          type: "main",
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: "https://code.s3.yandex.net/react/code/meat-03.png",
          image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
          __v: "0",
          id: "991e2a31-75e6-4cef-9ee2-aff6510ad3fc2"
        }
      ]
    }
    expect(reducerConstr(state, actionConstr.updIngr(state.ingr))).toEqual(expectVal)
  })

})

