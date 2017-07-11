import React from 'react';
import { Dropdown, Checkbox, Table } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import request from 'request';
import { API_URL } from '../Api.js';

class Attendance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
      course: 'invalid',
      courses: [],
      courseOptions: [],
      students: []
    };
  }

  componentWillMount() {
    const option = {
      url: `${API_URL}/course?token=${sessionStorage.token}`,
      method: 'GET',
      json: true
    };

    request(option, (err, res, body) => {
      if (err) {
        console.log(err);
      } else {
        const Courses = [];
        for (let i = 0; i < body.length; ++i) {
          Courses.push(body[i].course);
        }

        this.setState({ courses: Courses }, () => {
          const options = [];
          options.push({ key: 'invalid', text: 'Select course', value: 'invalid' });

          for (let i = 0; i < this.state.courses.length; i++) {
            const course = this.state.courses[i];
            options.push({ key: course, text: course, value: course });
          }
          this.setState({ courseOptions: options });
        });
      }
    });
  }

  fetchData() {
    const date = this.state.date;

    const options = {
      url: `${API_URL}/presence?course=${this.state.course}&date=${date.format('MM/DD/YYYY')}&token=${sessionStorage.token}`,
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

  handleDateChange(d) {
    this.setState({ date: d }, () => { this.fetchData(); });
  }

  handlePresenceChange(id) {
    const newStudents = this.state.students;
    for (let i = 0; i < newStudents.length; i++) {
      if (newStudents[i].id === id) {
        newStudents[i].presence = !newStudents[i].presence;
        const date = this.state.date;

        const formData = {
          student: `${newStudents[i].id}`,
          course: this.state.course,
          date: date.format('MM/DD/YYYY')
        };

        const options = {
          url: `${API_URL}/presence?token=${sessionStorage.token}`,
          method: 'POST',
          json: true,
          body: formData
        };

        if (newStudents[i].presence) {
          options.method = 'POST';
        } else {
        }

        request(options, (err, res, body) => {
          if (err) {
            console.log(err);
          } else {
          }
        });
      }
    }
    this.setState({ students: newStudents });
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
          defaultValue={this.state.course}
          options={this.state.courseOptions}
          onChange={(event, data) => { this.handlecourseChange(data.value); }}
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

