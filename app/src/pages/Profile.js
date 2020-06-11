import {
  Divider,
  Grid, Header,
  Message,
  MessageHeader,
  MessageItem,
  MessageList,
  Segment, Table
} from 'semantic-ui-react'
import ProfileNavBar from "../components/ProfileNavbar";
import LogoutRequest from "../api/user/LogoutRequest";
import {Redirect} from "react-router-dom";
import IsLoggedIn from "../api/IsLoggedIn";
import React, { Component } from 'react'
import _ from 'lodash'
import Navbar from "../components/Navbar";
import ProfileComponent from '../components/ProfileComponent';
import FieldErrorCheck from '../components/FieldErrorCheck';

const testTableData = [
  { taccount: '* Facebook', tusername: '* Yup', tpassword: '* 1Qa!' },
  { taccount: '* Instagram', tusername: '* You', tpassword: '* 2Ws@' },
]
//todo: Is user authorized to access profile page? if not, redirect back to login page

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: { length: 11, data: "" }
    };
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    this.createPassword();
  }

  setLength = ({ value }) => {
    this.setState(({ progress, password }) => ({
      password: { ...password, length: value }
    }), () => this.createPassword());
  };

  async handleLogout() {
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
          <Navbar/>
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
                  <h1 className="generator-pass">{this.state.passwordl.data}</h1>
                  <div className="generator-strong">
                    <label>
                      <input
                          type="range"
                          min="6"
                          max="16"
                          defaultValue={this.state.passwordl.length}
                          onChange={e => this.setLength(e.target)}
                      />
                      {this.state.passwordl.length}
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

          <Header as='h1' textAlign='center'>
            Current Accounts (* Test Data)</Header>
          <Table sortable celled fixed >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell sorted={column === 'taccount' ? direction : null}
                                  onClick={this.handleSort('taccount')}>
                  Account
                </Table.HeaderCell>
                <Table.HeaderCell sorted={column === 'tusername' ? direction : null}
                                  onClick={this.handleSort('tusername')}>
                  Username
                </Table.HeaderCell>
                <Table.HeaderCell>
                  Password
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {_.map(data, ({ taccount, tusername, tpassword }) => (
                  <Table.Row key={taccount}>
                    <Table.Cell>{taccount}</Table.Cell>
                    <Table.Cell>{tusername}</Table.Cell>
                    <Table.Cell>{tpassword}</Table.Cell>
                  </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
    );
  }
}


export default Profile