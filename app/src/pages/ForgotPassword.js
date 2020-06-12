import React from 'react';
import Navbar from "../components/Navbar";
import SecurityQuestion from "../components/SecurityQuestion";
import RequestForgotPassword from "../components/RequestForgotPassword";
import GetQuestion from "../api/user/GetQuestion";
import axios from 'axios'
import ChangePassword from "../components/ChangePassword";
import Message from "semantic-ui-react/dist/commonjs/collections/Message";
import {Grid} from "semantic-ui-react";
import {Redirect} from "react-router-dom";

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
            passwordTwo: '',
            errMsg: '',
            redirectToLogin: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.getQuestion = this.getQuestion.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.authorizeChange = this.authorizeChange.bind(this);
    }
    async authorizeChange() {
        if(this.state.passwordOne !== this.state.passwordTwo) {
            this.setState({
                errMsg: "The password do not match"
            })
        } else {
            const newUserPassword = {
                email: this.state.email,
                password: this.state.passwordOne
            };
            const response = await axios.put("http://localhost:5000/users/newPassword", newUserPassword);
            if (!response) {
                console.log("error in server")
            } else {
                this.setState({
                    redirectToLogin: response
                })
            }
        }
    }

    async changePassword() {
        const userAnswer = {
            answerOne: this.state.answerOne,
            email: this.state.email
        };
        const response = await axios.post("http://localhost:5000/users/authorizeChange", userAnswer);
        this.setState({
            answerCorrect: response.data
        });
        if(!this.state.answerCorrect) {
            this.setState({
                errMsg: "The answer was incorrect"
            })
        }
    }


    async getQuestion() {
        const email = {email: this.state.email};
        const question = await GetQuestion(email);
        if(question) {
            this.setState({
                questionOne: question.data,
                gotQuestion: true
            })
        } else {
            this.setState({
                errMsg: "No user is Associated with that email"
            })
        }
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
            errMsg: ''
        })
    }

    render() {
        if(this.state.redirectToLogin) {
            return <Redirect to="../" />
        }

        return (
            <div>
                <Navbar/>
                <Grid textAlign="center" verticalAlign="middle" centered columns={4} style={{marginTop: '20px'}}>
                    <Grid.Column>
                {this.state.errMsg ? <Message error>{this.state.errMsg}</Message> : null}
                    </Grid.Column>
                </Grid>
                {this.state.gotQuestion ?
                    [
                        this.state.answerCorrect ?
                            <ChangePassword
                                handleChange={this.handleChange}
                                authorizeChange={this.authorizeChange}
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