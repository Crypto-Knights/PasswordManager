import React from "react"
import Navbar from "../components/Navbar";
import LoginComponent from "../components/LoginComponent";

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
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
        console.log(this.state)
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