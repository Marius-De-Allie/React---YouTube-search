import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };
  inputHandler(evt) {
    const searchValue = evt.target.value;
    return searchValue;
  }
  render () {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search-input">Video Search</label>
            <input id="search-input" type="text"/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
