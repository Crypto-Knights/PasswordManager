import axios from "axios";

function createAccount(accountObj) {
    axios.post("http://localhost:5000/accounts/addAccount", accountObj)
        .then(res => console.log(res.data));
}

export default createAccount