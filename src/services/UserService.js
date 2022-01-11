import {instanceAxios} from "./config/AxiosConfig";
import {setTokenStorage} from "../storage/AuthStorage";

const onSignUp = async data => {
    console.log(data)
    const response = await instanceAxios.post('/user', data);
    return response.data;
};

const onSignIn = async data => {
    const response = await instanceAxios.post('/auth/token', data);
    if (response.status === 200) {
        setTokenStorage(response.data.accessToken);
        return response.data;
    }
    throw new Error("Access denied");
};

export {onSignUp, onSignIn};
