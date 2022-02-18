import React from 'react';
import './SearchResults.css';
import { TrackList } from '/Users/Karim/jammming/src/Components/TrackList/TrackList';

export class SearchResults extends React.Component{

    render() {
      return(
        <div className="SearchResults">
        <h2>Results</h2>
        <TrackList />
        </div>
      )
    }
    
}