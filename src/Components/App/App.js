import React from 'react';
import './App.css';
import { SearchBar } from '/Users/Karim/jammming/src/Components/SearchBar/SearchBar';
import { SearchResults } from '/Users/Karim/jammming/src/Components/SearchResults/SearchResults';
import { Playlist } from '/Users/Karim/jammming/src/Components/Playlist/Playlist';


export class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      searchResults: 
        [
          {name: 'José', artist: 'José le Chanteur', album: 'José dernier Album', id: 1},
          {name: 'Raoul', artist: 'Raoul Iglesias', album: 'Raoul dernier Album', id: 2},
          {name: 'Mongolito', artist: 'Mongolito', album: 'Mongolito Album', id: 3}
        ],
      playlistName: 'My Playlist',
      playlistTracks: 
        [
          {name: 'Playlist Uno', artist: 'Mongolito et Raoul', album: 'Album1', id: 4},
          {name: 'Playlist Duo', artist: 'Mongolito et José', album: 'Album2', id: 5}
        ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    tracks.push(track);
    this.setState( {playListTracks : tracks});
  }

  removeTrack(track) {
  let tracks = this.state.playlistTracks;    
  tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
  this.setState({ playlistTracks : tracks });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
}
}

export default App;
