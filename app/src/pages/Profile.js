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
    Popup, Form,
    Button
} from 'semantic-ui-react'
import ProfileNavBar from "../components/ProfileNavbar";
import createAccount from "../api/account/createAccount";
import GetAccountsByEmail from "../components/GetAccountsByEmail";
import CryptoJS from 'crypto-js'
import Reauthorize from "../components/Reauthorize";

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
      passwordl: { length: 11, data: "" },
      authorizePassword: '',
      attempts: 3,
      errMsg: ""
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleShowPassword = this.handleShowPassword.bind(this);
  }


  // noinspection JSCheckFunctionSignatures
  async componentDidMount() {
    try {
    this.createPassword();
    const reqAccountObj = {
      token: localStorage.getItem('userToken')
    };
    if(!reqAccountObj.token) {
      this.setState({
        redirect: true
      })
    }
      const response = await GetAccountsByEmail(reqAccountObj);
      let accountArray = response.data;
      accountArray.forEach((prop) => prop.show = false);
      this.setState({ data: accountArray})
    } catch (e) {
      this.setState({
        redirect: true
      })
    }
  }

  handleShowPassword = async (data) => {
    if(this.state.attempts === 0) {
      this.setState({
        redirect: true
      })
    }
    const reauthorizeObj = {
      token: localStorage.getItem('userToken'),
      password: this.state.authorizePassword
    };

    try {
      const tmp = await Reauthorize(reauthorizeObj);
      if(tmp.data) {
        const tmpAccount = this.state.data;
        const accountName = data.accountName;
        // noinspection JSUnresolvedFunction,JSUnresolvedFunction
        const changeShow = _.find(tmpAccount, {accountName: accountName});
        changeShow.show = true;
        const encryptedPassword = changeShow.password;
        // noinspection JSCheckFunctionSignatures
        changeShow.password = CryptoJS.AES.decrypt(encryptedPassword, 'd6be6e3545ba7ddbe0ca3ccc71075a25d80e58b597ba21a3ebc6d70e6bf6e6428dd20700afda6c519f511253b4b26de2f00d6b8aad6abfc0527f84d5173b6b6a').toString(CryptoJS.enc.Utf8);
        this.setState({
          authorizePassword: '',
          attempts: 3
        })
      } else {
        this.setState((prevState) =>{return {
          errorMsg: "password was incorrect ",
          authorizePassword: '',
          attempts: prevState.attempts - 1
        }
        })
      }
    } catch (e) {
      this.setState({
        redirect: true
      })
    }
  };

  setLength = ({ value }) => {
    this.setState(({ passwordl }) => ({
      passwordl: { ...passwordl, length: value }
    }), () => this.createPassword());
  };

  async handleLogout() {
    try {
      localStorage.setItem('userToken', '');
      this.setState({
        redirect: true,
        token: ''
      })
    } catch(e) {
      this.setState({
        errMsg: "did not log out correctly"
      })
    }

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
    try {
      const accountObj = {
        accountName: this.state.accountName,
        password: this.state.password,
        userName: this.state.userName,
        token: localStorage.getItem('userToken')
      };
      createAccount(accountObj)
    } catch (e) {
      this.setState({
        errMsg: "Failed to save credentials"
      })
    }
  };

  handleSort = (clickedColumn) => () => {
    const { column, data, direction } = this.state;
    if (column !== clickedColumn) {
      // noinspection JSUnresolvedFunction
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


    if (this.state.redirect || this.state.attempts === 0) {
      sessionStorage.clear();
      localStorage.clear();
      return <Redirect to="../"/>
    }
    // noinspection JSUnresolvedFunction
    return (
        <div>
          <ProfileNavBar
              handleLogout={this.handleLogout}
              {...this.state}
          />
          <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
              <Grid.Column>
                {
                  this.state.errMsg ? (
                      <Message negative>
                        {this.state.errMsg}
                      </Message>
                  ) : null
                }
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
              {_.map(data, ({ accountName, userName, password, show }) => (
                  <Table.Row key={password}>
                    <Table.Cell>{accountName}</Table.Cell>
                    <Table.Cell>{userName}</Table.Cell>
                    {show ?
                        <Table.Cell>{password}</Table.Cell>
                        :
                        <Popup
                            on="click"
                            trigger={<Button type="password" content='Show Password' />}
                        // <Button onClick={() => this.handleShowPassword({accountName, userName, password, show})}>Show Password</Button>
                        >
                          <Form onSubmit={() => this.handleShowPassword({accountName, userName, password, show})}>
                            <Form.Field>
                              {
                                this.state.errorMsg ? (
                                    <Message negative>
                                      {this.state.errorMsg}
                                      {this.state.attempts} attempts remaining
                                    </Message>
                                ) : null
                              }
                              <label>Master Password</label>
                              <input
                                  placeholder='*******'
                                  value={this.state.authorizePassword}
                                  name='authorizePassword'
                                  onChange={this.handleChange}
                                  type='password'
                                  defaultValue="password"
                              />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                          </Form>
                        </Popup>
                    }
                  </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
    );
  }
}


export default Profile


