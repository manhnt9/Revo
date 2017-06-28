import React from 'react';
import { Dropdown, Checkbox, Table } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class Attendance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
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
          presence: true
        },
        {
          id: 2,
          name: 'Nguyen Van B',
          class: 'E1',
          presence: false
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
    console.log(this.state.date.format('MM/DD/YYYY'));
  }

  handleDateChange(d) {
    this.setState({ date: d }, () => { this.fetchData(); });
  }

  handlePresenceChange(id) {
    const newStudents = this.state.students;
    for (let i = 0; i < newStudents.length; i++) {
      if (newStudents[i].id === id) {
        newStudents[i].presence = !newStudents[i].presence;
      }
    }
    this.setState({ students: newStudents });
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
            <Table.Cell>
              <Checkbox
                onClick={() => { this.handlePresenceChange(this.state.students[i].id); }}
                checked={this.state.students[i].presence}
              />
            </Table.Cell>
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
        &nbsp;
        <DatePicker
          selected={this.state.date}
          onChange={(d) => { this.handleDateChange(d); }}
        />

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>No</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Presense</Table.HeaderCell>
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

export default Attendance;

