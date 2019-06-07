import React, { Component } from "react";
import axios from "axios";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

class Charts extends Component {
  state = {
    sectionTitle: "",
    activeData: [],
    // top_tracks: [],
    // hot_tracks: [],
    // top_artists: [],
    loading: false
  };

  topTrack = e => {
    e.preventDefault();
    if (!this.state.top_tracks) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
            process.env.REACT_APP_MM_KEY
          }`
        )
        .then(res => {
          this.setState({
            top_tracks: res.data.message.body.track_list,
            activeData: res.data.message.body.track_list,
            sectionTitle: "TOP TRACKS"
          });
        })
        .catch(err => console.log(err));
    } else {
      this.setState({
        activeData: this.state.top_tracks,
        sectionTitle: "TOP TRACKS"
      });
    }
  };

  hotTrack = e => {
    e.preventDefault();
    if (!this.state.hot_tracks) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=hot&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
            process.env.REACT_APP_MM_KEY
          }`
        )
        .then(res => {
          this.setState({
            hot_tracks: res.data.message.body.track_list,
            activeData: res.data.message.body.track_list,
            sectionTitle: "HOT TRACKS"
          });
        })
        .catch(err => console.log(err));
    } else {
      this.setState({
        activeData: this.state.hot_tracks,
        sectionTitle: "HOT TRACKS"
      });
    }
  };

  topArtists = e => {
    e.preventDefault();
    if (!this.state.top_artists) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=10&country=us&apikey=${
            process.env.REACT_APP_MM_KEY
          }`
        )
        .then(res => {
          this.setState({
            top_artists: res.data.message.body.artist_list,
            activeData: res.data.message.body.artist_list,
            sectionTitle: "TOP ARTISTS"
          });
        })
        .catch(err => console.log(err));
    } else {
      this.setState({
        activeData: this.state.top_artists,
        sectionTitle: "TOP ARTISTS"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="card-group line">
          <div className="card border-0">
            <img
              src="https://i0.wp.com/lovebelfast.co.uk/wp-content/uploads/2017/07/ed-sheeran-tickets.jpg?resize=1920%2C1080&ssl=1"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <h1 className="card-title display-5 mt-4">TOP TRACKS</h1>
              <p className="card-text">Песни, находящиеся в топ чарте</p>
              <button
                onClick={this.topTrack}
                className="btn btn-outline-primary "
              >
                Check
              </button>
            </div>
          </div>

          <div className="card border-0">
            <img
              src="https://hdwallsource.com/img/2017/12/travis-scott-desktop-wallpaper-62068-63984-hd-wallpapers.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <h1 className="card-title display-5">HOT TRACKS</h1>
              <p className="card-text">
                Самые популярные песни за последние 2 часа
              </p>
              <button
                onClick={this.hotTrack}
                className="btn btn-outline-primary"
              >
                Check
              </button>
            </div>
          </div>

          <div className="card border-0">
            <img
              src="https://stmed.net/sites/default/files/styles/1920x1080/public/drake-wallpapers-30341-3744725.jpg?itok=TaV9IWUT"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <h1 className="card-title display-5 mt-4">TOP ARTISTS</h1>
              <p className="card-text">Самые прослушиваемые исполнители</p>
              <button
                onClick={this.topArtists}
                className="btn btn-outline-primary"
              >
                Check
              </button>
            </div>
          </div>
        </div>
        {""}
        {""}
        <div className="container min">
          {this.state.activeData.length > 0 && (
            <ul className="list-group list-group-flush pt-5">
              <div className="display-3 text-center">
                {this.state.sectionTitle}
              </div>
              {this.state.activeData.map(elem => (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  {elem.track
                    ? `${elem.track.artist_name} - ${elem.track.track_name}`
                    : elem.artist.artist_name}

                  <span className="badge badge-primary badge-pill">
                    {elem.track
                      ? elem.track.track_rating
                      : elem.artist.artist_rating}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Charts;
