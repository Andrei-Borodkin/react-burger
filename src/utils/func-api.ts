export const SERVER_URL = "https://norma.nomoreparties.space/api/"

type TcheckSuccess = {
    success: boolean;
    message: string;
    accessToken: string;
    refreshToken: string;
    user: {
        name: string;
        email: string;
    }
    data: [];
    order: {
        number: string;
    }
}

// status === 403 тк нужно отловить jwt expired
const checkResponse = (res: Response) => {
    if (res.ok || res.status === 403 || res.status === 401) {
        return res.json();
    }
    return Promise.reject({ message: res.status });
};

// создаем функцию проверки на `success`
const checkSuccess = (res: TcheckSuccess) => {

    if (res && res.success) {
        return res;
    }
    return Promise.reject({ message: res.message });
};

// универсальная функция ответа и `success`
export const request = (endpoint: string, options: RequestInit) => {
    return fetch(`${SERVER_URL}${endpoint}`, options)
        .then(checkResponse)
        .then(checkSuccess);
};
