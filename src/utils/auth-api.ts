import { getCookie } from "./func-cooke"
import { TForm } from "./types"
import { request } from "./func-api"

export const setRegisterData = (email: string, password: string, name: string) => request("auth/register", {
    method: 'post',
    headers: {'Content-Type':'application/json'}, 
    body: JSON.stringify({
        email: email,
        password: password,
        name: name
    })
})

//POST https://norma.nomoreparties.space/api/auth/login 
export const loginRequest = (email: string, password: string) => request("auth/login", {
    method: 'post',
    headers: {'Content-Type':'application/json'}, 
    body: JSON.stringify({
        email: email,
        password: password
    })
})

//POST https://norma.nomoreparties.space/api/auth/token 
export const refToken = (refreshToken: string | undefined) => request("auth/token", {
    method: 'post',
    headers: {'Content-Type':'application/json'}, 
    body: JSON.stringify({ token: refreshToken })
})

//POST https://norma.nomoreparties.space/api/password-reset.
export const forgotPass = (email: string) => request("password-reset", {
    method: 'post',
    headers: {'Content-Type':'application/json'}, 
    body: JSON.stringify({ email: email })
})

//https://norma.nomoreparties.space/api/password-reset/reset.
export const resetPass = (password: string, kod: string) => request("password-reset/reset", {
    method: 'post',
    headers: {'Content-Type':'application/json'}, 
    body: JSON.stringify({ password: password, token: kod })
})

//POST https://norma.nomoreparties.space/api/auth/logout
export const logout = () => request("auth/logout", {
    method: 'post',
    headers: {'Content-Type':'application/json'}, 
    body: JSON.stringify({ token: getCookie('refreshToken') })
})

//GET https://norma.nomoreparties.space/api/auth/user - эндпоинт получения данных о пользователе.
export const getUser = () => request("auth/user", {
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

//PATCH https://norma.nomoreparties.space/api/auth/user - эндпоинт обновления данных о пользователе.
export const setUserData = (form: TForm) => request("auth/user", {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getCookie('accessToken')
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(form)
})