import React from "react"
import Navbar from "../components/Navbar";
import LoginComponent from "../components/LoginComponent";
import LoginRequest from "../api/user/LoginRequest";
import {Redirect} from "react-router-dom";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isLogged: false,
            errorMsg: "",
            negDOS: 0,
            display: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
            errorMsg: ""
        })
    }

    async handleSubmit() {
        const loginInfo = this.state;
        const response = await LoginRequest(loginInfo);
        this.setState({
            isLogged: response
        });
        if(!this.state.isLogged) {
            this.setState((prevState) => {return {
                errorMsg: "Email or password was incorrect",
                negDOS: prevState.negDOS +1
            }
            })
        }
        if(this.state.negDOS >= 3) {
            this.setState({
                display: false,
                errorMsg: "Too many failed attempts, did you forget your password?"
            })
        }
    }

    render(){
        if(this.state.isLogged) {
            return <Redirect to="../Profile" />
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