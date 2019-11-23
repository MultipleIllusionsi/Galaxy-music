import React from "react";

import "./Player.scss";

class Player extends React.Component {
  sendId = e => {
    this.props.handler(+e.currentTarget.id);
  };

  componentDidUpdate(_prevProps, _nextProps) {
    const audio = document.getElementById(this.props.track.id);
    this.props.isPlaying ? audio.play() : audio.pause();
  }

  render() {
    const {
      cover,
      track: { artist, title, rank, preview, id },
      isPlaying,
    } = this.props;

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
              // pause
              <button
                id={0}
                className="player__button"
                onClick={this.sendId}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="#000"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                </svg>
              </button>
            ) : (
              // play
              <button
                id={id}
                className="player__button"
                onClick={this.sendId}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="#000"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </button>
            )}
          </div>
          <div className="data">
            <p className="title">
              {artist.name} - {title}
            </p>
            <p className="rating">
              Rating: {Math.round(rank / 10000)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
