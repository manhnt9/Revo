import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import request from 'request';
import { API_URL } from '../Api.js';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      approved: true
    };
  }

  componentWillMount() {
    const options = {
      url: `${API_URL}/student/${this.props.id}?token=${sessionStorage.token}`,
      method: 'GET',
      json: true
    };

    request(options, (err, res, body) => {
      if (err) {
        console.log(err);
      } else if (body) {
        const state = body;
        this.setState(state);
      } else {
        options.url = `${API_URL}/form/${this.props.id}?token=${sessionStorage.token}`;
        request(options, (e, r, b) => {
          if (e) {
            console.log(e);
          } else {
            const state = b;
            this.setState(state);
          }
        });
      }
    });
  }

  handleClick() {
    const options = {
      url: `${API_URL}/student/?id=${this.props.id}&token=${sessionStorage.token}`,
      method: 'POST',
      json: true
    };

    request(options, (err, res, body) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({ approved: true });
      }
    });
  }

  render() {
    return (
      <div className="ui one column stackable center aligned page grid">
        <div className="column twelve wide">
          <Button onClick={() => { this.props.onClose(this.state.approved); }}>Back</Button>
          <br />
          <br />
          <Card>
            <Card.Content>
              <Card.Header>
                {this.state.name}
              </Card.Header>
              <Card.Meta>
                <span className="date">
                  Birthday: {this.state.dob}
                </span>
              </Card.Meta>
              <Card.Description>
                <strong>Parent name: {this.state.parent_name}</strong>
                <p>Phone number: {this.state.phone}</p>
                <p>Email: {this.state.email}</p>
                <p>Facebook/SkypeID: {this.state.social}</p>
                <p>Note: {this.state.note}</p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                Course: {this.state.course}
              </a>
            </Card.Content>
          </Card>

          {!this.state.approved &&
            <Button color="green" onClick={() => { this.handleClick(); }}>Approve</Button>}
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  id: React.PropTypes.number,
  onClose: React.PropTypes.func
};

export default Form;

