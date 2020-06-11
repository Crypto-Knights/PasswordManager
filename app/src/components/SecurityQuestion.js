import React from "react"
import {Button, Form, Grid, Header, Label} from "semantic-ui-react";
import Message from "semantic-ui-react/dist/commonjs/collections/Message";

function SecurityQuestion(props) {
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
                    <Form size="medium" key="small" onSubmit={props.changePassword}>
                        <Form.Field width={20}>
                            <Label style={{ marginBottom: '8px' }}>Security Question 1</Label>
                            <Message>{props.questionOne}</Message>
                        </Form.Field>
                        <Form.Field width={20}>
                            <Label style={{ marginBottom: '8px' }}>Answer</Label>
                            <input
                                value={props.answerOne}
                                name="answerOne"
                                onChange={props.handleChange}
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

export default SecurityQuestion