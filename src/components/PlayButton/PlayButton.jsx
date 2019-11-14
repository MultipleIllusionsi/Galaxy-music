import React from "react";
import { Link } from "react-router-dom";

import "./PlayButton.scss";

const PlayButton = ({ to, type }) => {
  let classes;
  if (type === "hover") {
    classes = "play-button__hover";
  } else {
    classes = "play-button__usual";
  }

  return (
    <Link to={`${to}`}>
      <div className={classes}></div>
    </Link>
  );
};

export default PlayButton;
