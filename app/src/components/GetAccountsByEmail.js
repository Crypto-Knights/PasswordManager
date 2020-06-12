import axios from "axios"

async function GetAccountsByEmail(req) {
    try {
        const response = await axios.post("http://localhost:5000/accounts/getAccountsByEmail", req)
        return response
    }
    catch (e)
    {
        return false
    }




}

export default GetAccountsByEmail