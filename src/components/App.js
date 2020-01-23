import React from 'react';
// Import youtube api axios config.
import youTube from '../apis/youtube';

/* import custom components */
import SearchBar from './SearchBar';

class App extends React.Component {
  // Component State Object.
  state = {
    videos: []
  };
// Form submit handler method.
onSearchTermSubmit = async (searchTerm) => {
  const response = await youTube.get('/search', {
    params: {
      q: searchTerm,
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: 'AIzaSyDhfPFv85-koi4fVvDl89KmoPYHbH4i0UY'
    }
  });
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
