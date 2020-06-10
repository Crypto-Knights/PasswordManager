import React from "react"
import Navbar from "../components/Navbar";
import ProfileComponent from '../components/ProfileComponent';
import {
  Divider,
  Grid,
  Message,
  MessageHeader,
  MessageItem,
  MessageList,
  Segment
} from 'semantic-ui-react'
import ProfileNavBar from "../components/ProfileNavbar";
import LogoutRequest from "../api/user/LogoutRequest";

//todo: Is user authorized to access profile page? if not, redirect back to login page

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: { length: 11, data: "" }
    }
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    this.createPassword();
  }

  setLength = ({ value }) => {
    this.setState(({ progress, password }) => ({
      password: { ...password, length: value }
    }), () => this.createPassword());
  };

  onClick() {
    LogoutRequest();
  }

  createPassword = () => {
    let a = "",
        b = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(),.?ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        c = this.state.password.length;
    for(let x = 0; x < c; x++) {
      a += b[Math.floor(Math.random() * b.length)];
    }
    this.setState(state => ({
      password: { ...state.password, data: a }
    }));
  };

  render() {

    return (
    <div>
      <ProfileNavBar onClick={this.onClick}/>
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <ProfileComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.state}
            />
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <div className="generator">
              <h1 className="generator-pass">{ this.state.password.data }</h1>
              <div className="generator-strong">
                <label>
                  <input
                      type="range"
                      min="6"
                      max="16"
                      defaultValue={ this.state.password.length }
                      onChange={ e => this.setLength(e.target) }
                  />
                  { this.state.password.length }
                </label>

              </div>
              <Message size="tiny">
                <MessageHeader>Password Generator</MessageHeader>
                <MessageList>
                  <MessageItem>
                    Slide bar for 6 to 16 characters in length
                  </MessageItem>
                </MessageList>
              </Message>
            </div>
          </Grid.Column>
        </Grid>

        <Divider vertical> </Divider>
      </Segment>
    </div>
  );
  }
}


export default Profile