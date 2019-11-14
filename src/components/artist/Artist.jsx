import React, { Component } from "react";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import SmallTrack from "../track/SmallTrack";
import { Link } from "react-router-dom";

class Artist extends Component {
  state = {
    artist_info: [],
    artist_top: [],
    artist_album: [],
    activeData: "",
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${this.props.match.params.artist_id}`
      )
      .then(res => {
        this.setState({
          artist_info: res.data,
          loading: false,
        });
      })

      .catch(err => console.log(err));
  }

  getTopTracklist = () => {
    this.setState({ loading: true });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${this.props.match.params.artist_id}/top?limit=10`
      )
      .then(res => {
        this.setState({
          artist_top: res.data.data,
          activeData: "tracklist",
          loading: false,
        });
      })
      .catch(err => console.log(err));
  };

  getTopAlbum = () => {
    this.setState({ loading: true });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${this.props.match.params.artist_id}/albums`
      )
      .then(res => {
        this.setState({
          artist_album: res.data.data,
          activeData: "albums",
          loading: false,
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const {
      artist_info,
      artist_top,
      artist_album,
      activeData,
    } = this.state;
    if (this.state.loading === true) {
      return <Spinner />;
    } else {
      return (
        <div>
          <button
            onClick={this.props.history.goBack}
            className="btn btn-dark btn-sm ml-5 mt-3"
          >
            Go Back
          </button>
          <div className="row">
            <div className="offset-md-4 col-md-4 mt-3">
              <img
                src={artist_info.picture_big}
                className="card-img-top mt-3 shadow-track"
                alt="img"
              />

              <ul className="list-group shadow-track text-center">
                <li className="list-group-item lead">
                  {artist_info.name}
                </li>
                <li className="list-group-item">
                  Fans: {artist_info.nb_fan}
                </li>
                <li className="list-group-item">
                  Albums: {artist_info.nb_album}
                  <div className="d-flex justify-content-around mt-2">
                    <button
                      onClick={this.getTopTracklist}
                      className="btn btn-outline-primary btn-sm"
                    >
                      Check tracklist
                    </button>

                    <button
                      onClick={this.getTopAlbum}
                      className="btn btn-outline-primary btn-sm"
                    >
                      Check Albums
                    </button>
                  </div>
                </li>
              </ul>
            </div>

            {activeData === "tracklist" && (
              <div className="col-md-12 mt-3">
                <div className="text-center lead display-5 mt-5">
                  Top {artist_info.name} Tracklist
                </div>
                <ul className="list-group shadow-track mt-3">
                  {artist_top.map(track => (
                    <SmallTrack track={track} />
                  ))}
                </ul>
              </div>
            )}

            {activeData === "albums" && (
              <div className="card mt-5 text-center shadow-track">
                <div className="card-header lead display-5 text-center ">
                  Top {artist_info.name} Albums
                </div>
                <ul className="row justify-content-around">
                  {artist_album
                    .sort((a, b) => (b.fans > a.fans ? 1 : -1))
                    .map(elem => (
                      <li className="card col-md-5 mt-5 shadow-track border-track">
                        <img
                          src={elem.cover_big}
                          className="card-img-top"
                          alt="cover"
                        />
                        <div className="card-body">
                          <div className="card-title">
                            <div>
                              {artist_info.name} - {elem.title}
                            </div>
                            <div>Fans: {elem.fans}</div>
                            <div>
                              Release date: {elem.release_date}
                            </div>
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
            )}
          </div>
        </div>
      );
    }
  }
}

export default Artist;
