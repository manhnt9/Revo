import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import Forms from './components/Forms';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forms" component={Forms} />
    </Route>
  </Router>), document.getElementById('content')
);

