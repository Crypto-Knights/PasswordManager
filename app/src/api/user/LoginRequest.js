import axios from "axios"

/**
 * @return {string}
 */
async function LoginRequest(req) {
    try {
        const response = await axios.post("http://localhost:5000/login", req)
        console.log(response.data.accessToken)
        localStorage.setItem('userToken', response.data.accessToken)
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