async function createUser(userObj) {
    let jsonResp;
    const resp = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({user: userObj}),
        headers: {
            "Content-Type" : "application/json; charset=utf-8"
        }
    }).then((response) => {
        return response.json();
    }).then((data) =>{
        if(data.result.ok === 1 && data.result.n === 1) {
            console.log("success")
        }
    })
}

export default createUser