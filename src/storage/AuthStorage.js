const KEY_TOKEN =  "TOKEN";

const setTokenStorage = (token) => {
    sessionStorage.setItem(KEY_TOKEN, token)
}

const getTokenStorage = () => {
    return sessionStorage.getItem(KEY_TOKEN)
}

export {setTokenStorage, getTokenStorage}
