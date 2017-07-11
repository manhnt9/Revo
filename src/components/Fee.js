import React from 'react';
import { Form, Grid, Checkbox, Table } from 'semantic-ui-react';
import request from 'request';
import { API_URL } from '../Api.js';

class Fee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFilter: 0,
      students: []
    };
  }

  componentWillMount() {
    const options = {
      url: `${API_URL}/fee?token=${sessionStorage.token}`,
      method: 'GET',
      json: true
    };

    request(options, (err, res, body) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({ students: body });
      }
    });
  }

  setFilter(filter) {
    this.setState({ currentFilter: filter });
  }

  handlePaymentChange(id) {
    const newStudents = this.state.students;
    for (let i = 0; i < newStudents.length; i++) {
      if (newStudents[i].id === id) {
        newStudents[i].has_paid = !newStudents[i].has_paid;
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
            <Table.Cell>{this.state.students[i].student}</Table.Cell>
            <Table.Cell>{this.state.students[i].course}</Table.Cell>
            <Table.Cell>
              <Checkbox
                onClick={() => { this.handlePaymentChange(this.state.students[i].id); }}
                checked={this.state.students[i].has_paid}
              />
            </Table.Cell>
          </Table.Row>
        );
      }
    } else if (this.state.currentFilter === 1) {
      for (let i = 0; i < this.state.students.length; i++) {
        if (this.state.students[i].has_paid === true) continue;
        students.push(
          <Table.Row>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{this.state.students[i].student}</Table.Cell>
            <Table.Cell>{this.state.students[i].course}</Table.Cell>
            <Table.Cell>
              <Checkbox
                onClick={() => { this.handlePaymentChange(this.state.students[i].id); }}
                checked={this.state.students[i].has_paid}
              />
            </Table.Cell>
          </Table.Row>
        );
      }
    } else if (this.state.currentFilter === 2) {
      for (let i = 0; i < this.state.students.length; i++) {
        if (this.state.students[i].has_paid === false) continue;
        students.push(
          <Table.Row>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{this.state.students[i].student}</Table.Cell>
            <Table.Cell>{this.state.students[i].course}</Table.Cell>
            <Table.Cell>
              <Checkbox
                onClick={() => { this.handlePaymentChange(this.state.students[i].id); }}
                checked={this.state.students[i].has_paid}
              />
            </Table.Cell>
          </Table.Row>
        );
      }
    }

    return (
      <div>
        <div coursestudent="ui one column stackable center aligned page grid">
          <div coursestudent="column">
            <Form.Group grouped>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Form.Field label="All" control="input" type="radio" student="htmlRadios"
                      onClick={() => { this.setFilter(0); }}
                      checked={this.state.currentFilter === 0}
                    />
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Form.Field label="Hasn't paid" control="input" type="radio" student="htmlRadios"
                      onClick={() => { this.setFilter(1); }}
                      checked={this.state.currentFilter === 1}
                    />
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Form.Field label="Has paid" control="input" type="radio" student="htmlRadios"
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
              <Table.HeaderCell>Student</Table.HeaderCell>
              <Table.HeaderCell>Course</Table.HeaderCell>
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

