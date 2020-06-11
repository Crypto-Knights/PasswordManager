import axios from "axios";

function createAccount(accountObj) {
    axios.post("http://localhost:5000/users/add", accountObj)
        .then(res => console.log(res.data));
}

export default createAccount()