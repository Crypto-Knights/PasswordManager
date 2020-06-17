import axios from "axios"

/**
 * @return {string}
 */
async function LoginRequest(req) {
    try {
        const response = await axios.post("http://localhost:5000/login", req);
        localStorage.setItem('userToken', response.data.accessToken);
        localStorage.setItem('loggedIn', "true");
        if (response) {
            return true
        }
    }
        catch (e)
        {
            return false
    }




}

export default LoginRequest