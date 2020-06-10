import axios from "axios"

/**
 * @return {string}
 */
async function GetQuestion(req) {
    try {
        return (await axios.post("http://localhost:5000/users/getQuestion", req));
    } catch (e) {
        return ""
    }




}

export default GetQuestion