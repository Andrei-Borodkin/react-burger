import { getCookie } from "./func-cooke"

const SERVER_URL = "https://norma.nomoreparties.space/api"

const chekResp = (res) => {
    return res.ok ? res.json() : res.json().then((message) => Promise.reject(message))
}

//https://norma.nomoreparties.space/api/auth/register
export const setRegisterData = (form) => {
    return fetch(`${SERVER_URL}/auth/register`,  {
        method: 'post',
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify(form)
        
    })
    .then(chekResp)
    .then(data => {
        if (data?.success) return JSON.stringify(data);
        return data 
    })
}

//POST https://norma.nomoreparties.space/api/auth/login 
export const loginRequest = (email, password) => {
    return fetch(`${SERVER_URL}/auth/login`,  {
        method: 'post',
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(chekResp)
}

//POST https://norma.nomoreparties.space/api/auth/token 
export const refToken = (refreshToken) => {
    return fetch(`${SERVER_URL}/auth/token`,  {
        method: 'post',
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify({ token: refreshToken })
    })
    .then(chekResp)
}

//POST https://norma.nomoreparties.space/api/password-reset.
export const forgotPass = (email) => {
    return fetch(`${SERVER_URL}/password-reset`,  {
        method: 'post',
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify({ email: email })
    })
    .then(chekResp)
}

//https://norma.nomoreparties.space/api/password-reset/reset.
// для начала посмотреть что выдает forgotPass
export const resetPass = (password, kod) => {
    return fetch(`${SERVER_URL}/password-reset/reset`,  {
        method: 'post',
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify({ password: password, token: kod })
    })
    .then(chekResp)
}

//POST https://norma.nomoreparties.space/api/auth/logout
export const logout  = () => {
    return fetch(`${SERVER_URL}/auth/logout`,  {
        method: 'post',
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify({ token: getCookie('refreshToken') })
    })
    .then(chekResp)
}