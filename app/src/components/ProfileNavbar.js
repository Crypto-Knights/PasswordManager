import React from "react"
import {Button, Header, Menu} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

function ProfileNavBar(props) {
    return (
        <Menu>
            <Menu.Item position="left">
                <Header>Password Manager</Header>
            </Menu.Item>

            <Menu.Item as={NavLink} exact to="/">
                <Button onClick={props.onClick}>Log-out</Button>
            </Menu.Item>
        </Menu>
    )
}

export default ProfileNavBar