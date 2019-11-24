import React from "react";

import "./Error404.scss";

const Error404 = () => (
  <div className="error-image-overlay">
    <div
      className="error-image-container"
      style={{
        backgroundImage: `url("https://i.imgur.com/lKJiT77.png")`,
      }}
    >
      <div className="error-image-text">A Dog Ate this Page :(</div>
    </div>
  </div>
);

export default Error404;
