import React from 'react';
// Import youtube api axios config.
import youTube from '../apis/youtube';

/* import custom components */
import SearchBar from './SearchBar';

class App extends React.Component {

// Form submit handler method.
onSearchTermSubmit = (searchTerm) => {

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
