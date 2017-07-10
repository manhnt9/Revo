import React from 'react';
import { Card } from 'semantic-ui-react';
import request from 'request';
import { API_URL } from '../Api.js';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    const options = {
      url: `${API_URL}/form/${this.props.id}?token=${sessionStorage.token}`,
      method: 'GET',
      json: true
    };

    request(options, (err, res, body) => {
      if (err) {
        console.log(err);
      } else {
        this.setState(body);
      }
    });
  }

  render() {
    return (
      <div className="ui one column stackable center aligned page grid">
        <div className="column twelve wide">
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
                {this.state.course}
              </a>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  id: React.PropTypes.number
};

export default Form;

