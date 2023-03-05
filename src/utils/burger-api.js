const SERVER_URL = "https://norma.nomoreparties.space/api"

const chekResp = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}


export const getIngr = () => {
    return fetch(`${SERVER_URL}/ingredients`)
    .then(chekResp )
    .then(data => {
        if (data?.success) return data.data;
        return Promise.reject(data)
    })
}

export const getOrder = (idInger) => {
    return fetch(`${SERVER_URL}/orders`,  {
        method: 'post',
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify({ 
            ingredients: idInger
        })
    })
    .then(chekResp)
    .then(data => {
        if (data?.success) return  JSON.stringify( data.order.number );
        return Promise.reject(data) })
}