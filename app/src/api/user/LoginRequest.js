import axios from "axios"
import Login from "../../pages/Login";


async function LoginRequest(req) {
    let authenticated = false;
    try {
        await axios.post("http://localhost:5000/users/login", req)

    } catch (e) {
        console.log(e)
    }
}

export default LoginRequest