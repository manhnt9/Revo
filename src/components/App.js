import React from 'react';
import { Link } from 'react-router';
import { version } from '../../package.json';
import { Button } from 'semantic-ui-react';

const appStyle = {
  position: 'relative',
  top: 150
};

const App = ({ children }) => (
  <div className="ui one column stackable center aligned page grid" style={appStyle}>
    <div className="column twelve wide">
      <header>
        <Link to="/"><h1>Revo {version}</h1></Link>
        <br />
        {!sessionStorage.loggedIn &&
          <Link to="/login"><Button color="purple">Admin Login</Button></Link>}
        &nbsp;
        <Link to="/register"><Button color="purple">Register</Button></Link>
        {sessionStorage.loggedIn &&
          <Link to="/forms"><Button color="purple">Forms</Button></Link>}
        {sessionStorage.loggedIn &&
          <Link to="/fee"><Button color="purple">Fee</Button></Link>}
        {sessionStorage.loggedIn &&
          <Link to="/attendance"><Button color="purple">Attendance</Button></Link>}
        {sessionStorage.loggedIn &&
          <Link to="/assignments"><Button color="purple">Assignments</Button></Link>}
        {sessionStorage.loggedIn &&
          <Link to="/logout"><Button color="purple">Logout</Button></Link>}
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

