import React from 'react';
import Navbar from "../components/Navbar";
import SecurityQuestion from "../components/SecurityQuestion";
import RequestForgotPassword from "../components/RequestForgotPassword";
import GetQuestion from "../api/user/GetQuestion";
import axios from 'axios'
import ChangePassword from "../components/ChangePassword";

class ForgotPassword extends React.Component{

    constructor() {
        super();

        this.state = {
            questionOne: '',
            answerOne: '',
            email: '',
            gotQuestion: false,
            answerCorrect: false,
            passwordOne: '',
            passwordTwo: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.getQuestion = this.getQuestion.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.authorizeChange = this.authorizeChange.bind(this);
    }
    authorizeChange() {

    }

    async changePassword() {
        const userAnswer = {
            answerOne: this.state.answerOne,
            email: this.state.email
        }
        const response = await axios.post("http://localhost:5000/users/authorizeChange", userAnswer)
        this.setState({
            answerCorrect: response
        })
        console.log(this.state)
    }


    async getQuestion() {
        const email = {email: this.state.email};
        const question = await GetQuestion(email);
        if(question) {
            this.setState({
                questionOne: question.data,
                gotQuestion: true
            })
        }
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
                {this.state.gotQuestion ?
                    [
                        this.state.answerCorrect ?
                            <ChangePassword
                                passwordChange={this.authorizeChange}
                                {...this.state}
                            />
                            :
                    <SecurityQuestion
                        handleChange={this.handleChange}
                        changePassword={this.changePassword}
                        {...this.state}
                    />
                    ]
                    :
                    <RequestForgotPassword
                    handleChange={this.handleChange}
                    getQuestion={this.getQuestion}
                    />
                }


            </div>
        )
    }
}

export default ForgotPassword