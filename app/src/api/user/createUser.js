import React from "react"
import axios from "axios";


function creatUser(userObj) {
    axios.post("http://localhost:5000/users/add", userObj)
        .then(res => console.log(res.data));
}

export default creatUser