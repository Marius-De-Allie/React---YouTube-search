import React from 'react';

/* import custom components */
import SearchBar from './SearchBar';

class App extends React.Component {

// Form submit handler method.
onSearchTermSubmit = (searchTerm) => {
  console.log(searchTerm);

};


  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
      </div>
    );
  }
}

export default App;
