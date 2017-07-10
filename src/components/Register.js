import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import request from 'request';
import { API_URL } from '../Api.js';

const inputStyle = {
  width: 250
};

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '', parent_name: '', dob: moment(), phone: '',
      email: '', social: '', course: '', note: ''
    };
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const formData = this.state;
    formData.dob = formData.dob.format('MM/DD/YYYY');

    const options = {
      url: `${API_URL}/form`,
      method: 'POST',
      json: true,
      body: formData
    };
    request(options, (err, res, body) => {
      if (err) {
        console.log(err);
      } else {
        console.log(body);
      }
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={() => { this.handleSubmit(); }}>
          <Form.Field>
            <label>Name</label>
            <Form.Input
              style={inputStyle} name="name" required
              onChange={(e, { name, value }) => { this.handleChange(e, { name, value }); }}
            />
          </Form.Field>
          <Form.Field>
            <label>Parent name</label>
            <Form.Input
              style={inputStyle} name="parent_name" required
              onChange={(e, { name, value }) => { this.handleChange(e, { name, value }); }}
            />
          </Form.Field>
          <Form.Field>
            <label>Date of birth</label>
            <DatePicker
              selected={this.state.dob}
              onChange={(d) => { this.setState({ dob: d }); }}
            />
          </Form.Field>
          <Form.Field>
            <label>Phone number</label>
            <Form.Input
              style={inputStyle} name="phone" required
              onChange={(e, { name, value }) => { this.handleChange(e, { name, value }); }}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Form.Input
              style={inputStyle} name="email" required
              onChange={(e, { name, value }) => { this.handleChange(e, { name, value }); }}
            />
          </Form.Field>
          <Form.Field>
            <label>Facebook link or Skype ID</label>
            <Form.Input
              style={inputStyle} name="social" required
              onChange={(e, { name, value }) => { this.handleChange(e, { name, value }); }}
            />
          </Form.Field>
          <Form.Field>
            <label>Course</label>
            <Form.Input
              style={inputStyle} name="course" required
              onChange={(e, { name, value }) => { this.handleChange(e, { name, value }); }}
            />
          </Form.Field>
          <Form.Field>
            <label>Note</label>
            <Form.Input
              style={inputStyle} name="note"
              onChange={(e, { name, value }) => { this.handleChange(e, { name, value }); }}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Register;

