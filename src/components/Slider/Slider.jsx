import React, { useState } from "react";

import Spinner from "../../components/spinner/Spinner";
import ArtistItem from "../../components/ArtistItem/ArtistItem";

import "./Slider.scss";

const Slider = ({ data, total, initialObj }) => {
  const [currObj, setCurrObj] = useState(initialObj);

  const btnClick = e => {
    const { type } = e.target.dataset;

    if (type === "left") {
      if (currObj > 1) {
        setCurrObj(prevCount => prevCount - 1);
      } else if (currObj === 1) {
        setCurrObj(total);
      }
    }

    if (type === "right") {
      if (currObj < total) {
        setCurrObj(prevCount => prevCount + 1);
      } else if (currObj === total) {
        setCurrObj(1);
      }
    }
  };

  return (
    <div className="slider-wrapper">
      <div className="slider-control">
        <button
          onClick={btnClick}
          data-type="left"
          className="slider-button slider-button__left"
        ></button>
        <button
          onClick={btnClick}
          data-type="right"
          className="slider-button slider-button__right"
        ></button>
      </div>

      {!data ? (
        <Spinner />
      ) : (
        data.map(item => (
          <ArtistItem
            sliderClass={
              currObj === item.position
                ? "visible"
                : currObj > item.position
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
};

export default Slider;
