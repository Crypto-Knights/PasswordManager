import axios from "axios"

async function LoginRequest(req) {
    try {
        return (await axios.post("http://localhost:5000/users/login", req))

    } catch (e) {
        console.log(e + " LoginRequest function")
    }
}

export default LoginRequest