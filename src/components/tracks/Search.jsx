import React, { Component } from "react";
import axios from "axios";
import Track from "../tracks/Track";
import Spinner from "../layout/Spinner";

import "./Search.css";
//ВЕРХНЯЯ ПАНЕЛЬ SEARCH FOR A SONG

class Search extends Component {
  state = {
    queryTitle: "",
    queryType: "",
    result: [],
    loading: false
  };

  onChange = e => {
    this.setState({ queryTitle: e.target.value });
  };

  handleQuery = e => {
    this.setState({ queryType: e.target.value });
  };

  findTrack = e => {
    e.preventDefault();
    this.setState({ result: [], loading: true });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?${
          this.state.queryType
        }=${
          this.state.queryTitle
        }&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        this.setState({
          result: res.data.message.body.track_list
        });
        this.setState({ queryTitle: "", loading: false });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="card card-body mb-4 p-4 ">
        <h1 className="display-4 text-center ">
          <i className="fas fa-music" />
          Search
        </h1>
        <p className="lead text-center">Get the Lyrics for any song</p>
        <form onSubmit={this.findTrack}>
          <div className="form-group">
            <ul className="lead d-flex align-items-center justify-content-around card-header">
              <li className="d-flex flex-column">
                <label htmlFor="query">Song</label>
                <input
                  className="checkmark"
                  type="radio"
                  name="query"
                  value="q_track"
                  onChange={this.handleQuery}
                  checked={this.state.queryType === "q_track"}
                />
              </li>

              <li className="d-flex flex-column ml-5">
                <label htmlFor="query">Artist</label>
                <input
                  className="checkmark"
                  type="radio"
                  name="query"
                  value="q_artist"
                  onChange={this.handleQuery}
                  checked={this.state.queryType === "q_artist"}
                />
              </li>

              <li className="d-flex flex-column ">
                <label htmlFor="query">Song's words</label>
                <input
                  className="checkmark"
                  type="radio"
                  name="query"
                  value="q_lyrics"
                  onChange={this.handleQuery}
                  checked={this.state.queryType === "q_lyrics"}
                />
              </li>
            </ul>

            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Title..."
              name="queryTitle"
              value={this.state.queryTitle}
              onChange={this.onChange}
            />
          </div>
          <button
            className="btn btn-primary btn-lg btn-block mb-5"
            type="submit"
          >
            Start searching
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
