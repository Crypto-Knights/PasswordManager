import React from 'react';
import {Grid, Header, Image, Form, Button, Label} from 'semantic-ui-react'
import Navbar from "../components/Navbar";
import axios from "axios"
import SecurityQuestion from "../components/SecurityQuestion";
import RequestForgotPassword from "../components/RequestForgotPassword";
import GetQuestion from "../api/user/GetQuestion";

class ForgotPassword extends React.Component{

    constructor() {
        super();

        this.state = {
            questionOne: '',
            answerOne: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.getQuestion = this.getQuestion.bind(this)
    }

    componentDidMount() {
    }

    async getQuestion() {
        const email = {email: this.state.email};
        const question = await GetQuestion(email);
        console.log(question.data)
        this.setState({
            questionOne: question.data
        })
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Header>{this.state.questionOne}</Header>
                <SecurityQuestion
                    handleChange={this.handleChange}
                />
                <RequestForgotPassword
                    handleChange={this.handleChange}
                    getQuestion={this.getQuestion}
                />
            </div>
        )
    }
}

export default ForgotPassword