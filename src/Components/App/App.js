import React from 'react';
import './App.css';
import { SearchBar } from '/Users/Karim/jammming/src/Components/SearchBar/SearchBar';
import { SearchResults } from '/Users/Karim/jammming/src/Components/SearchResults/SearchResults';
import { Playlist } from '/Users/Karim/jammming/src/Components/Playlist/Playlist';





export class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      searchResults: [{
        id: '1',
        name: 'José',
        artist: 'José le Chanteur',
        album: 'José dernier Album'
      },
      {id: '1',
      name: 'José',
      artist: 'José le Chanteur',
      album: 'José dernier Album'
    }]
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    );
}
}

export default App;
