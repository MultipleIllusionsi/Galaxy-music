import React from "react";

import "./Track.scss";

const Track = ({
  cover,
  track: { artist, title, rank, preview },
}) => (
  <li className="track-wrapper">
    <div className="track-cover">
      <img src={cover} alt="" />
    </div>

    <div>
      {artist.name} - {title}
    </div>

    <div className="audio-wrapper">
      <audio controls>
        <source src={preview} type="audio/mpeg" />
      </audio>
    </div>

    <div>Rating: {Math.round(rank / 10000)}</div>
  </li>
);

export default Track;
