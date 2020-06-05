import React from "react"
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
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
                  value={props.password}
                  onChange={props.handleChange}
                  label='Password'
                  type='password'
              />

              <Button content='Save' primary />
            </Form>
          </Grid.Column>

  )
}

export default ProfileComponent

