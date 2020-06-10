import React from "react"
import {Grid, Form, Button, Label, Header} from 'semantic-ui-react'

function ChangePassword(props) {
    return (
        <div>
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
                    <Form size="medium" key="small" onSubmit={props.authorizeChange}>
                        <Form.Field width={20}>
                            <Label style={{ marginBottom: '8px' }}>New Password</Label>
                            <input
                                onChange={props.handleChange}
                                name="passwordOne"
                                value={props.passwordOne}
                                type="password"
                                placeholder="*********"
                            />
                        </Form.Field>
                        <Form.Field width={20}>
                            <Label style={{ marginBottom: '8px' }}>Confirm Password</Label>
                            <input
                                onChange={props.handleChange}
                                name="passwordTwo"
                                value={props.passwordTwo}
                                type="password"
                                placeholder="*********"
                            />
                        </Form.Field>
                        <Button >Submit</Button>
                    </Form>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default ChangePassword