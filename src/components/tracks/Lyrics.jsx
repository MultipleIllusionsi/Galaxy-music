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
    moreActive: false
  };

  handleAlbum = () => {
    this.setState({ moreActive: true });
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${
          this.props.match.params.id
        }`
      )
      .then(res => {
        console.log(res);
        this.setState({ track: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { track } = this.state;
    console.log(track);

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
          <div className="card shadow-track">
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src={track.contributors[0].picture_xl}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="col-md-7">
                <div className="card-header display-5">
                  {track.title} by
                  <span className="text-secondary"> {track.artist.name}</span>
                </div>
                <ul className="list-group list-group-flush display-6">
                  <li className="list-group-item">
                    <strong>Album Name:</strong>
                    <span>{track.album.title}</span>

                    <button
                      to={`/album/${track.album_id}`}
                      onClick={this.handleAlbum}
                      className="Album-more btn btn-outline-primary btn-sm ml-5"
                    >
                      more...
                    </button>
                  </li>
                  <li className="list-group-item">
                    <strong>Track Rating: </strong>
                    {Math.round(track.rank / 10000)}
                  </li>

                  <li className="list-group-item">
                    <strong>Duration: </strong>
                    {track.duration} sec
                  </li>
                  <li className="list-group-item">
                    <strong>Release Date: </strong>
                    <Moment format="MM/DD/YYYY">{track.release_date}</Moment>
                  </li>
                  <li className="list-group-item text-center">
                    <strong>Preview: </strong>
                    <div>
                      <audio controls>
                        <source src={track.preview} type="audio/mpeg" />
                      </audio>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {this.state.moreActive && <Album album={track.album} />}
        </Fragment>
      );
    }
  }
}
export default Lyrics;
