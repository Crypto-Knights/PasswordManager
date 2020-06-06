import axios from "axios"
import Login from "../../pages/Login";


async function LoginRequest(req) {
    let authenticated = false;
    console.log(req)
    try {
        await axios.post("http://localhost:5000/users/login", req)
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
    } catch (e) {
        console.log(e)
    }
}

export default LoginRequest