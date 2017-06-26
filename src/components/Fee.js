import React from 'react';
import { Button, Icon, Form, Grid, Checkbox, Table } from 'semantic-ui-react';

class Fee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFilter: 2,
      students: [
        {
          id: 1,
          name: 'Nguyen Van A',
          class: 'E1',
          hasPayed: true
        },
        {
          id: 2,
          name: 'Nguyen Van B',
          class: 'E1',
          hasPayed: false
        }
      ]
    };
  }

  setFilter(filter) {
    this.setState({ currentFilter: filter });
  }

  handlePaymentChange(id) {
    const newStudents = this.state.students;
    for (let i = 0; i < newStudents.length; i++) {
      if (newStudents[i].id === id) {
        newStudents[i].hasPayed = !newStudents[i].hasPayed;
      }
    }
    this.setState({ students: newStudents });
  }

  render() {
    const students = [];
    if (this.state.currentFilter === 0) {
      for (let i = 0; i < this.state.students.length; i++) {
        students.push(
          <Table.Row>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{this.state.students[i].name}</Table.Cell>
            <Table.Cell>{this.state.students[i].class}</Table.Cell>
            <Table.Cell>
              <Checkbox
                onClick={() => { this.handlePaymentChange(this.state.students[i].id); }}
                checked={this.state.students[i].hasPayed}
              />
            </Table.Cell>
          </Table.Row>
        );
      }
    } else if (this.state.currentFilter === 1) {
      for (let i = 0; i < this.state.students.length; i++) {
        if (this.state.students[i].hasPayed === true) continue;
        students.push(
          <Table.Row>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{this.state.students[i].name}</Table.Cell>
            <Table.Cell>{this.state.students[i].class}</Table.Cell>
            <Table.Cell>
              <Checkbox
                onClick={() => { this.handlePaymentChange(this.state.students[i].id); }}
                checked={this.state.students[i].hasPayed}
              />
            </Table.Cell>
          </Table.Row>
        );
      }
    } else if (this.state.currentFilter === 2) {
      for (let i = 0; i < this.state.students.length; i++) {
        if (this.state.students[i].hasPayed === false) continue;
        students.push(
          <Table.Row>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{this.state.students[i].name}</Table.Cell>
            <Table.Cell>{this.state.students[i].class}</Table.Cell>
            <Table.Cell>
              <Checkbox
                onClick={() => { this.handlePaymentChange(this.state.students[i].id); }}
                checked={this.state.students[i].hasPayed}
              />
            </Table.Cell>
          </Table.Row>
        );
      }
    }

    return (
      <div>
        <div className="ui one column stackable center aligned page grid">
          <div className="column">
            <Form.Group grouped>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Form.Field label="All" control="input" type="radio" name="htmlRadios"
                      onClick={() => { this.setFilter(0); }}
                      checked={this.state.currentFilter === 0}
                    />
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Form.Field label="Hasn't payed" control="input" type="radio" name="htmlRadios"
                      onClick={() => { this.setFilter(1); }}
                      checked={this.state.currentFilter === 1}
                    />
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Form.Field label="Has payed" control="input" type="radio" name="htmlRadios"
                      onClick={() => { this.setFilter(2); }}
                      checked={this.state.currentFilter === 2}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form.Group>
          </div>
        </div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>No</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Class</Table.HeaderCell>
              <Table.HeaderCell>Payment</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {students}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default Fee;

