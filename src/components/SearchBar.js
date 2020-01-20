import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchTerm: 'Food'
  };
  inputHandler = (evt) => {
    const searchValue = evt.target.value;
    this.setState(() => ({searchTerm: searchValue}));
  };
// Form submit handler method.
  onFormSubmit = (evt) => {
    evt.preventDefault()

  };
  render () {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search-input">Video Search</label>
            <input id="search-input" type="text" onChange={this.inputHandler} value={this.state.searchTerm} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
