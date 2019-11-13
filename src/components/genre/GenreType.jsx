import React, { Component } from "react";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";

import "./Genre.scss";

class GenreType extends Component {
  state = { dataGenre: [], dataArtist: [], loading: false };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${this.props.match.params.id}`
      )
      .then(res => {
        this.setState({
          dataGenre: res.data,
          loading: false,
        });
        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${this.props.match.params.id}/artists`
        );
      })
      .then(res => {
        this.setState({
          dataArtist: res.data.data,
          loading: false,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.loading === true) {
      return <Spinner />;
    } else {
      return (
        <div>
          <div className="row justify-content-around">
            <button
              onClick={this.props.history.goBack}
              className="btn btn-dark btn-sm my-4"
            >
              Go Back
            </button>
            <h3 className="my-4">
              {this.state.dataGenre.name} Top Artists
            </h3>
          </div>

          <div className="row">
            {this.state.dataArtist.map(item => (
              <Link
                className="card bg-dark text-white col-12 col-md-4"
                to={`/genre/${this.props.match.params.id}/artist/${item.id}`}
              >
                <img
                  src={item.picture_big}
                  className="card-img"
                  alt={item.name}
                />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <h1 className="card-title under">
                    {item.name.toUpperCase()}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default GenreType;
