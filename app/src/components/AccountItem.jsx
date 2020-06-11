import React from "react"
import { Table, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../css/style.css'

class AccountItem extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const modalPadding = { padding: '10px 10px 10px 10px' };
    return (

        <Modal style={modalPadding} trigger={
          <Table.Row>
            <Table.Cell>{this.props.account.account}</Table.Cell>
            <Table.Cell>{this.props.account.username}</Table.Cell>
            <Table.Cell>{this.props.account.password}</Table.Cell>
          </Table.Row>
        }>

          <Table celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Account</Table.HeaderCell>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Password</Table.HeaderCell>
              </Table.Row>

            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{this.props.account.account}</Table.Cell>
                <Table.Cell>{this.props.account.username}</Table.Cell>
                <Table.Cell>{this.props.account.password}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Modal>
    );
  }
}

/** Require a document to be passed to this component. */
AccountItem.propTypes = {
  account: PropTypes.object.isRequired,
};

export default AccountItem