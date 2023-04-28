export type TData = {
    orders: [];
    total: number;
    totalToday: number;
}

export type Torders = {
    _id: string;
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    ingredients: []
}

export type TmasIngr = {
    id: string;
    image: string;
    name: string;
    price: number;
}

export type Tcounts = {
    [id: string]: number;
}

export type TValueType = 'main' | 'bun' | 'sauce';

export type TIngr = {
    _id: string;
    name: string;
    type: TValueType;
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
    valPuns: TValPunsAction
}
export type TValPunsAction = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile?: string;
    image_large?: string;
    __v?: string;
    id: string;
}

/*
export type TValPuns = {
    valPuns: string;
}*/

export type TvalPunsProps = {
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
    email?: string;
    name?: string;
    password?: string;
}