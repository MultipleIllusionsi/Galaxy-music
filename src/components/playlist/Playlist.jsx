import React, { Component } from "react";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import SmallTrack from "../track/SmallTrack";

class Playlist extends Component {
  state = { playlist: [], loading: false, check: false };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/${this.props.match.params.id}`
      )
      .then(res => {
        this.setState({
          playlist: res.data,
          loading: false,
        });
      })
      .catch(err => console.log(err));
  }

  getTracks = () => {
    this.setState({ check: true });
  };

  render() {
    const playlist = this.state.playlist;
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
                src={this.state.playlist.picture_big}
                className="card-img-top mt-3 shadow-track"
                alt="img"
              />

              <ul className="list-group shadow-track text-center">
                <li className="list-group-item lead">
                  {playlist.title}
                </li>
                {playlist.description && (
                  <li className="list-group-item">
                    {playlist.description}
                  </li>
                )}

                <li className="list-group-item">
                  <div>Tracks: {playlist.nb_tracks}</div>
                  <button
                    onClick={this.getTracks}
                    className="btn btn-outline-primary btn-sm mt-2"
                  >
                    Check
                  </button>
                </li>
              </ul>
            </div>
            {this.state.check && (
              <div className="col-md-12 mt-3">
                <ul className="list-group shadow-track mt-5">
                  <li className="list-group-item text-center lead display-5 py-3">
                    Playlist
                  </li>

                  {playlist.tracks.data.map(track => (
                    <SmallTrack track={track} />
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

export default Playlist;
