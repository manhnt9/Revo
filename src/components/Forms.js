import React from 'react';
import { Button, Table, Icon } from 'semantic-ui-react';
import Form from './Form';
import request from 'request';
import { API_URL } from '../Api.js';

const nameStyle = {
  cursor: 'pointer'
};

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentForm: -1,
      forms: [
        {
          id: 1,
          name: 'Nguyen Van A',
          course: 'E1'
        }
      ]
    };
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  componentWillMount() {
    const options = {
      url: `${API_URL}/form?token=${sessionStorage.token}`,
      method: 'GET',
      json: true
    };

    request(options, (err, res, body) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({ forms: body });
      }
    });
  }

  handleFormClick(formId) {
    this.setState({ currentForm: formId });
  }

  handleBackClick(approved) {
    if (approved) {
      const forms = this.state.forms;
      for (let i = 0; i < forms.length; i++) {
        if (forms[i].id === this.state.currentForm) {
          forms[i].approved = true;
          break;
        }
      }
    }

    this.setState({ currentForm: -1 });
  }

  render() {
    if (this.state.currentForm === -1) {
      const forms = [];
      for (let i = 0; i < this.state.forms.length; i++) {
        forms.push(
          <Table.Row>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell
              style={nameStyle}
              onClick={() => { this.handleFormClick(this.state.forms[i].id); }}
            >
              <a>{this.state.forms[i].name}</a>
            </Table.Cell>
            <Table.Cell>
              {this.state.forms[i].course}
              {this.state.forms[i].approved &&
                <span>&nbsp; <Icon color="green" name="checkmark" /></span>}
            </Table.Cell>
          </Table.Row>
        );
      }

      return (
        <div>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>No</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Course</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {forms}
            </Table.Body>

            {/* <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="left chevron" />
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="right chevron" />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>*/}
          </Table>
        </div>
      );
    }

    return (
      <div>
        <Form id={this.state.currentForm} onClose={this.handleBackClick} />
      </div>
    );
  }
}

export default Forms;

