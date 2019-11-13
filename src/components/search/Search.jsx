import React, { Component } from "react";
import axios from "axios";
import SearchTrack from "../track/SearchTrack";
import Spinner from "../spinner/Spinner";

import "./Search.scss";

class Search extends Component {
  state = {
    queryTitle: "",
    queryType: "",
    result: [],
    loading: false,
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
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${this.state.queryType}:"${this.state.queryTitle}"`
      )
      .then(res => {
        this.setState({
          result: res.data.data,
        });
        this.setState({ queryTitle: "", loading: false });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="card card-body my-5 p-4 offset-md-3 col-md-6 shadow-component">
          <h1 className="display-4 text-center ">
            <i className="fas fa-music" />
            <span className="Search-header">Search</span>
          </h1>
          <form onSubmit={this.findTrack}>
            <div className="form-group ">
              <ul className="lead d-flex align-items-center justify-content-around card-header">
                <li className="d-flex flex-column">
                  <label htmlFor="query">Song</label>
                  <input
                    id="one"
                    className="checkmark"
                    type="radio"
                    name="query"
                    value="track"
                    onChange={this.handleQuery}
                    checked={this.state.queryType === "track"}
                  />
                </li>

                <li className="d-flex flex-column">
                  <label htmlFor="query">Artist</label>
                  <input
                    id="two"
                    className="checkmark"
                    type="radio"
                    name="query"
                    value="artist"
                    onChange={this.handleQuery}
                    checked={this.state.queryType === "artist"}
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
        </div>
        {this.state.loading && <Spinner />}
        {this.state.result.length > 0 && (
          <div className="card card-body my-5  p-4 shadow-component ">
            {this.state.result.length > 0 && (
              <div>
                <h3 className="text-center mb-4 ">Found Songs</h3>
                <div className="row">
                  {this.state.result.map(track => {
                    return (
                      <SearchTrack key={track.id} track={track} />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Search;
