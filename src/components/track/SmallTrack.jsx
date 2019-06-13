import React, { Component } from "react";
import { Link } from "react-router-dom";
// d-none d-md-block
class SmallTrack extends Component {
  render() {
    return (
      <li className="list-group-item d-flex row align-items-center ">
        <div className="lead col-lg-4  mt-3">
          {this.props.track.artist.name} - {this.props.track.title}
        </div>
        <div className="offset-lg-1 col-lg-1  mt-3 text-center">
          Rating: {Math.round(this.props.track.rank / 10000)}
        </div>
        <div className="col-lg-1 mt-3 text-center">
          <i className="fas fa-forward" />
          {this.props.track.duration} sec
        </div>
        <div className="mt-2 col-lg-3 text-center">
          <audio controls>
            <source src={this.props.track.preview} type="audio/mpeg" />
          </audio>
        </div>
        <div className="col-lg-2 text-right">
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
