import React from "react"
import FormComponent from "../components/FormComponent";
import createUser from "../api/user/createUser";
import Navbar from "../components/Navbar";


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
        const userObj = this.state
        createUser(userObj)
    }

    render() {
        return (
            <div>
                <Navbar/>
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