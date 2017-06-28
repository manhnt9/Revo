import React from 'react';
import { Dropdown, Checkbox, Table } from 'semantic-ui-react';

class Assignments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      class: 'invalid',
      classes: [
        'E1', 'E2'
      ],
      classOptions: [
      ],
      students: [
        {
          id: 1,
          name: 'Nguyen Van A',
          class: 'E1',
          grade1: 9.2,
          grade2: 8.0,
          grade3: 8.8
        },
        {
          id: 2,
          name: 'Nguyen Van B',
          class: 'E1',
          grade1: 9.0,
          grade2: 7.0,
          grade3: 7.6
        }
      ]
    };
  }

  componentWillMount() {
    const options = [];
    options.push({ key: 'invalid', text: 'Select class', value: 'invalid' });
    for (let i = 0; i < this.state.classes.length; i++) {
      const className = this.state.classes[i];
      options.push({ key: className, text: className, value: className });
    }
    this.setState({ classOptions: options });
  }

  fetchData() {

  }

  handleDateChange(d) {
    this.setState({ date: d }, () => { this.fetchData(); });
  }

  handleClassChange(value) {
    this.setState({ class: value }, () => { this.fetchData(); });
  }

  render() {
    const students = [];
    if (this.state.class !== 'invalid') {
      for (let i = 0; i < this.state.students.length; i++) {
        students.push(
          <Table.Row>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{this.state.students[i].name}</Table.Cell>
            <Table.Cell>{this.state.students[i].grade1}</Table.Cell>
            <Table.Cell>{this.state.students[i].grade2}</Table.Cell>
            <Table.Cell>{this.state.students[i].grade3}</Table.Cell>
          </Table.Row>
        );
      }
    }

    return (
      <div>
        <Dropdown
          defaultValue={this.state.class}
          options={this.state.classOptions}
          onChange={(event, data) => { this.handleClassChange(data.value); }}
        />

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>No</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Assignment 1</Table.HeaderCell>
              <Table.HeaderCell>Assignment 2</Table.HeaderCell>
              <Table.HeaderCell>Assignment 3</Table.HeaderCell>
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

export default Assignments;

