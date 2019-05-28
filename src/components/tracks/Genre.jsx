import React, { Component } from "react";
import axios from "axios";
import "./Genre.css";

class Genre extends Component {
  log = () => {
    console.log(this.props.match.params.type); // выбранный раздел
  };
  render() {
    return (
      <div className="row">
        {this.log()}
        <a
          className="card bg-dark text-white col-12 col-md-6"
          href="/genre/pop/14"
        >
          <img
            src="https://i3.wp.com/www.vanyaland.com/wp-content/uploads/2018/03/BillieEilish26_CreditNatashaMoustache-1920x1280.jpg"
            className="card-img"
            alt="pop"
          />
          <div className="card-img-overlay d-flex justify-content-center align-items-center">
            <h1 className="card-title under">POP</h1>
          </div>
        </a>

        <a
          className="card bg-dark text-white col-12 col-md-6 "
          href="/genre/rock/21"
        >
          <img
            src="https://junkee.com/wp-content/uploads/2019/04/BMTH_SYD_JORDAN_MUNNS-6.jpg"
            className="card-img"
            alt="rock"
          />
          <div className="card-img-overlay d-flex justify-content-center align-items-center ">
            <h1 className="card-title under">ROCK</h1>
          </div>
        </a>

        <a
          className="card bg-dark text-white col-12 col-md-6"
          href="/genre/rap/18"
        >
          <img
            src="https://i.ytimg.com/vi/sp6kUixpVzQ/maxresdefault.jpg"
            className="card-img"
            alt="rap"
          />
          <div className="card-img-overlay d-flex justify-content-center align-items-center">
            <h1 className="card-title under">RAP</h1>
          </div>
        </a>

        <a
          className="card bg-dark text-white col-12 col-md-6"
          href="/genre/electronic/7"
        >
          <img
            src="https://i.ytimg.com/vi/NItF_vRWj7E/maxresdefault.jpg"
            className="card-img"
            alt="electronic"
          />
          <div className="card-img-overlay d-flex justify-content-center align-items-center">
            <h1 className="card-title under">ELECTRONIC</h1>
          </div>
        </a>
      </div>
    );
  }
}

export default Genre;
