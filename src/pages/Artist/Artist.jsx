import React, { Component } from "react";
import axios from "axios";

import Spinner from "../../components/spinner/Spinner";
import Track from "../../components/track/Track";

import "./Artist.scss";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

class Artist extends Component {
  state = {
    artistInfo: null,
    artistTrack: null,
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        `${cors}${api}artist/${this.props.match.params.artist_id}`
      );
      this.setState({ artistInfo: res.data });
      console.log("res", res.data);
    } catch (err) {
      console.log("error:", err);
    }

    try {
      const res = await axios.get(
        `${cors}${api}artist/${this.props.match.params.artist_id}/top?limit=25`
      );
      this.setState({ artistTrack: res.data });
      console.log("res artist", res.data);
    } catch (err) {
      console.log("error:", err);
    }
  }

  render() {
    const { artistInfo, artistTrack } = this.state;
    return (
      <main className="artist-page">
        {artistInfo === null ? (
          <Spinner />
        ) : (
          <>
            <div className="secondary-bc"></div>
            <section className="quick-intro">
              <div className="quick-intro__icon">
                <span></span>
              </div>
              <h2 className="heading-primary">{artistInfo.name}</h2>
              <p className="quick-intro__genre"></p>
            </section>
            <section className="full-intro">
              <div className="full-intro__img">
                <img src={artistInfo.picture_big} alt="img" />
              </div>
              <div className="full-intro__bio">
                <h3>{artistInfo.name}</h3>
                <p>Number of albums: {artistInfo.nb_album}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Est, quis magni? At, magni a! Adipisci
                  assumenda quidem suscipit pariatur voluptate,
                  maiores doloribus architecto placeat corporis at
                  omnis aut molestias nemo.
                </p>
              </div>
            </section>

            {artistTrack === null ? (
              <Spinner />
            ) : (
              <ul className="tracks-list">
                {artistTrack.data.map(track => (
                  <Track
                    key={`${track.id}`}
                    cover={track.album.cover_small}
                    track={track}
                  />
                ))}
              </ul>
            )}
          </>
        )}
      </main>
    );
  }
}

export default Artist;
