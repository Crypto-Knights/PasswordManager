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

    handleSubmit(){
        const loginInfo = this.state;
        this.setState({
            isLogged: LoginRequest(loginInfo)
        });
        if(this.state.isLogged) {
            return <Redirect exact to="../Profile"/>
        }
    }

    render(){
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