import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import RegForm from './components/RegForm';
import Login from './components/Login';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={Login} />
      <Route path="/register" component={RegForm} />
    </Route>
  </Router>), document.getElementById('content')
);

