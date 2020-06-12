import React from 'react';
import _ from 'lodash';
import ProfileComponent from '../components/ProfileComponent';
import Redirect from "react-router-dom/es/Redirect";
import {
  Divider,
  Grid, Header,
  Message,
  MessageHeader,
  MessageItem,
  MessageList,
  Segment, Table,
} from 'semantic-ui-react'
import ProfileNavBar from "../components/ProfileNavbar";
import LogoutRequest from "../api/user/LogoutRequest";
import createAccount from "../api/account/createAccount";
import axios from "axios"
import GetAccountsByEmail from "../components/GetAccountsByEmail";
import CryptoJS from 'crypto-js'

const testTableData = [
  { taccount: '* Facebook', tusername: '* Yup', tpassword: '* 1Qa!' },
  { taccount: '* Instagram', tusername: '* You', tpassword: '* 2Ws@' },
];

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      password: "",
      column: null,
      data: null,
      direction: null,
      accountName: "",
      userName: "",
      errorMsg: "",
      redirect: false,
      passwordl: { length: 11, data: "" }
    };
    this.handleLogout = this.handleLogout.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    this.createPassword();
    const reqAccountObj = {
      token: localStorage.getItem('userToken')
    };
    if(!reqAccountObj.token) {
      this.setState({
        redirect: true
      })
    }
    try {
      const response = await GetAccountsByEmail(reqAccountObj);
      const accountArray = response.data;
      this.setState({ data: accountArray})

      //todo for all passwords in accountArray. decrypt the passwords with "CryptoJS.AES.decrypt(ENCRYPTED PASSWORD HERE,process.env.SUPER_SECRET_KEY)"
      {/*const encryptedWord = CryptoJS.AES.encrypt("words", process.env.SUPER_SECRET_KEY)
      console.log(CryptoJS.AES.decrypt(encryptedWord, process.env.SUPER_SECRET_KEY).toString(CryptoJS.enc.Utf8))*/}
      console.log(accountArray)
    } catch (e) {
      this.setState({
        redirect: true
      })
    }
  }

  setLength = ({ value }) => {
    this.setState(({ progress, passwordl }) => ({
      passwordl: { ...passwordl, length: value }
    }), () => this.createPassword());
  };

  async handleLogout() {
    LogoutRequest();
  }

  createPassword = () => {
    let a = "",
        b = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(),.?ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        c = this.state.passwordl.length;
    for (let x = 0; x < c; x++) {
      a += b[Math.floor(Math.random() * b.length)];
    }
    this.setState(state => ({
      passwordl: { ...state.passwordl, data: a }
    }));
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      errorMsg: null
    })

  }

  handleSubmit = async () => {
    const accountObj = {
      accountName: this.state.accountName,
      password: this.state.password,
      userName: this.state.userName,
      token: localStorage.getItem('userToken')
    };
    createAccount(accountObj)
  };

  handleSort = (clickedColumn) => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      });

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  };

  render() {
    const { column, data, direction,} = this.state;


    if (this.state.redirect) {
      return <Redirect to="../"/>
    }
    return (
        <div>
          <ProfileNavBar/>
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
            Current Accounts </Header>
          <Table sortable celled fixed >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell sorted={column === 'accountName' ? direction : null}
                                  onClick={this.handleSort('accountName')}>
                  Account
                </Table.HeaderCell>
                <Table.HeaderCell sorted={column === 'userName' ? direction : null}
                                  onClick={this.handleSort('userName')}>
                  Username
                </Table.HeaderCell>
                <Table.HeaderCell>
                  Password
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {_.map(data, ({ accountName, userName, password }) => (
                  <Table.Row key={password}>
                    <Table.Cell>{accountName}</Table.Cell>
                    <Table.Cell>{userName}</Table.Cell>
                    <Table.Cell>{password}</Table.Cell>
                  </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
    );
  }
}


export default Profile


/* {this.state.data.map((account) => <ProfileComponent key={account._id} position={account}/>)} */