import React from "react"
import {Button, Menu, Header} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <Menu>
            <Menu.Item position="left">
                <Header>Password Manager</Header>
            </Menu.Item>

            <Menu.Item as={NavLink} exact to="/">
                <Button>Log-in</Button>
            </Menu.Item>

            <Menu.Item as={NavLink} exact to="/Signup">
                <Button primary>Sign up</Button>
            </Menu.Item>

            <Menu.Item as={NavLink} exact to="/Profile">
                <Button primary>Profile</Button>
            </Menu.Item>

        </Menu>
    )
}

export default Navbar