import axios from "axios"

/**
 * @return {string}
 */
async function LogoutRequest(req) {
    try {
        return (await axios.delete("http://localhost:5000/login/logout", req));
    } catch (e) {
        return false
    }




}

export default LogoutRequest