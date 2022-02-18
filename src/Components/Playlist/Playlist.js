import React from 'react';
import './Playlist.css';
import { TrackList } from '/Users/Karim/jammming/src/Components/TrackList/TrackList';

export class Playlist extends React.Component{

    render() {
      return(
        <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <TrackList name={this.props.playlistName} tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
      )
    }
    
}