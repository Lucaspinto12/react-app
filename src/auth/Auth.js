import {getTokenStorage} from "../storage/AuthStorage";


export const isAuthenticated = () => {
    return  getTokenStorage() || false
}
