import React, {Component, PropTypes} from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import fetch from 'isomorphic-fetch';

/* ContactsApp class definition */
class ContactsApp extends Component {

  /* Constuctor */
  constructor () {
    super (...arguments);
    this.state = {
      contacts: this.props.initialData || [],
      filterText: ''
    }
  }

  /* Ensures state is set initially */
  componentDidMount () {
    if (!this.props.initialData) {
      ContactsApp.requestInitialData ().then (contacts => {
        this.setState ({ contacts });
      });
    }
  }

  /* On user input, change the state */
  handleUserInput (searchTerm) {
    this.setState ({ filterText : searchTerm });
  }

  /* Render */
  render () {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput.bind(this)} />
        <ContactList
          contacts={this.state.contacts}
          filterText={this.state.filterText} />
      </div>
    )
  }
};

/* ContactsApp PropTypes */
ContactsApp.propTypes = {
  initalData : PropTypes.any
}

/* Static data-request function */
ContactsApp.requestInitialData = () => {
  return fetch ('http://localhost:3000/contacts.json')
          .then((response) => response.json());
}

/* Export the component */
export default ContactsApp;
