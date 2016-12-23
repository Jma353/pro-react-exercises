import React, {Component, PropTypes} from 'react';

/* SearchBar class definition */
class SearchBar extends Component {

  /* Handle change */
  handleChange (event) {
    /* onUserInput is a function we define at the top level */
    this.props.onUserInput (event.target.value);
  }

  /* Render */
  render () {
    return <input type="search"
                  placeholder="search"
                  value={this.props.filterText}
                  onChange={this.handleChange.bind(this)} />
  }
}

/* SearchBar PropTypes */
SearchBar.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired
}

/* Export the component */
export default SearchBar;
