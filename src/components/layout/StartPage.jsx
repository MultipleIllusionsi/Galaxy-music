import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./StartPage.jpg";
import "./StartPage.css";

class StartPage extends Component {
  render() {
    return (
      <div className="StartPage max shadow-component">
        <h1 className="text-center StartPage-header pt-5">Music App</h1>
        <div className="row mt-5 text-center">
          <div class="card col-12 col-md-4">
            <div class="card-body">
              <p class="card-text">
                Актуальная информация по самым популярным песням, лучшим
                артистам, альбомам и плейлистам
              </p>

              <Link to="/charts" className="btn btn-primary btn-lg">
                Top Charts
              </Link>
            </div>
          </div>

          <div class="card col-12 col-md-4">
            <div class="card-body ">
              <p class="card-text">
                Музыка, отсортированная по топовым жанрам и самым популярным
                исполнителям в этом жанре
              </p>
              <Link to="/genre" className="btn btn-primary btn-lg ">
                Genres
              </Link>
            </div>
          </div>

          <div class="card col-12 col-md-4">
            <div class="card-body">
              <p class="card-text">
                Поиск музыки с подробной информацией по исполнителям, песням и
                альбомам
              </p>
              <Link to="/search" className="btn btn-primary btn-lg">
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StartPage;
