import React from "react"
import {Form, Checkbox, Button }from "semantic-ui-react"

function FormComponent(props) {
    return (
        <div>
            <Form onSubmit={props.handleSubmit} widths={5}>
                <Form.Field>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        value={props.firstName}
                        name="firstName"
                        onChange={props.handleChange}
                        type="text"
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        value={props.lastName}
                        name="lastName"
                        onChange={props.handleChange}
                        type="text"
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input
                        placeholder='Last Name'
                        value={props.email}
                        name="email"
                        onChange={props.handleChange}
                        type="text"
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input
                        placeholder='Last Name'
                        value={props.password}
                        name="password"
                        onChange={props.handleChange}
                        type="password"
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default FormComponent