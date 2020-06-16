import axios from "axios"

/**
 * @return {boolean}
 */
async function Reauthorize(req) {
    try {
        return await axios.post("http://localhost:5000/accounts/reauthorize", req)
    }
    catch (e)
    {
        return false
    }




}

export default Reauthorize