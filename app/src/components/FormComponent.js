import React from "react"
import {
    Form,
    Select,
    Button,
    Grid,
    Header,
    Message, MessageHeader, MessageList, MessageItem, }from "semantic-ui-react"
import '../css/style.css'



function FormComponent(props) {
    return (
        <div className="background">
            <Grid textAlign="center" verticalAlign="middle" centered columns={4}>
                <Grid.Column>
                <Header as="h2" textAlign="center">
                    Register your account
                </Header>
            <Form onSubmit={props.handleSubmit} id="createUserInput">
                <Form.Field width={16}>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        value={props.firstName}
                        name="firstName"
                        onChange={props.handleChange}
                        type="text"
                    />
                </Form.Field>
                <Form.Field width={16}>
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        value={props.lastName}
                        name="lastName"
                        onChange={props.handleChange}
                        type="text"
                    />
                </Form.Field>
                <Form.Field width={16}>
                    <label>Email</label>
                    <input
                        placeholder='Someone@domain.com'
                        value={props.email}
                        name="email"
                        onChange={props.handleChange}
                        type="text"
                    />
                </Form.Field>
                <Form.Field width={16}>
                    <label>Password</label>
                    <input
                        placeholder='Password'
                        value={props.password}
                        name="password"
                        onChange={props.handleChange}
                        type="password"
                    />
                </Form.Field>
                <Form.Field>
                    <label>Security Question 1</label>
                    <Select
                        placeholder="Please Select a question"
                        options={props.securityQuestions}
                        name="questionOne"
                        value={props.questionOne}
                        onClick={props.handleChange}
                    />
                    <select
                        placeholder="Please Select a Question"
                        name="questionOne"
                        value={props.questionOne}

                    >
                        <option value={""}></option>
                    </select>
                </Form.Field>
                <Form.Field width={16}>
                    <input
                        placeholder='Answer'
                        value={props.answerOne}
                        name="answerOne"
                        onChange={props.handleChange}
                        type="text"
                    />
                </Form.Field>
                <Message size="tiny">
                    <MessageHeader>Password must contain the following:</MessageHeader>
                    <MessageList>
                        <MessageItem>
                            6 to 16 characters in length
                        </MessageItem>
                        <MessageItem>
                            At least 1 upper case letter
                        </MessageItem>
                        <MessageItem>
                            At least 1 number
                        </MessageItem>
                        <MessageItem>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            At least 1 special character of (!@#$%^&*()_\-+=?/;:'"\\|~`.)
                        </MessageItem>
                    </MessageList>
                </Message>
                <Button type='submit'>Submit</Button>
            </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default FormComponent