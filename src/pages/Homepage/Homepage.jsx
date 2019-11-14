import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import CtaButton from "../../components/CtaButton/CtaButton";
import PlayButton from "../../components/PlayButton/PlayButton";
import Spinner from "../../components/spinner/Spinner";

import "./Homepage.scss";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

class Homepage extends Component {
  state = {
    topArtists: null,
    topPlaylists: null,
    latestTrack: null,
    loading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const res = await axios.get(
        `${cors}${api}chart/0/artists?limit=3`
      );
      console.log("res_artist", res.data.data);
      this.setState({
        topArtists: res.data.data,
        loading: false,
      });
    } catch (err) {
      this.setState({ loading: false });
      throw new Error(`error ${err}`);
    }

    try {
      this.setState({ loading: true });
      const res = await axios.get(
        `${cors}${api}chart/0/playlists?limit=8`
      );
      console.log("res_playlist", res.data.data);
      this.setState({
        topPlaylists: res.data.data,
        loading: false,
      });
    } catch (err) {
      this.setState({ loading: false });
      throw new Error(`error ${err}`);
    }

    try {
      this.setState({ loading: true });
      const res = await axios.get(
        `${cors}${api}chart/0/tracks?limit=6`
      );
      console.log("res_latestTracks", res.data.data);
      this.setState({
        latestTrack: res.data.data,
        loading: false,
      });
    } catch (err) {
      this.setState({ loading: false });
      throw new Error(`error ${err}`);
    }
  }

  render() {
    const {
      topArtists,
      topPlaylists,
      latestTrack,
      loading,
    } = this.state;

    const bcImg = topArtists && `url(${topArtists[2].picture_xl})`;

    return (
      <main className="homepage">
        <section className="homepage__section1">
          <div className="homepage__section1-content">
            <h1>Meticulously curated music for licensing</h1>
            <p>
              Browse our roster of rare and emerging independent
              artists, bands and record labels
            </p>
            <CtaButton>
              <Link to="/charts">Browse Music</Link>
            </CtaButton>
          </div>
        </section>

        <section
          className="homepage__section2"
          style={
            ({ backgroundColor: loading ? "black" : "none" },
            { backgroundImage: loading ? "none" : bcImg })
          }
        >
          <div className="homepage__section2-content">
            <h3 className="text--big-space pt-md">Featured Artist</h3>
            <span className="abs-center">
              <PlayButton to={`/genre`} />
              <h2 className="artist-name">
                {topArtists && topArtists[2].name}
              </h2>
              <div className="mt-md">
                <CtaButton>
                  <Link to="/charts">More from this artist</Link>
                </CtaButton>
              </div>
            </span>
          </div>
        </section>

        <section className="homepage__section3">
          <h3 className="text--big-space pt-md">Playlists</h3>
          {!topPlaylists ? (
            <Spinner />
          ) : (
            <ul className="playlist mt-md">
              {topPlaylists.map(playlist => (
                <li
                  className="playlist__item"
                  key={playlist.id}
                  style={{
                    backgroundImage: `url(${playlist.picture_medium}`,
                  }}
                >
                  <div className="gradient-overlay">
                    <span className="abs-center">
                      <PlayButton to={`/genre`} type="hover" />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="homepage__section4">
          <h3 className="text--big-space pt-md">Latest</h3>
          <div className="homepage__section4-content">
            {!latestTrack ? (
              <Spinner />
            ) : (
              <ul className="latest-list mt-md">
                {latestTrack.map(track => (
                  <Link key={track.id} to={`/genre`}>
                    <li className="latest-list__item">
                      <span>{track.title}</span>
                      <span className="latest-artist">
                        <span className="purple-text">by</span>{" "}
                        {track.artist.name}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
    );
  }
}

export default Homepage;
