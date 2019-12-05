import React from "react";

import Player from "../Player/Player";

const TracksList = ({ data, playingTrack, setTrack }) => (
  <ul className="tracks-list">
    {data.map(track => (
      <Player
        isPlaying={track.id === playingTrack && true}
        handler={setTrack}
        key={track.id}
        cover={track.album.cover_medium}
        track={track}
      />
    ))}
  </ul>
);

export default TracksList;
