import axios from "axios"
import {LOGIN_ERROR_MESSAGE} from "./constants";

/**
 * @return {string}
 */
async function LogoutRequest(req) {
    try {
        console.log("here")
        return (await axios.delete("http://localhost:5000/login/logout", req));
    } catch (e) {
        return false
    }




}

export default LogoutRequest