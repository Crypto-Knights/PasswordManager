import React from "react"
import {
    Form,
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
                    {props.errorMsg ? <Message error>{props.errorMsg}</Message> : null}
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
                        type="email"
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
                    <select
                        placeholder="Please Select a Question"
                        name="questionOne"
                        value={props.questionOne}
                        onChange={props.handleChange}
                    >
                        <option>Please Select a security question</option>
                        <option value={"What primary school did you attend?"}>What primary school did you attend?</option>
                        <option value={"What was the house number and street name you lived in as a child?"}>What was the house number and street name you lived in as a child?</option>
                        <option value={"What were the last four digits of your childhood telephone number?"}>What were the last four digits of your childhood telephone number?</option>
                        <option value={"In what town or city was your first full time job?"}>In what town or city was your first full time job?</option>
                        <option value={"What is the middle name of your oldest child?"}>What is the middle name of your oldest child?</option>
                        <option value={"What are the last five digits of your driver\\'s license number?"}>What are the last five digits of your driver\'s license number?</option>
                        <option value={"What is your spouse or partner\\'s mother\\'s maiden name?"}>What is your spouse or partner\'s mother\'s maiden name?</option>
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