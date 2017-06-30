import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const inputStyle = {
  width: 200
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '', password: ''
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
        <Form>
          <Form.Field>
            <Form.Input
              style={inputStyle} name="username" placeholder="Username"
              onChange={(e, { name, value }) => { this.handleChange(e, { name, value }); }}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              style={inputStyle} name="password" placeholder="Password" type="password"
              onChange={(e, { name, value }) => { this.handleChange(e, { name, value }); }}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="Remember me" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Login;

