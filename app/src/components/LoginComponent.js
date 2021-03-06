import React from "react"
import {Grid, Header, Image, Form, Label, Button } from "semantic-ui-react";
import Message from "semantic-ui-react/dist/commonjs/collections/Message";


function LoginComponent(props) {
    // noinspection HtmlUnknownTarget
    return (
        <div>
        <Grid centered columns={1}>
            <Grid.Row style={{ marginTop: '100px' }}>
                <Grid.Column>
                    <Header as="h1" textAlign="center">
                        <Image src="https://static1.squarespace.com/static/55f95d48e4b07e8361de4270/t/564d57dbe4b0aacfc09ba834/1447909340240/The+Lock-Favicon.png?format=1500w" centered />
                        Password Manager
                    </Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '20px' }}>
                <Grid.Column width={4}>
                    {
                        props.errorMsg ? (
                            <Message negative>
                                {props.errorMsg}
                            </Message>
                        ) : null
                    }
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                {props.display ?
                <Form size="small" key="small" onSubmit={props.handleSubmit}>
                    <Form.Field width={16}>
                        <Label style={{ marginBottom: '8px' }}>Email</Label>
                        <input
                            value={props.email}
                            onChange={props.handleChange}
                            type="email"
                            name="email"
                            placeholder="example@hotmail.com"
                            className="loginInputStyle"
                            style={{ marginBottom: '10px' }}
                        />
                    </Form.Field>
                    <Form.Field width={16}>
                        <Label style={{ marginBottom: '8px' }}>Password</Label>
                        <input
                            name="password"
                            value={props.password}
                            onChange={props.handleChange}
                            type="password"
                            placeholder="*********"
                        />
                    </Form.Field>
                    <Button>Log In</Button>
                    <a href="/ForgotPassword">Forgot Password?</a>

                </Form>
                    :
                    <Form size="small" key="small" onSubmit={props.handleSubmit}>
                        <Form.Field width={16}>
                            <Label style={{ marginBottom: '8px' }}>Email</Label>
                            <input
                                value={props.email}
                                onChange={props.handleChange}
                                type="email"
                                name="email"
                                disabled={true}
                                placeholder="example@hotmail.com"
                                className="loginInputStyle"
                                style={{ marginBottom: '10px' }}
                            />
                        </Form.Field>
                        <Form.Field width={16}>
                            <Label style={{ marginBottom: '8px' }}>Password</Label>
                            <input
                                name="password"
                                value={props.password}
                                onChange={props.handleChange}
                                disabled={true}
                                type="password"
                                placeholder="*********"
                            />
                        </Form.Field>
                        <Button disabled={true}>Log In</Button>
                        <Button size='tiny'>Forgot password?</Button>

                    </Form>}
                    </Grid.Row>
        </Grid>
        </div>
    )
}

export default LoginComponent