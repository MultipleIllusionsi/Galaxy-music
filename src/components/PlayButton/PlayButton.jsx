import React from "react";
import { Link } from "react-router-dom";

import "./PlayButton.scss";

const PlayButton = ({ to }) => (
  <Link to={`${to}`}>
    <div className="play-button"></div>
  </Link>
);

export default PlayButton;
