import React, { Component } from "react";

import Spinner from "../../components/spinner/Spinner";
import ArtistItem from "../../components/ArtistItem/ArtistItem";

import "./Slider.scss";

class Slider extends Component {
  state = {
    currentObj: this.props.initialObj,
    total: this.props.total,
  };

  btnClick = ({ target }) => {
    if (target.dataset.type === "left") {
      if (this.state.currentObj > 1) {
        this.setState((prevState, _props) => ({
          currentObj: prevState.currentObj - 1,
        }));
      } else if (this.state.currentObj === 1) {
        this.setState(() => ({
          currentObj: this.state.total,
        }));
      }
    }

    if (target.dataset.type === "right") {
      if (this.state.currentObj < this.state.total) {
        this.setState((prevState, _props) => ({
          currentObj: prevState.currentObj + 1,
        }));
      } else if (this.state.currentObj === this.state.total) {
        this.setState(() => ({
          currentObj: 1,
        }));
      }
    }
  };

  render() {
    const { currentObj } = this.state;
    console.log("---render from slider---");
    return (
      <div className="slider-wrapper">
        <div className="slider-control">
          <button
            onClick={this.btnClick}
            data-type="left"
            className="slider-button slider-button__left"
          ></button>
          <button
            onClick={this.btnClick}
            data-type="right"
            className="slider-button slider-button__right"
          ></button>
        </div>

        {!this.props.data ? (
          <Spinner />
        ) : (
          this.props.data.map(item => (
            <ArtistItem
              sliderClass={
                currentObj === item.position
                  ? "visible"
                  : currentObj > item.position
                  ? "invisible-left"
                  : "invisible-right"
              }
              data={item}
              key={item.id}
            />
          ))
        )}
      </div>
    );
  }
}

export default Slider;
