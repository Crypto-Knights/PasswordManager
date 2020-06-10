import React from "react"
import { Button, Form, Grid } from 'semantic-ui-react'
import '../css/style.css'

function ProfileComponent(props) {
  return (

          <Grid.Column>
            <Form>
              <Form.Input
                  icon='briefcase'
                  iconPosition='left'
                  value={props.account}
                  onChange={props.handleChange}
                  label='Account Name'
                  placeholder='Account Name'
              />
              <Form.Input
                  icon='user'
                  iconPosition='left'
                  value={props.username}
                  onChange={props.handleChange}
                  label='Username'
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

              <Button type='submit'>Submit</Button>
            </Form>
          </Grid.Column>

  )
}

export default ProfileComponent

