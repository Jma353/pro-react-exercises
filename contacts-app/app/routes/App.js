import React, {Component} from 'react';
import {Link} from 'react-router';

class App extends Component {
  /* Render */
  render () {
    return (
      <div>
        <nav>
          <Link to='/'>Home</Link>{' '}
          <Link to='/contacts'>Contacts</Link>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}; 

export default App;
