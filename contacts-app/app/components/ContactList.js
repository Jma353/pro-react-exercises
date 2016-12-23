import React, {Component, PropTypes} from 'react';

/* ContactList class definition */
class ContactList extends Component {

  /* Render  */
  render () {
    /* Filter based on this.props.filterText */
    var filteredContacts = this.props.contacts.filter (
      (contact) => contact.name.indexOf (this.props.filterText) !== -1
    );

    /* Returns a list (<ul>) */
    return (
      <ul>
      { filteredContacts.map (
        (contact) => <li key={contact.email}>{contact.name} - {contact.email}</li>
      )}
      </ul>
    )
  }
}

/* ContactList PropTypes */
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string.isRequired
}

/* Export the component */
export default ContactList;
