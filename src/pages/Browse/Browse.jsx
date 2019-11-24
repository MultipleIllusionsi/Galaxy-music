import React, { Component } from "react";
import axios from "axios";

import Spinner from "../../components/spinner/Spinner";
import BrowserForm from "./BrowseForm";
import Player from "../../components/track/Player";

import "./Browse.scss";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

class Browse extends Component {
  state = {
    currentTab: "search", //
    genreType: "charts",
    playingTrack: 0, //
    queryTitle: "",
    queryType: "",
    genres: null,
    filterResult: null, //
    searchResult: null, //
    loading: false, //
  };

  onChangeSearchInput = ({ target: { value } }) => {
    this.setState({ queryTitle: value });
  }; // add debounce

  handleTabs = ({ target: { value } }) => {
    this.setState({ currentTab: value }, () => {
      const { genres, currentTab } = this.state;
      if (currentTab === "filter" && genres === null) {
        console.log("genres were fetched");
        this.fetchGenres();
      }
    });
  };

  currentSelectOption = value => {
    this.setState({ queryType: value.toLowerCase() });
  };

  playingTrackHandler = id => {
    this.setState({ playingTrack: id });
  };

  fetchGenres = async () => {
    try {
      this.setState({ loading: true });
      const res = await axios.get(`${cors}${api}genre`);
      this.setState({ genres: res.data.data, loading: false });
    } catch (err) {
      console.log("error", err);
    }
  };

  onChangeGenre = async e => {
    try {
      const { genreType } = this.state;
      e.preventDefault();
      this.setState({ loading: true });
      const res = await axios.get(
        `${cors}${api}editorial/${e.target.id}/${genreType}`
      );
      this.setState({ genreResult: res.data, loading: false });
    } catch (err) {
      console.log("error", err);
    }
  };

  findTrack = async e => {
    try {
      const { queryTitle, queryType } = this.state;
      e.preventDefault();
      this.setState({ loading: true });
      const res = await axios.get(
        `${cors}${api}search?q=${queryType}:"${queryTitle}"&limit=10`
      );
      this.setState({
        searchResult: res.data.data,
        queryTitle: "",
        loading: false,
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  render() {
    const {
      currentTab,
      queryTitle,
      genreResult,
      searchResult,
      genres,
      loading,
      playingTrack,
    } = this.state;

    return (
      <main className="browse-page">
        <div className="secondary-bc"></div>
        <BrowserForm
          // search stuff
          findTrack={this.findTrack}
          handleTabs={this.handleTabs}
          currentTab={currentTab}
          queryTitle={queryTitle}
          onChangeSearchInput={this.onChangeSearchInput}
          currentSelectOption={this.currentSelectOption}
          // filter stuff
          onChangeGenre={this.onChangeGenre}
          genres={genres}
        />

        {loading && <Spinner />}
        {searchResult && currentTab === "search" && (
          <ul className="tracks-list">
            {searchResult.map(track => (
              <Player
                isPlaying={track.id === playingTrack ? true : false}
                handler={this.playingTrackHandler}
                key={track.id}
                cover={track.album.cover_medium}
                track={track}
              />
            ))}
          </ul>
        )}

        {genreResult && currentTab === "filter" && (
          <ul className="tracks-list">
            {genreResult.tracks.data.map(track => (
              <Player
                isPlaying={track.id === playingTrack ? true : false}
                handler={this.playingTrackHandler}
                key={track.id}
                cover={track.album.cover_medium}
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
