import React, { Component } from "react";
import axios from "axios";
import Spinner from "../layout/Spinner";

class Album extends Component {
  state = {
    album: []
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${
          this.props.album.id
        }`
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
        <div className="text-center lead display-5 mt-5">Album not found</div>
      );
    } else {
      return (
        <div>
          <div className="text-center lead display-5 mt-5">
            Album Information
          </div>
          <div className="row ">
            <div className="col-md-6 mt-3">
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

            <div className="offset-md-1 col-md-5 mt-3">
              <div className="text-center lead display-6 ">Tracklist</div>
              <ul className="list-group shadow-track">
                {album.tracks.data.map(track => (
                  <li className="list-group-item d-flex justify-content-between">
                    <span>{track.title}</span>
                    <strong>
                      <i className="fas fa-forward" />
                      {track.duration} sec
                    </strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Album;
