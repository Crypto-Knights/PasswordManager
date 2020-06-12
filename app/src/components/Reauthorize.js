import axios from "axios"

async function Reauthorize(req) {
    try {
        const response = await axios.post("http://localhost:5000/accounts/reauthorize", req)
        return response
    }
    catch (e)
    {
        return false
    }




}

export default Reauthorize