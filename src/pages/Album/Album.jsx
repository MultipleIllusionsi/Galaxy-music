import React, { Component } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";

import "./Album.scss";
import Track from "../../components/track/Track";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

class Album extends Component {
  state = {
    album: null,
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        `${cors}${api}album/${this.props.match.params.id}`
      );
      this.setState({ album: res.data });
      console.log("res", res.data);
    } catch (err) {
      console.log("error:", err);
    }
  }

  render() {
    const { album } = this.state;
    return (
      <main className="album-page">
        {album === null ? (
          <Spinner />
        ) : (
          <>
            <section className="album-wrapper">
              <div
                className="blur-bc"
                style={{
                  backgroundImage: `url(${album.cover_small}`,
                }}
              ></div>
              <div className="album-content">
                <div className="album-cover">
                  <img src={album.cover_big} alt="album-img" />
                </div>
                <div className="album-info">
                  <h2>{album.title}</h2>
                  <p>
                    <span>Created by</span> {album.artist.name}
                  </p>
                  <p>{album.nb_tracks} Songs</p>
                  <p>
                    <span>Runtime: </span>
                    {Math.floor(album.duration / 60)} min
                  </p>
                  <p>
                    <span>Released:</span> {album.release_date}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <ul className="tracks-list">
                {album.tracks.data.map(track => (
                  <Track
                    key={`${track.id}`}
                    cover={album.cover_small}
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

export default Album;
