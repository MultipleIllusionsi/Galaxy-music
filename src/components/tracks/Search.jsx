import React, { Component } from "react";
import axios from "axios";
import Track from "../tracks/Track";
import Spinner from "../layout/Spinner";
//ВЕРХНЯЯ ПАНЕЛЬ SEARCH FOR A SONG

class Search extends Component {
  state = {
    trackTitle: "",
    result: [],
    loading: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  findTrack = e => {
    e.preventDefault();
    this.setState({ result: [], loading: true });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${
          this.state.trackTitle
        }&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        this.setState({
          result: res.data.message.body.track_list
        });
        this.setState({ trackTitle: "", loading: false });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="card card-body mb-4 p-4 ">
        <h1 className="display-4 text-center ">
          <i className="fas fa-music" />
          Search For a Song
        </h1>
        <p className="lead text-center">Get the Lyrics for any song</p>
        <form onSubmit={this.findTrack}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Song title..."
              name="trackTitle"
              value={this.state.trackTitle}
              onChange={this.onChange}
            />
          </div>
          <button
            className="btn btn-primary btn-lg btn-block mb-5"
            type="submit"
          >
            Get Track Lyrics
          </button>
        </form>
        {this.state.loading && <Spinner />}

        {this.state.result.length > 0 && (
          <div>
            <h3 className="text-center mb-4 ">Search Songs</h3>
            <div className="row">
              {this.state.result.map(item => {
                console.log(item);
                return <Track key={item.track.track_id} track={item.track} />;
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
