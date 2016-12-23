import React, {Component, PropTypes} from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

/* ContactsApp class definition */
class ContactsApp extends Component {

  /* Constuctor */
  constructor () {
    super (...arguments);
    this.state = {
      contacts: this.props.initalData || [],
      filterText: ''
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

/* Export the component */
export default ContactsApp; 
