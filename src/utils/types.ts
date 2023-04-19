export type TIngr = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string
}

export type TIngrBC = {
    id: string;
    name: string;
    price: number;
    image: string;
}

export type TmConstElement = (dragIndex: number, hoverIndex: number) => void;


export type TValPuns = {
    valPuns: string;
}

export type TvalPunsProps= {
    _id: string;
    name: string;
    price: number;
    image: string;
  }

export type TPrice = {
    price: number;
}

export type T_Id = {
    _id: string;
}


export type TValType = {
    type: string;
}


export type TForm = {
    email: string;
    name: string;
    password: string;
}