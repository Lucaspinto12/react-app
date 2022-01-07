import axios from 'axios';
import http from "http";

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

export {
    instanceAxios
}