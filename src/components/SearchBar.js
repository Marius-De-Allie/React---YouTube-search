import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchTerm: 'Food'
  };
  inputHandler = (evt) => {
    const searchValue = evt.target.value;
    this.setState(() => ({searchTerm: searchValue}));
  };
  render () {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
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
