import React from "react";

import Song from "./Song";
import Play from "./Play";
import Pause from "./Pause";
import Bar from "./Bar";

import useAudioPlayer from "./useAudioPlayer";

import "./style.scss";

const Player = ({
  cover,
  track: { artist, title, rank, preview, id },
  idHandler,
  currentTrack,
}) => {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer(id);

  const sendId = e => {
    e.stopPropagation();
    idHandler(e.target.id);
  };
  console.log("currentTrack from parent", currentTrack);
  return (
    <div className="player">
      <audio id={id}>
        <source src={preview} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="controls">
        <div
          style={{ backgroundImage: `url(${cover})` }}
          className="controls-button"
          onClick={sendId}
          id={id}
        >
          {playing ? (
            <Pause handleClick={() => setPlaying(false)} />
          ) : (
            <Play handleClick={() => setPlaying(true)} />
          )}
        </div>
        <Song songName={title} songArtist={artist.name} />
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={time => setClickedTime(time)}
        />
      </div>
    </div>
  );
};

export default Player;
