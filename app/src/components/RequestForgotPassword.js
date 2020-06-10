import React from "react"
import {Button, Form, Grid, Header, Label} from "semantic-ui-react";

function RequestForgotPassword(props) {
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
                    <Form size="medium" key="small" onSubmit={props.getQuestion}>
                        <Form.Field width={20}>
                            <Label style={{ marginBottom: '8px' }}>Enter Email</Label>
                            <input
                                onChange={props.handleChange}
                                name="email"
                                value={props.email}
                                type="email"
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

export default RequestForgotPassword