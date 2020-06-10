import axios from "axios"
import {LOGIN_ERROR_MESSAGE} from "./constants";

/**
 * @return {string}
 */
async function LoginRequest(req) {
    try {
        return (await axios.post("http://localhost:5000/login", req));
    } catch (e) {
        return false
    }




}

export default LoginRequest