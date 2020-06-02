import React from "react"
import FormComponent from "../components/FormComponent";
import {Button, Checkbox, Form} from "semantic-ui-react";

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            securityQuestion: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(userObj) {

    }

    render() {
        return (
            <FormComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.state}
            />
        )
    }
}

export default Signup