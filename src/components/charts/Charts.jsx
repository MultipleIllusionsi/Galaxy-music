import React, { Component } from "react";
import axios from "axios";
import Spinner from "../layout/Spinner";
import SmallTrack from "../track/SmallTrack";
import { Link } from "react-router-dom";

import "./Charts.css";

class Charts extends Component {
  state = {
    topTracks: [],
    topAlbums: [],
    topArtists: [],
    topPlaylists: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`)
      .then(res => {
        this.setState({
          topTracks: res.data.tracks.data,
          topAlbums: res.data.albums.data,
          topArtists: res.data.artists.data,
          topPlaylists: res.data.playlists.data,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.loading === true) {
      return <Spinner />;
    } else {
      return (
        <div className="card mt-5 shadow-component">
          <ul
            class="nav nav-tabs justify-content-center mt-5"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item col-md-3 text-center">
              <a
                class="nav-link active display-5"
                id="tracks-tab"
                data-toggle="tab"
                href="#tracks"
                role="tab"
                aria-controls="tracks"
                aria-selected="true"
              >
                Top Tracks
              </a>
            </li>
            <li class="nav-item col-md-3 text-center">
              <a
                class="nav-link display-5"
                id="albums-tab"
                data-toggle="tab"
                href="#albums"
                role="tab"
                aria-controls="albums"
                aria-selected="false"
              >
                Top Albums
              </a>
            </li>
            <li class="nav-item col-md-3 text-center">
              <a
                class="nav-link display-5"
                id="artists-tab"
                data-toggle="tab"
                href="#artists"
                role="tab"
                aria-controls="artists"
                aria-selected="false"
              >
                Top Artists
              </a>
            </li>
            <li class="nav-item col-md-3 text-center">
              <a
                class="nav-link display-5"
                id="playlists-tab"
                data-toggle="tab"
                href="#playlists"
                role="tab"
                aria-controls="playlists"
                aria-selected="false"
              >
                Top Playlists
              </a>
            </li>
          </ul>

          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="tracks"
              role="tabpanel"
              aria-labelledby="tracks-tab"
            >
              <div className="card mt-5 shadow-track">
                <div className="card-header lead display-5 text-center ">
                  TOP TRACKS
                </div>
                <ul class="list-group list-group-flush">
                  {this.state.topTracks.map(elem => (
                    <SmallTrack track={elem} />
                  ))}
                </ul>
              </div>
            </div>

            <div
              class="tab-pane fade "
              id="albums"
              role="tabpanel"
              aria-labelledby="albums-tab"
            >
              <div className="card mt-5 text-center shadow-track">
                <div className="card-header lead display-5 text-center ">
                  TOP ALBUMS
                </div>
                <ul className="row justify-content-around">
                  {this.state.topAlbums.map(elem => (
                    <li className="card col-md-5 mt-5 shadow-track border-track">
                      <img
                        src={elem.cover_big}
                        className="card-img-top"
                        alt="cover"
                      />
                      <div class="card-body">
                        <div className="card-title">
                          {elem.artist.name} - {elem.title}
                        </div>

                        <Link
                          to={`/album/${elem.id}`}
                          className="btn btn-outline-dark "
                        >
                          more...
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="artists"
              role="tabpanel"
              aria-labelledby="artists-tab"
            >
              <div className="card mt-5 text-center shadow-track">
                <div className="card-header lead display-5">TOP ARTISTS</div>
                <ul class="row justify-content-around">
                  {this.state.topArtists.map(elem => (
                    <li className="card col-md-5 mt-5 shadow-track border-track">
                      <img
                        src={elem.picture_big}
                        className="card-img-top"
                        alt="cover"
                      />
                      <div class="card-body">
                        <div className="card-title">
                          <strong>Position</strong>: {elem.position} -{" "}
                          {elem.name}
                        </div>

                        <Link
                          to={`/artist/${elem.id}`}
                          className="btn btn-outline-dark "
                        >
                          more...
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="playlists"
              role="tabpanel"
              aria-labelledby="playlists-tab"
            >
              <div className="card mt-5 text-center shadow-track">
                <div className="card-header lead display-5 ">TOP PLAYLISTS</div>
                <ul class="row justify-content-around">
                  {this.state.topPlaylists.map(elem => (
                    <li className="card col-md-5 mt-5 shadow-track border-track">
                      <img
                        src={elem.picture_big}
                        className="card-img-top"
                        alt="cover"
                      />
                      <div class="card-body">
                        <div className="card-title">
                          {elem.title}
                          <div className="card-body">
                            Tracks: {elem.nb_tracks}
                          </div>
                        </div>

                        <Link
                          to={`/playlist/${elem.id}`}
                          className="btn btn-outline-dark "
                        >
                          more...
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Charts;
