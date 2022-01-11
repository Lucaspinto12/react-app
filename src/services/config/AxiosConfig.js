import axios from 'axios';
import http from "http";
import {getToken} from "../../auth/helpers/AuthHelper";

const httpAgent = new http.Agent({
    keepAlive: true,
    timeout: 5 * 60 * 1000,
});

const instanceAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    httpAgent,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    },
})
instanceAxios.interceptors.request.use(
    config => {
        let token = getToken();
        config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

instanceAxios.interceptors.response.use((response) => {
        return response;
    }, (error) => {

        const { response } = error;
        if (response && response.data) {
            console.error("Error instanceAxios: ", response.data);
            return Promise.reject(response.data);
        }

        console.error("Error instanceAxios: ", error);
        return Promise.reject(error);
    }
)

export {
    instanceAxios
}
