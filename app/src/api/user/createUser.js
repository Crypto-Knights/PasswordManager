import axios from "axios";

async function creatUser(userObj) {
    return await axios.post("http://localhost:5000/users/add", userObj)


}

export default creatUser