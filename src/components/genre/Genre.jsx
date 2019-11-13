import React, { Component } from "react";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import "./Genre.scss";
import { Link } from "react-router-dom";

class Genre extends Component {
  state = {
    genre: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre`
      )
      .then(res => {
        console.log(res);
        this.setState({
          genre: res.data.data,
          loading: false,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { genre } = this.state;
    if (this.state.loading === true) {
      return <Spinner />;
    } else {
      return (
        <div className="row">
          {genre.map(genre => (
            <Link
              className="card bg-dark text-white col-12 col-md-4"
              to={`/genre/${genre.id}`}
            >
              <img
                src={genre.picture_big}
                className="card-img"
                alt={genre.name}
              />
              <div className="card-img-overlay d-flex justify-content-center align-items-center">
                <h1 className="card-title under">
                  {genre.name.toUpperCase()}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      );
    }
  }
}

export default Genre;
