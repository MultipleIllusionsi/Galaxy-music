import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LazyLoad from "react-lazyload";

import CtaButton from "../../components/CtaButton/CtaButton";
import GroupList from "../../components/GroupList/GroupList";
import LineList from "../../components/LineList/LineList";
import Slider from "../../components/Slider/Slider";

import "./Homepage.scss";
import Spinner from "../../components/spinner/Spinner";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

class Homepage extends Component {
  state = {
    topArtists: null,
    topPlaylists: null,
    newAlbums: null,
  };

  async componentDidMount() {
    try {
      let [artists, playlists, albums] = await Promise.all([
        axios.get(`${cors}${api}chart/0/artists&limit=3`),
        axios.get(`${cors}${api}chart/0/playlists?limit=8`),
        axios.get(`${cors}${api}editorial/0/releases?limit=6`),
      ]);
      this.setState({
        topArtists: artists.data.data,
        topPlaylists: playlists.data.data,
        newAlbums: albums.data.data,
      });
    } catch (err) {
      console.log("err", err);
    }
  }

  render() {
    const { topArtists, topPlaylists, newAlbums } = this.state;
    console.log("render from HOMEPAGE");
    return (
      <main className="homepage">
        <section className="homepage__section-hero">
          <div className="homepage__section-hero__content">
            <h1>Meticulously curated music for licensing</h1>
            <p>
              Browse our roster of rare and emerging independent
              artists, bands and record labels
            </p>
            <CtaButton>
              <Link to="/browse">Browse Music</Link>
            </CtaButton>
          </div>
        </section>

        <section className="homepage__section-artists">
          <h3 className="text--big-space pt-md">Featured Artist</h3>
          {topArtists && (
            <Slider initialObj={1} total={3} data={topArtists} />
          )}
        </section>

        <section className="homepage__section-playlists">
          <h3 className="text--big-space pt-md">Playlists</h3>
          <LazyLoad>
            {topPlaylists && (
              <GroupList to="playlist" data={topPlaylists} />
            )}
          </LazyLoad>
        </section>

        <section className="homepage__section-albums">
          <h3 className="text--big-space pt-md">New Albums</h3>
          <LazyLoad>
            {newAlbums && <LineList data={newAlbums} />}
          </LazyLoad>
        </section>
      </main>
    );
  }
}

export default Homepage;
