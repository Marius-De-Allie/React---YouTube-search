import React from 'react';
// Import youtube api axios config.
import youTube from '../apis/youtube';

/* import custom components */
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
  // Component State Object.
  state = {
    videos: [],
    selectedVideo: null
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
  console.log(response.data.items);
  // Update component state with return search results.
  this.setState(() => ({
    videos: [...response.data.items]
  }));
};




  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
