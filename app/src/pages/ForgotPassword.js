import React from 'react';
import {Grid, Header, Image, Form, Button, Label} from 'semantic-ui-react'
import Navbar from "../components/Navbar";

class ForgotPassword extends React.Component{

    constructor() {
        super();

        this.state = {
            questionOne: '',
            answerOne: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const [name, value] = event.target;
        this.setState({
            [name]: value
        })

    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="background">
                    <Grid centered columns={1}>
                        <Grid.Row style={{ marginTop: '100px' }}>
                            <Grid.Column>
                                <Header as="h1" textAlign="center">
                                    Security Question
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{ marginTop: '20px' }}>
                            <Grid.Column width={4}>

                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Form size="medium" key="small">
                                <Form.Field width={20}>
                                    <Label style={{ marginBottom: '8px' }}>Security Question 1</Label>
                                    <input
                                        type="text"
                                        onChange={this.handleChange}
                                        className="loginInputStyle"
                                        style={{ marginBottom: '10px' }}
                                    />
                                </Form.Field>
                                <Form.Field width={20}>
                                    <Label style={{ marginBottom: '8px' }}>Answer</Label>
                                    <input
                                        type="password"
                                        placeholder="*********"
                                    />
                                </Form.Field>
                                <Button >Submit</Button>
                            </Form>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default ForgotPassword