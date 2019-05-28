import React, { Component } from "react";
import axios from "axios";
import Track from "../tracks/Track";
import "./Genre.css";

class GenreType extends Component {
  state = { data: [] };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track&page_size=10&f_music_genre_id=${
          this.props.match.params.id
        }&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        this.setState({ data: res.data.message.body.track_list });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { type, id } = this.props.match.params;
    return (
      <div>
        {console.log(this.props.match.params)}
        <div>
          <h3 className="text-center my-4">{type.toUpperCase()} Top Songs</h3>
          <div className="row">
            {this.state.data.map(item => (
              <Track key={item.track.track_id} track={item.track} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default GenreType;
