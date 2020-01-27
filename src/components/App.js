import React from 'react';
// Import youtube api axios config.
import youTube from '../apis/youtube';

/* import custom components */
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  // Component State Object.
  state = {
    videos: [],
    selectedVideo: null
  };
// Perform a default search when the component 1st loads.
  componentDidMount() {
    this.onSearchTermSubmit('nature');
  }
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
    videos: [...response.data.items],
    selectedVideo: response.data.items[0]
  }));
};

onVideoSelect = (video) => {
  this.setState(() => ({selectedVideo: video}))

};

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
