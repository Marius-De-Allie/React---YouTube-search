import React from 'react';

/* import custom components */
import SearchBar from './SearchBar';

class App extends React.Component {

// Form submit handler method.
onFormSubmit = (term) => {
  evt.preventDefault();

};


  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
