import React from 'react';
import './Track.css';

export class Track extends React.Component{

    constructor(props){
      super(props);
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
        
    }

    renderAction() {
        <div>
            <button isRemoval="true" className="Track-action">-</button>
            <button isRemoval="false" className="Track-action">+</button>
        </div>
    }

    addTrack() {
      this.props.onAdd(this.props.track);
    }

    removeTrack() {
      this.props.removeTrack(this.props.track);
    }

    render() {
      return(
        <div className="Track">
        <div className="Track-information">
            <h3>{this.props.track.name}</h3>
            <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <button className="Track-action" onClick={this.addTrack}>+</button>
        <button className="Track-action" onClick={this.removeTrack}>-</button>
        </div>
      )
    }
    
}