import axios from "axios"

/**
 * @return {string}
 */
async function IsLoggedIn(req) {
    try {
        console.log(req.body.token)
        return (await axios.get("http://localhost:5000/login/token", req));
    } catch (e) {
        return false
    }




}

export default IsLoggedIn