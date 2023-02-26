const SERVER_URL = "https://norma.nomoreparties.space/api"

const chekResp = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

export const getIngr = () => {
    return fetch(`${SERVER_URL}/ingredients`)
    .then(chekResp)
    .then(data => {
        if (data?.success) return data.data;
        return Promise.reject(data)
    })
}