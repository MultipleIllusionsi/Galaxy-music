import React, { useEffect } from "react";

import { ReactComponent as PlayIcon } from "../../assets/play.svg";
import { ReactComponent as PauseIcon } from "../../assets/pause.svg";

import "./Player.scss";

const Player = props => {
  useEffect(() => {
    const { track, isPlaying } = props;
    const audio = document.getElementById(track.id);
    isPlaying ? audio.play() : audio.pause();
  }, [props]);

  const {
    cover,
    track: { artist, title, rank, preview, id },
    isPlaying,
  } = props;

  return (
    <div className="player">
      <audio id={id}>
        <source src={preview} />
        Your browser does not support the <code>audio</code>
        element.
      </audio>
      <div className="controls">
        <div
          style={{ backgroundImage: `url(${cover})` }}
          className="controls-button"
          id={id}
        >
          {isPlaying ? (
            <button
              id={0}
              className="player__button"
              onClick={e => props.handler(+e.currentTarget.id)}
            >
              <PauseIcon className="icon-pause" />
            </button>
          ) : (
            <button
              id={id}
              className="player__button"
              onClick={e => props.handler(+e.currentTarget.id)}
            >
              <PlayIcon className="icon-play" />
            </button>
          )}
        </div>
        <div className="data">
          <p className="title">
            {artist.name} - {title}
          </p>
          <p className="rating">Rating: {Math.round(rank / 10000)}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
