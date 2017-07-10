import React from 'react';
import request from 'request';
import { API_URL } from '../Api.js';
import { browserHistory } from 'react-router';

class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    const formData = {
      token: sessionStorage.token
    };
    const options = {
      url: `${API_URL}/session`,
      method: 'DELETE',
      json: true,
      body: formData
    };
    request(options, (err, res, body) => {
      if (err) {
        console.log(err);
      }
    });
    sessionStorage.clear();
    browserHistory.push('/');
    location.reload();
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Logout;

