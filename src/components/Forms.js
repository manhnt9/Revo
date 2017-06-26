import React from 'react';
import { Button, Table } from 'semantic-ui-react';
import Form from './Form';

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
          class: 'E1'
        }
      ]
    };
  }

  handleFormClick(formId) {
    this.setState({ currentForm: formId });
  }

  handleBackClick() {
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
            <Table.Cell>{this.state.forms[i].class}</Table.Cell>
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
                <Table.HeaderCell>Class</Table.HeaderCell>
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
        <Button onClick={() => { this.handleBackClick(); }}>Back</Button>
        <br />

        <Form formId={this.state.currentForm} />
      </div>
    );
  }
}

export default Forms;

