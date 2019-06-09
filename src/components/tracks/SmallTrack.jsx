import React, { Component } from "react";
import { Link } from "react-router-dom";

class SmallTrack extends Component {
  render() {
    return (
      <li className="list-group-item d-flex align-items-center">
        <span className="mr-auto lead">{this.props.track.title}</span>
        <span className="mr-5 d-none d-md-block">
          Rating: {Math.round(this.props.track.rank / 10000)}
        </span>
        <strong className="mr-2 d-none d-md-block">
          <i className="fas fa-forward" />
          {this.props.track.duration} sec
        </strong>
        <span className="mt-2">
          <audio controls>
            <source src={this.props.track.preview} type="audio/mpeg" />
          </audio>
        </span>
        <Link
          to={`/track/${this.props.track.id}`}
          className="ml-2 btn btn-outline-dark btn-sm"
        >
          more...
        </Link>
      </li>
    );
  }
}

export default SmallTrack;
