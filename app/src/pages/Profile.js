import React from "react"
import Navbar from "../components/Navbar";
import createAccount from "../api/account/createAccount";
import ProfileComponent from '../components/ProfileComponent';
import AccountItem from '../components/AccountItem';
import Redirect from "react-router-dom/es/Redirect";
import {
  Divider,
  Grid, Header,
  Message,
  MessageHeader,
  MessageItem,
  MessageList,
  Segment, Table
} from 'semantic-ui-react'
import FieldErrorCheck from '../components/FieldErrorCheck';

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      accountName: "",
      userName: "",
      password: "",
      errorMsg: "",
      redirect: false,
      passwordl: { length: 11, data: "" }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.createPassword();
  }

  setLength = ({ value }) => {
    this.setState(({ progress, passwordl }) => ({
      passwordl: { ...passwordl, length: value }
    }), () => this.createPassword());
  };

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
    const accountObj = this.state;
    const fieldError = FieldErrorCheck(accountObj);
    if (fieldError) {
      await this.setState({
        errorMsg: fieldError
      });
      console.log(this.state.errorMsg)
    } else {
      createAccount(accountObj);
      this.setState({
        redirect: true
      })
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="../"/>
    }
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
            Current Accounts</Header>
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  Account
                </Table.HeaderCell>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Password</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
-- Import Accounts Here --
            <Table.Body>

            </Table.Body>
          </Table>
        </div>
    );
  }
}


export default Profile


/* {this.state.data.map((account) => <ProfileComponent key={account._id} position={account}/>)} */