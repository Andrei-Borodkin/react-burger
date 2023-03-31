import { getCookie } from "./func-cooke"

const SERVER_URL = "https://norma.nomoreparties.space/api"


const chekResp = (res: Response) => {
    return res.ok ? res.json() : res.json().then((message) => Promise.reject(message))
}


export const getIngr = () => {
    return fetch(`${SERVER_URL}/ingredients`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + getCookie('accessToken')
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
      })
    .then(chekResp)
    .then(data => {
        if (data?.success) return data.data;
        return data
    })
}

export const getOrder = (idInger: string) => {
    return fetch(`${SERVER_URL}/orders`,  {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + getCookie('accessToken')
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({ 
            ingredients: idInger
        })
    })
    .then(chekResp)
    .then(data => {
        if (data?.success) return  JSON.stringify( data.order.number );
        return data 
    })
}