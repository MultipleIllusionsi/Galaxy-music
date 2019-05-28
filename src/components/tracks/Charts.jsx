import React, { Component } from "react";
import axios from "axios";
import Spinner from "../layout/Spinner";

class Charts extends Component {
  state = {
    trackTitle: "",
    // top_tracks: [],
    // hot_tracks: [],
    // top_artists: [],
    loading: false
  };

  topTrack = e => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        this.setState({ top_tracks: res.data.message.body.track_list });
      })
      .catch(err => console.log(err));
  };

  hotTrack = e => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=hot&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        this.setState({ hot_tracks: res.data.message.body.track_list });
      })
      .catch(err => console.log(err));
  };

  topArtists = e => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=10&country=us&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        this.setState({ top_artists: res.data.message.body.artist_list });
      })
      .catch(err => console.log(err));
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
              <h5 className="card-title">TOP TRACKS</h5>
              <p className="card-text">TOP TRACKS</p>
              <button
                onClick={this.topTrack}
                className="btn btn-outline-primary "
              >
                Check
              </button>
            </div>
          </div>

          <div className="card border-0 mt-4">
            <div className="card-body text-center">
              <h5 className="card-title">HOT TRACKS</h5>
              <p className="card-text">HOT TRACKS</p>
              <button
                onClick={this.hotTrack}
                className="btn btn-outline-primary"
              >
                Check
              </button>
            </div>
            <img
              src="https://hdwallsource.com/img/2017/12/travis-scott-desktop-wallpaper-62068-63984-hd-wallpapers.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>

          <div className="card border-0">
            <img
              src="https://stmed.net/sites/default/files/styles/1920x1080/public/drake-wallpapers-30341-3744725.jpg?itok=TaV9IWUT"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">TOP ARTISTS</h5>
              <p className="card-text">TOP ARTISTS</p>
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
        <div className="line" />
        {""}
        <div className="container min">
          {this.state.top_tracks && (
            <ul className="list-group list-group-flush mt-5">
              <div className="display-3">TOP TRACKS</div>
              {this.state.top_tracks.map(elem => (
                <li className="list-group-item">{elem.track.track_name}</li>
              ))}
            </ul>
          )}

          {this.state.hot_tracks && (
            <ul className="list-group list-group-flush mt-5">
              <div className="display-3 ">HOT TRACKS</div>
              {this.state.hot_tracks.map(elem => (
                <li className="list-group-item">{elem.track.track_name}</li>
              ))}
            </ul>
          )}

          {this.state.top_artists && (
            <ul className="list-group list-group-flush mt-5 ">
              <div className="display-3 ">TOP ARTIST</div>
              {this.state.top_artists.map(elem => (
                <li className="list-group-item">{elem.artist.artist_name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Charts;
