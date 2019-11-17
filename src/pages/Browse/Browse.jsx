import React, { Component } from "react";
import axios from "axios";

import Track from "../../components/track/Track";
import Spinner from "../../components/spinner/Spinner";
import CustomSelect from "../../components/CustomSelect/CustomSelect";

import "./Browse.scss";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

class Browse extends Component {
  state = {
    currentTab: "search",
    genreType: "charts",
    queryTitle: "",
    queryType: "",
    genres: null,
    filterResult: null,
    searchResult: null,
    loading: false,
  };

  onChangeSearchInput = ({ target: { value } }) => {
    this.setState({ queryTitle: value });
  };

  handleTabs = async ({ target: { value } }) => {
    this.setState({ currentTab: value }, () => {
      const { genres, currentTab } = this.state;
      if (genres === null && currentTab === "filter") {
        this.fetchGenres();
      }
    });
  };

  fetchGenres = () => {
    this.setState({ loading: true });
    axios
      .get(`${cors}${api}genre`)
      .then(res => {
        console.log("res.data", res.data.data);
        this.setState({
          genres: res.data.data,
          loading: false,
        });
      })
      .catch(err => console.log(err));
  };

  currentOption = value => {
    this.setState({ queryType: value.toLowerCase() });
  };

  onChangeGenre = e => {
    const { genreType } = this.state;
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .get(`${cors}${api}editorial/${e.target.id}/${genreType}`)
      .then(res => {
        console.log("res genre current", res.data);
        this.setState({
          genreResult: res.data,
          loading: false,
        });
      })
      .catch(err => console.log(err));
  };

  findTrack = e => {
    const { queryTitle, queryType } = this.state;
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .get(
        `${cors}${api}search?q=${queryType}:"${queryTitle}"&limit=25`
      )
      .then(res => {
        this.setState({
          searchResult: res.data.data,
          queryTitle: "",
          loading: false,
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const {
      currentTab,
      queryTitle,
      genreResult,
      searchResult,
      genres,
      loading,
    } = this.state;

    return (
      <main className="browse-page">
        <div className="secondary-bc"></div>
        <div className="browse-form">
          <form onSubmit={this.findTrack}>
            <ul className="browse-form__tabs">
              <li className={`browse-form__tabs-item`}>
                <input
                  id="filter"
                  className="browse-form__tabs-input display-none"
                  type="radio"
                  name="query"
                  value="filter"
                  onChange={this.handleTabs}
                  checked={currentTab === "filter" && true}
                />
                <label htmlFor="filter">Filter</label>
              </li>

              <li className={`browse-form__tabs-item`}>
                <input
                  className="browse-form__tabs-input display-none"
                  type="radio"
                  id="search"
                  name="query"
                  value="search"
                  onChange={this.handleTabs}
                  checked={currentTab === "search" && true}
                />
                <label htmlFor="search">Search</label>
              </li>
            </ul>
            {currentTab === "search" ? (
              <div className="browse-form__wrapper">
                <div className="browse-form__search">
                  <div className="browse-form__search-input">
                    <button
                      className="search-button"
                      type="submit"
                      aria-label="search button"
                    ></button>
                    <input
                      type="text"
                      placeholder="Title..."
                      name="queryTitle"
                      value={queryTitle}
                      onChange={this.onChangeSearchInput}
                    />
                  </div>

                  <CustomSelect option={this.currentOption} />
                </div>
              </div>
            ) : (
              <div className="browse-form__wrapper center-page">
                <ul
                  className="genre-list"
                  onClick={this.onChangeGenre}
                >
                  {genres &&
                    genres.map(genre => (
                      <li
                        id={genre.id}
                        className="genre-list__item"
                        key={genre.id}
                      >
                        {genre.name}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </form>
        </div>

        {loading && <Spinner />}
        {searchResult && (
          <ul className="tracks-list">
            {searchResult.map(track => (
              <Track
                key={track.id}
                cover={track.album.cover_small}
                track={track}
              />
            ))}
          </ul>
        )}

        {genreResult && (
          <ul className="tracks-list">
            {genreResult.tracks.data.map(track => (
              <Track
                key={track.id}
                cover={track.album.cover_small}
                track={track}
              />
            ))}
          </ul>
        )}
      </main>
    );
  }
}

export default Browse;
