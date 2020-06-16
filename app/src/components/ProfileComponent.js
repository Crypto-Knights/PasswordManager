import React from "react"
import { Button, Form, Grid } from 'semantic-ui-react'
import '../css/style.css'

function ProfileComponent(props) {

  function refreshPage() {
    // noinspection JSDeprecatedSymbols
      window.location.reload(false);
  }

  return (

          <Grid.Column>
            <Form onSubmit={props.handleSubmit}>
              <Form.Input
                  icon='briefcase'
                  iconPosition='left'
                  value={props.accountName}
                  onChange={props.handleChange}
                  name="accountName"
                  label='Account Name'
                  placeholder='Account Name'
              />
              <Form.Input
                  icon='user'
                  iconPosition='left'
                  value={props.userName}
                  onChange={props.handleChange}
                  label='Username'
                  name="userName"
                  placeholder='Username'
              />

              <Form.Input
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  value={props.password}
                  name="password"
                  onChange={props.handleChange}
                  type="password"
              />
              <Button type='submit' onClick={refreshPage}>Submit</Button>
            </Form>
          </Grid.Column>

  )
}

export default ProfileComponent

