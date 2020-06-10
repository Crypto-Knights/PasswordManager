import axios from "axios"

/**
 * @return {string}
 */
async function IsLoggedIn(req) {
    try {
        return (await axios.post("http://localhost:5000/login/token", req));
    } catch (e) {
        return e
    }




}

export default IsLoggedIn