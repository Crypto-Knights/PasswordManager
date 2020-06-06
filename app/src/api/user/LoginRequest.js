import axios from "axios"
import Login from "../../pages/Login";

/**
 * @return {boolean}
 */
async function LoginRequest(req) {
    let authenticated = false;
    authenticated = await axios.get("http://localhost:5000/users")
        .then(res => {
                for (let i = 0; i <= res.data.length - 1; i++) {
                    if (res.data[i].email === req.email) {
                        authenticated = true;
                    }
                }
                // if (authenticated) {
                //     console.log("successful log in")
                //     req.setState({
                //         isLogged: true
                //     });
                // } else {
                //     console.log("no user found")
                //     return false;
                // }
            }
        );
    return true;
}

export default LoginRequest