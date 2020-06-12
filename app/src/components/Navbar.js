import React from "react"
import { Menu, Dropdown, Image} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

function Navbar() {
  return (

      <Menu>

        <Image size='tiny' circular src="/Image/Icon.png"/>

        <Menu.Item position="right">
          <Dropdown  icon="user" text="Login" pointing="top right" as={NavLink} exact to="/">
            <Dropdown.Menu>
              <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
              <Dropdown.Item icon="user" text="Profile" as={NavLink} exact to="/Profile"/>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

      </Menu>
  )
}

export default Navbar