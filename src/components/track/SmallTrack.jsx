import React, { Component } from "react";
import { Link } from "react-router-dom";
// d-none d-md-block
class SmallTrack extends Component {
  render() {
    return (
      <li className="list-group-item d-flex row align-items-center py-3">
        <div className="col-8 col-md-4">
          <i className="fas fa-headphones-alt mr-2" />
          {this.props.track.artist.name} - {this.props.track.title}
        </div>
        <div className="col-4 col-md-2 text-center">
          <i className="fas fa-star mr-2" />
          Rating: {Math.round(this.props.track.rank / 10000)}
        </div>

        <div className="col-12 col-md-4 mt-2 text-center">
          <audio controls>
            <source src={this.props.track.preview} type="audio/mpeg" />
          </audio>
        </div>
        <div className="col-12 offset-md-1 col-md-1 text-center">
          <Link
            to={`/track/${this.props.track.id}`}
            className="btn btn-outline-dark btn-sm"
          >
            more...
          </Link>
        </div>
      </li>
    );
  }
}

export default SmallTrack;
