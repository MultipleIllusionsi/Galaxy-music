import React from "react";
import "./SearchTrack.css";
import { Link } from "react-router-dom";

//ЕДИНИЧНЫЙ БЛОК ТРЕКА

const SearchTrack = props => {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 border-track">
        <div className="card-body shadow-track">
          <h5>{track.artist.name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play" />
              Track: {track.title}
            </strong>
            <br />
            <strong>
              <i className="fas fa-compact-disc" />
              Album: {track.album.title}
            </strong>
            <br />
            <strong>
              <i className="fas fa-forward" />
              Duration: {track.duration} sec
            </strong>
          </p>
          <Link to={`/track/${track.id}`} className="btn btn-dark btn-block">
            <i className="fas fa-chevron-right" /> See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchTrack;
