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
            answerOne: "",
            questionOne: ""
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

    handleSubmit = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <FormComponent
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state}
                />
            </div>
        )
    }
}

export default Signup