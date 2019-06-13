import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import SmallTrack from "../track/SmallTrack";
import { Link } from "react-router-dom";
import Album from "../album/Album";
import axios from "axios";

class GenreArtist extends Component {
  state = {
    playlist: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${
          this.props.match.params.artist_id
        }/top?limit=30`
      )
      .then(res => {
        this.setState({ playlist: res.data.data, loading: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.loading === true) {
      return <Spinner />;
    } else {
      return (
        <div>
          <div className="row justify-content-around">
            <button
              onClick={this.props.history.goBack}
              className="btn btn-dark btn-sm my-4"
            >
              Go Back
            </button>
            <div className="text-center lead display-5 mt-3">Top Tracklist</div>
          </div>

          <ul className="list-group">
            {this.state.playlist.map(elem => (
              <SmallTrack track={elem} />
            ))}
          </ul>
        </div>
      );
    }
  }
}
export default GenreArtist;
