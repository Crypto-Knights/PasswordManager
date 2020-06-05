import React from "react"
import {Button, Menu, Header,Dropdown,Image} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (

        <Menu>

          <Image size='middle' circular src="/Image/Icon.png"/>

            <Menu.Item as={NavLink} exact to="/">
                <Button>Log-in</Button>
            </Menu.Item>

            <Menu.Item as={NavLink} exact to="/Signup">
                <Button primary>Sign up</Button>
            </Menu.Item>

        </Menu>
    )
}

export default Navbar