import React from 'react';
import { Link } from 'react-router';
import { version } from '../../package.json';
import { Button } from 'semantic-ui-react';

const appStyle = {
  position: 'relative',
  top: 20
};

const App = ({ children }) => (
  <div className="ui one column stackable center aligned page grid app-layout" style={appStyle}>
    <div className="column sixteen wide ">
      <header>
        <div className="app-name"><Link to="/">Revo {version}</Link></div>
        <div className="nav-bar">
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
        </div>
      </header>
      <section className="container ui grid centered">
        <br />
        {children}
      </section>
      <br />
      <div className="footer">
        <p>&copy; 2017 RevoTeam </p>
      </div>
    </div>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;

