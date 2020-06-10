import axios from "axios";

function createProfile(profileObj) {
    axios.post("http://localhost:5000/profile/add", profileObj)
        .then(res => console.log(res.data));
}

export default createProfile