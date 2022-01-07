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

const getIdCourses = async (uuid) => {
    try {
        const {data} = await instanceAxios.get('/purchase/'+uuid);
        return data;

    } catch (e) {
        console.error(e);
    }
    return null;

}
export {getAllCourses,getIdCourses};

