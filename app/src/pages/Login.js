import React from "react"
import Navbar from "../components/Navbar";
import LoginComponent from "../components/LoginComponent";
import LoginRequest from "../api/user/LoginRequest";
import {Redirect} from "react-router-dom";

//todo: Check if user just signed up, if so, display successful signup

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            isLogged: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    async handleSubmit() {
        const loginInfo = this.state;

        this.setState({
            isLogged: await LoginRequest(loginInfo)
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