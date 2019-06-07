import React, { Component } from "react";
import axios from "axios";
import Spinner from "../layout/Spinner";

class Album extends Component {
  state = {
    album: []
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/album.get?album_id=${
          this.props.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        this.setState({ album: res.data.message.body.album });
      })
      .catch(err => console.log(err));
  }

  render() {
    const album = this.state.album;
    console.log(album);
    if (album === undefined || Object.keys(album).length === 0) {
      return <Spinner />;
    } else {
      return (
        <div>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album Rating - </strong>
              {album.album_rating}
            </li>
            <li className="list-group-item">
              <strong>Release - </strong> {album.album_release_date}
            </li>
            {album.primary_genres.music_genre_list.length > 0 && (
              <li className="list-group-item">
                <strong>Genre - </strong>
                {
                  album.primary_genres.music_genre_list[0].music_genre
                    .music_genre_name
                }
              </li>
            )}
          </ul>
        </div>
      );
    }
  }
}

export default Album;
