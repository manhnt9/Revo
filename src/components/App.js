import React from 'react';
import { Link } from 'react-router';
import { version } from '../../package.json';
import { Button } from 'semantic-ui-react';

const appStyle = {
  position: 'relative',
  top: 150
};

localStorage.loggedIn = true;

const App = ({ children }) => (
  <div className="ui one column stackable center aligned page grid" style={appStyle}>
    <div className="column twelve wide">
      <header>
        <Link to="/"><h1>RevoEnglish {version}</h1></Link>
        <br />
        <Link to="/login"><Button color="purple">Admin Login</Button></Link>
        &nbsp;
        <Link to="/register"><Button color="purple">Register</Button></Link>
        {localStorage.loggedIn &&
          <Link to="/forms"><Button color="purple">Forms</Button></Link>}
        {localStorage.loggedIn &&
          <Link to="/fee"><Button color="purple">Fee</Button></Link>}
        {localStorage.loggedIn &&
          <Link to="/attendance"><Button color="purple">Attendance</Button></Link>}
        {localStorage.loggedIn &&
          <Link to="/assignments"><Button color="purple">Assignments</Button></Link>}
      </header>
      <section>
        <br />
        {children}
      </section>
      <br />
      <p>&copy; 2017 RevoTeam </p>
    </div>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;

