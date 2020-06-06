import React from "react"
import Navbar from "../components/Navbar";
import LoginComponent from "../components/LoginComponent";
import LoginRequest from "../api/user/LoginRequest";
import Redirect from "react-router-dom/es/Redirect";

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            isLogged: false
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit() {
        const loginInfo = this.state;
        // const authenticated = LoginRequest(loginInfo)
        LoginRequest(loginInfo)
        this.setState({
            isLogged: LoginRequest(loginInfo)
        });
    }

    render(){
        if(this.state.isLogged) {
            return <Redirect to="../Profile"/>
        }
        return (
            <div>
                <Navbar/>
                <LoginComponent
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state}
                />
            </div>
        )
    }

}

export default Login