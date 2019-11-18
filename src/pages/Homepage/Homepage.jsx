import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import CtaButton from "../../components/CtaButton/CtaButton";
import GroupList from "../../components/GroupList/GroupList";
import LineList from "../../components/LineList/LineList";

import Slider from "../../components/Slider/Slider";

import "./Homepage.scss";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

class Homepage extends Component {
  state = {
    topArtists: null,
    topPlaylists: null,
    newAlbums: null,
    loading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const res = await axios.get(
        `${cors}${api}chart/0/artists&limit=3`
      );
      console.log("res_artist", res.data.data);
      this.setState({
        topArtists: res.data.data,
        loading: false,
      });
    } catch (err) {
      this.setState({ loading: false, error: true });
      console.log("error artist fetch:", err);
    }

    try {
      this.setState({ loading: true });
      const res = await axios.get(
        `${cors}${api}chart/0/playlists?limit=8`
      );
      // console.log("res_playlist", res.data.data);
      this.setState({
        topPlaylists: res.data.data,
        loading: false,
      });
    } catch (err) {
      this.setState({ loading: false, error: true });
      console.log("error playlist fetch:", err);
    }

    try {
      this.setState({ loading: true });
      const res = await axios.get(
        `${cors}${api}editorial/0/releases?limit=6`
      );
      // console.log("res_newAlbums", res.data.data);
      this.setState({
        newAlbums: res.data.data,
        loading: false,
      });
    } catch (err) {
      this.setState({ loading: false, error: true });
      console.log("error tracks fetch:", err);
    }
  }

  render() {
    const { topArtists, topPlaylists, newAlbums } = this.state;

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
          <Slider total={3} data={topArtists} />
        </section>

        <section className="homepage__section-playlists">
          <h3 className="text--big-space pt-md">Playlists</h3>
          <GroupList to="playlist" data={topPlaylists} />
        </section>

        <section className="homepage__section-albums">
          <h3 className="text--big-space pt-md">New Albums</h3>
          <LineList data={newAlbums} />
        </section>
      </main>
    );
  }
}

export default Homepage;
