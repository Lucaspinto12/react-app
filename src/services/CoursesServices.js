import {instanceAxios} from "./config/AxiosConfig";

const getAllCourses = async () => {
    try {
        const {data} = await instanceAxios.get('/car');
        return data;

    } catch (e) {
        console.error(e);
    }
    return []

}

const createCar = async (requestBody) => {
    try {
        console.log(requestBody);
        const {data} = await instanceAxios.post('/car', requestBody);
        console.log(data);
        return data;

    } catch (e) {
        console.error(e.message);
    }
    return null
}

const getIdCourses = async (uuid) => {
    try {
        const {data} = await instanceAxios.get(`/purchase/${uuid}`);
        console.log(data);
        return data;

    } catch (e) {
        console.error(e);
    }
    return null

}
export {getAllCourses,getIdCourses,createCar};