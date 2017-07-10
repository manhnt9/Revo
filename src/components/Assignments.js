import React from 'react';
import { Dropdown, Table } from 'semantic-ui-react';

class Assignments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: 'invalid',
      courses: [
        'E1', 'E2'
      ],
      courseOptions: [
      ],
      students: [
        {
          id: 1,
          name: 'Nguyen Van A',
          course: 'E1',
          grade1: 9.2,
          grade2: 8.0,
          grade3: 8.8
        },
        {
          id: 2,
          name: 'Nguyen Van B',
          course: 'E1',
          grade1: 9.0,
          grade2: 7.0,
          grade3: 7.6
        }
      ]
    };
  }

  componentWillMount() {
    const options = [];
    options.push({ key: 'invalid', text: 'Select course', value: 'invalid' });
    for (let i = 0; i < this.state.courses.length; i++) {
      const courseName = this.state.courses[i];
      options.push({ key: courseName, text: courseName, value: courseName });
    }
    this.setState({ courseOptions: options });
  }

  fetchData() {

  }

  handleDateChange(d) {
    this.setState({ date: d }, () => { this.fetchData(); });
  }

  handlecourseChange(value) {
    this.setState({ course: value }, () => { this.fetchData(); });
  }

  render() {
    const students = [];
    if (this.state.course !== 'invalid') {
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
          defaultValue={this.state.course}
          options={this.state.courseOptions}
          onChange={(event, data) => { this.handlecourseChange(data.value); }}
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

