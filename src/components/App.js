import React from 'react';
import { Link } from 'react-router';
import { version } from '../../package.json';
import { Button } from 'semantic-ui-react';

const appStyle = {
  position: 'relative',
  top: 100
};

const App = ({ children }) => (
  <div className="ui one column stackable center aligned page grid" style={appStyle}>
    <div className="column twelve wide">
      <header>
        <h1>RevoEnglish {version}</h1>
        <Link to="/login"><Button>Admin Login</Button></Link>
        &nbsp;
        <Link to="/register"><Button>Registration form</Button></Link>
      </header>
      <section>
        {children}
      </section>
    </div>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;

