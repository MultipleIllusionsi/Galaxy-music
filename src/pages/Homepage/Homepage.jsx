import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import CtaButton from "../../components/CtaButton/CtaButton";
import PlayButton from "../../components/PlayButton/PlayButton";
import Spinner from "../../components/spinner/Spinner";

import "./Homepage.scss";

class Homepage extends Component {
  state = {
    topArtists: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.deezer.com/chart/0/artists?limit=3`
      )
      .then(res => {
        console.log("res.data.data", res.data.data);
        this.setState({
          topArtists: res.data.data,
          loading: false,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { topArtists, loading } = this.state;

    const bcImg =
      topArtists.length > 0 && `url(${topArtists[2].picture_xl})`;

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

        {loading ? (
          <Spinner />
        ) : (
          <section
            className="homepage__section2"
            style={{
              backgroundImage: bcImg,
            }}
          >
            <div className="homepage__section2-content">
              <h3 className="text--big-space pt-md">
                Featured Artist
              </h3>
              <span className="abs-center">
                <PlayButton to={`/genre`} />
                <h2 className="artist-name">
                  {topArtists.length > 0 && topArtists[2].name}
                </h2>
                <div className="mt-md">
                  <CtaButton>
                    <Link to="/charts">More from this artist</Link>
                  </CtaButton>
                </div>
              </span>
            </div>
          </section>
        )}
      </main>
    );
  }
}

export default Homepage;
