import React from "react";
import { Link } from "react-router-dom";

import "./PlayLink.scss";

const PlayLink = ({ to, type }) => {
  let classes;
  if (type === "hover") {
    classes = "play-link__hover";
  } else {
    classes = "play-link__usual";
  }

  return (
    <Link to={`${to}`}>
      <div className={classes}></div>
    </Link>
  );
};

export default PlayLink;
