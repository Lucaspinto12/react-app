import jwtDecode from 'jwt-decode';
import {getTokenStorage} from "../../storage/AuthStorage";

const getJwtDecode = accessToken => {
    if (accessToken) {
        return jwtDecode(accessToken);
    }
    return null;
};

const getToken = () => {
    const token = getTokenStorage();
    if (!token) {
        return null;
    }
    return token;
};

export {getToken, getJwtDecode};
