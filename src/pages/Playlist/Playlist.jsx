import React, { Component } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";

import "./Playlist.scss";
import Track from "../../components/track/Track";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

class Playlist extends Component {
  state = {
    playlist: null,
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        `${cors}${api}playlist/${this.props.match.params.id}`
      );
      this.setState({ playlist: res.data });
      console.log("res", res.data);
    } catch (err) {
      console.log("error:", err);
    }
  }

  render() {
    const { playlist } = this.state;
    console.log("playlist", playlist);
    return (
      <main className="album-page">
        {playlist === null ? (
          <Spinner />
        ) : (
          <>
            <section className="album-wrapper">
              <div
                className="blur-bc"
                style={{
                  backgroundImage: `url(${playlist.picture_small}`,
                }}
              ></div>
              <div className="album-content">
                <div className="album-cover">
                  <img src={playlist.picture_big} alt="album-img" />
                </div>
                <div className="album-info">
                  <h2>{playlist.title}</h2>
                  <p>
                    <span>Created by</span> {playlist.title}
                  </p>
                  <p>{playlist.nb_tracks} Songs</p>
                  <p>
                    <span>Runtime: </span>
                    {Math.floor(playlist.duration / 60)} min
                  </p>
                  <p>
                    <span>Released:</span> {playlist.creation_date}
                  </p>
                  <p>{playlist.description}</p>
                </div>
              </div>
            </section>

            <section className="tracks-wrapper">
              <ul className="tracks-list">
                {playlist.tracks.data.map(track => (
                  <Track
                    key={`${track.id}`}
                    cover={playlist.picture_small}
                    track={track}
                  />
                ))}
              </ul>
            </section>
          </>
        )}
      </main>
    );
  }
}

export default Playlist;
