import React from "react"
import {
    Form,
    Select,
    Button,
    Grid,
    Header,
    Message, MessageHeader, MessageList, MessageItem, }from "semantic-ui-react"
import '../css/style.css'

const securityQuestions = [
    {key: '1', value: '1', text: 'What primary school did you attend?'},
    {key: '2', value: '2', text: 'What was the house number and street name you lived in as a child?'},
    {key: '3', value: '3', text: 'What were the last four digits of your childhood telephone number?'},
    {key: '4', value: '4', text: 'In what town or city was your first full time job?'},
    {key: '5', value: '5', text: 'n what town or city did you meet your spouse or partner?'},
    {key: '6', value: '6', text: 'What is the middle name of your oldest child?'},
    {key: '7', value: '7', text: 'What are the last five digits of your driver\'s license number?'},
    {key: '8', value: '8', text: 'What is your grandmother\'s (on your mother\'s side) maiden name?'},
    {key: '9', value: '9', text: 'What is your spouse or partner\'s mother\'s maiden name?'},
]

function FormComponent(props) {
    return (
        <div className="background">
            <Grid textAlign="center" verticalAlign="middle" centered columns={4}>
                <Grid.Column>
                <Header as="h2" textAlign="center">
                    Register your account
                </Header>
            <Form onSubmit={props.handleSubmit}>
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
                        options={securityQuestions}
                        name="questionOne"
                        type="select"
                        value={props.questionOne}
                        onChange={props.handleChange}
                    />
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