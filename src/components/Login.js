import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const inputStyle = {
  width: 200
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <input placeholder="Username" style={inputStyle} />
          </Form.Field>
          <Form.Field>
            <input type="password" placeholder="Password" style={inputStyle} />
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

