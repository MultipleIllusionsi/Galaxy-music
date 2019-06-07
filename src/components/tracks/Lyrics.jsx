import React, { Component, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Moment from "react-moment";
import Album from "./Album";

import "./Lyrics.css";
//СТРАНИЦА ПРИ НАЖАТИИ > VIEW LYRICS

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
    moreActive: false
  };

  handleAlbum = () => {
    this.setState({ moreActive: true });
  };
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics });
        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${
            this.props.match.params.id
          }&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then(res => {
        this.setState({ track: res.data.message.body.track });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { track, lyrics } = this.state;
    // console.log(track);

    if (track === undefined || Object.keys(track).length === 0) {
      return <Spinner />;
    } else {
      return (
        <Fragment>
          <button
            onClick={this.props.history.goBack}
            className="btn btn-dark btn-sm my-4"
          >
            Go Back
          </button>
          <div className="card">
            <h5 className="card-header">
              {track.track_name} by
              <span className="text-secondary"> {track.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">
                {lyrics
                  ? lyrics.lyrics_body
                  : "Sorry, there is no lyrics in this song"}
              </p>
            </div>
          </div>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Track Rating: </strong>
              {track.track_rating}
            </li>
            <li className="list-group-item">
              <strong>Album Name:</strong>
              {track.album_name}
              {this.state.moreActive && <Album id={track.album_id} />}
              <button
                // to={`/lyrics/album/${track.album_id}`}
                onClick={this.handleAlbum}
                className="Album-more btn btn-outline-primary btn-sm"
              >
                more...
              </button>
            </li>
            <li className="list-group-item">
              <strong>Song Genre: </strong>
              {track.primary_genres.music_genre_list.length === 0
                ? "Unknown"
                : track.primary_genres.music_genre_list[0].music_genre
                    .music_genre_name}
            </li>
            <li className="list-group-item">
              <strong>Favorited: </strong>
              {track.num_favourite}
            </li>
            <li className="list-group-item">
              <strong>Release Date: </strong>
              <Moment format="MM/DD/YYYY">{track.updated_time}</Moment>
            </li>
          </ul>
        </Fragment>
      );
    }
  }
}
export default Lyrics;
