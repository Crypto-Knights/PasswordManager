import axios from "axios"

/**
 * @return {boolean}
 */
async function GetAccountsByEmail(req) {
    try {
        return await axios.post("http://localhost:5000/accounts/getAccountsByEmail", req)
    }
    catch (e)
    {
        return false
    }




}

export default GetAccountsByEmail