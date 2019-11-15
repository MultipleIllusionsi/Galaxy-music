import React from "react";
import "./CtaButton.scss";

const CtaButton = ({ children }) => (
  <div className="cta-button--wrapper">
    <div className="cta-button">{children}</div>
  </div>
);

export default CtaButton;
