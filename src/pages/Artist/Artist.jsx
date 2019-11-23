import React, { Component } from "react";
import axios from "axios";

import Spinner from "../../components/spinner/Spinner";
import Player from "../../components/track/Player";

import "./Artist.scss";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

class Artist extends Component {
  state = {
    artistInfo: null,
    artistTrack: null,
    playingTrack: 0,
  };

  async componentDidMount() {
    try {
      let [artistInfo, artistTrack] = await Promise.all([
        axios.get(
          `${cors}${api}artist/${this.props.match.params.artist_id}`
        ),
        axios.get(
          `${cors}${api}artist/${this.props.match.params.artist_id}/top?limit=25`
        ),
      ]);
      this.setState({
        artistInfo: artistInfo.data,
        artistTrack: artistTrack.data,
      });
    } catch (err) {
      console.log("err", err);
    }
  }

  playingTrackHandler = id => {
    this.setState({ playingTrack: id });
  };

  render() {
    const { artistInfo, artistTrack, playingTrack } = this.state;
    console.log("render from ArtistPage");
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

            {artistTrack && (
              <ul className="tracks-list">
                {artistTrack.data.map(track => (
                  <Player
                    isPlaying={
                      track.id === playingTrack ? true : false
                    }
                    handler={this.playingTrackHandler}
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
