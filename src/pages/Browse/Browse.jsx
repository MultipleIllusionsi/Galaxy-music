import React, { Component } from "react";
import axios from "axios";
import Track from "../../components/track/Track";
import Spinner from "../../components/spinner/Spinner";

import "./Browse.scss";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

class Browse extends Component {
  state = {
    currentTab: "search",
    queryTitle: "",
    queryType: "",
    result: null,
    loading: false,
  };

  onChange = ({ target: { value } }) => {
    this.setState({ queryTitle: value });
  };

  handleTabs = ({ target: { value } }) => {
    console.log("target", value);
    this.setState({ currentTab: value });
  };

  findTrack = e => {
    const { queryTitle, queryType } = this.state;

    e.preventDefault();
    this.setState({ loading: true });
    axios
      .get(`${cors}${api}search?q=${queryType}:"${queryTitle}"`)
      .then(res => {
        console.log("res", res.data.data);
        this.setState({
          result: res.data.data,
        });
        this.setState({ queryTitle: "", loading: false });
      })
      .catch(err => console.log(err));
  };

  render() {
    const {
      currentTab,
      queryTitle,
      queryType,
      result,
      loading,
    } = this.state;

    return (
      <main className="browse-page">
        <div className="secondary-bc"></div>
        <div className="browse-form">
          <form onSubmit={this.findTrack}>
            <ul className="browse-form__tabs">
              <li
                className={`browse-form__tabs-item ${currentTab ===
                  "filter" && "checked"}`}
              >
                <input
                  id="filter"
                  className="browse-form__tabs-input display-none"
                  type="radio"
                  name="query"
                  value="filter"
                  onChange={this.handleTabs}
                  checked={currentTab === "filter" ? true : false}
                />
                <label htmlFor="filter">Filter</label>
              </li>

              <li
                className={`browse-form__tabs-item ${currentTab ===
                  "search" && "checked"}`}
              >
                <input
                  className="browse-form__tabs-input display-none"
                  type="radio"
                  id="search"
                  name="query"
                  value="search"
                  onChange={this.handleTabs}
                  checked={currentTab === "search" ? true : false}
                />
                <label htmlFor="search">Search</label>
              </li>
            </ul>
            {currentTab === "search" ? (
              <div className="browse-form__search-wrapper">
                <div className="browse-form__search">
                  <button
                    className="search-button"
                    type="submit"
                  ></button>
                  <input
                    type="text"
                    placeholder="Title..."
                    name="queryTitle"
                    value={queryTitle}
                    onChange={this.onChange}
                  />
                  <select
                    defaultValue="all"
                    name="select"
                    id="select"
                  >
                    <option value="songs">songs</option>
                    <option value="artists">artists</option>
                    <option value="lyrics">lyrics</option>
                    <option value="all">all</option>
                  </select>
                </div>
              </div>
            ) : (
              <div className="browse-form__filter">blyaaa</div>
            )}
          </form>
        </div>

        {loading && <Spinner />}
        {result && (
          <div>
            <ul className="tracks-list">
              {result &&
                result.map(track => (
                  <Track
                    key={track.id}
                    cover={track.album.cover_small}
                    track={track}
                  />
                ))}
            </ul>
          </div>
        )}
      </main>
    );
  }
}

export default Browse;
