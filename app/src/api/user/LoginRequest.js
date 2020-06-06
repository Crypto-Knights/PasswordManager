import axios from "axios"

/**
 * @return {boolean}
 */
function LoginRequest(req) {
    console.log(req)
    let authenticated = false;
    axios.get("http://localhost:5000/users")
        .then(res => {
            for (let i = 0; i <= res.data.length - 1; i++) {
                if (res.data[i].email === req.email) {
                    authenticated = true;
                }
            }
                if(authenticated) {
                    console.log("succesful log in")
                    return true;
                } else {
                    console.log("no user found")
                    return false;
                }
        }
        );
    return true;
}

export default LoginRequest