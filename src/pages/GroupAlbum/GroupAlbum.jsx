import React, { Component } from "react";
import axios from "axios";

import Spinner from "../../components/spinner/Spinner";

import CtaButton from "../../components/CtaButton/CtaButton";
import PlayButton from "../../components/PlayButton/PlayButton";

import "./GroupAlbum.scss";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

class Album extends Component {
  state = {
    albums: null,
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        `${cors}${api}editorial/0/releases`
      );
      this.setState({ albums: res.data.data });
      console.log("res", this.state.albums);
    } catch (err) {
      console.log("error:", err);
    }
  }

  render() {
    const { albums } = this.state;
    return (
      <main className="groupAlbum-page">
        <h3 className="text--big-space pt-md">New Albums</h3>
        <div className="center-page">
          {!albums ? (
            <Spinner />
          ) : (
            <ul className="grouplist mt-md">
              {albums.map(album => (
                <li
                  className="grouplist__item"
                  key={album.id}
                  style={{
                    backgroundImage: `url(${album.cover_medium}`,
                  }}
                >
                  <div className="gradient-overlay">
                    <span className="abs-center">
                      <PlayButton
                        to={`/playlist/${album.id}`}
                        type="hover"
                      />
                    </span>
                  </div>
                  <div className="grouplist__info">
                    <p>{album.title}</p>
                    <p className="artist-name">
                      <span>by</span> {album.artist.name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    );
  }
}

export default Album;
