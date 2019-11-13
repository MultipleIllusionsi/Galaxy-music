import React, { Component } from "react";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import SmallTrack from "../track/SmallTrack";

class SeparAlbum extends Component {
  state = {
    album: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${this.props.match.params.id}`
      )
      .then(res => {
        this.setState({ album: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const album = this.state.album;
    if (album === undefined || Object.keys(album).length === 0) {
      return <Spinner />;
    } else if (album.nb_tracks < 2) {
      return (
        <div className="text-center lead display-5 mt-5">
          Album not found
        </div>
      );
    } else {
      return (
        <div>
          <button
            onClick={this.props.history.goBack}
            className="btn btn-dark btn-sm ml-5 mt-3"
          >
            Go Back
          </button>
          <div className="text-center lead display-5 mt-3">
            Album Information
          </div>
          <div className="row ">
            <div className="offset-md-3 col-md-6 mt-3">
              <img
                className="card-img-top mt-3 shadow-track"
                src={album.cover_xl}
                alt="cover"
              />
              <ul className="list-group shadow-track">
                <li className="list-group-item">
                  <strong>Album Title - </strong>
                  {album.title}
                </li>
                <li className="list-group-item">
                  <strong>Release - </strong> {album.release_date}
                </li>

                <li className="list-group-item">
                  <strong>Genre - </strong>
                  {album.genres.data[0].name}
                </li>
                <li className="list-group-item">
                  <strong> Tracks Count - </strong>
                  {album.nb_tracks}
                </li>
                <li className="list-group-item">
                  <strong> Type - </strong>
                  {album.type}
                </li>
              </ul>
            </div>

            <div className="col-md-12 mt-3">
              <div className="text-center lead display-5 mt-5">
                Tracklist
              </div>
              <ul className="list-group shadow-track mt-3">
                {album.tracks.data.map(track => (
                  <SmallTrack track={track} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default SeparAlbum;
