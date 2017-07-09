import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const inputStyle = {
  width: 250
};

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
      name: '', parent_name: '', phone: '', email: '', social_id: '', course: '', note: ''
    };
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  handleSubmit() {

  }

  render() {
    return (
      <div>
        <Form onSubmit={() => { this.handleSubmit(); }}>
          <Form.Field>
            <label>Name</label>
            <Form.Input
              style={inputStyle} name="name"
              onChange={(e, { name, value }) => { this.handleChange(e, { name, value }); }}
            />
          </Form.Field>
          <Form.Field>
            <label>Parent name</label>
            <Form.Input
              style={inputStyle} name="parent_name"
              onChange={(e, { name, value }) => { this.handleChange(e, { name, value }); }}
            />
          </Form.Field>
          <Form.Field>
            <label>Date of birth</label>
            <DatePicker
              selected={this.state.date}
              onChange={(d) => { this.setState({ date: d }); }}
            />
          </Form.Field>
          <Form.Field>
            <label>Phone number</label>
            <Form.Input
              style={inputStyle} name="phone"
              onChange={(e, { name, value }) => { this.handleChange(e, { name, value }); }}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Form.Input
              style={inputStyle} name="email"
              onChange={(e, { name, value }) => { this.handleChange(e, { name, value }); }}
            />
          </Form.Field>
          <Form.Field>
            <label>Facebook link or Skype ID</label>
            <Form.Input
              style={inputStyle} name="social_id"
              onChange={(e, { name, value }) => { this.handleChange(e, { name, value }); }}
            />
          </Form.Field>
          <Form.Field>
            <label>Course</label>
            <Form.Input
              style={inputStyle} name="course"
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

