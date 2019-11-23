import React from "react";
import { Link } from "react-router-dom";

import "./CtaButton.scss";

const CtaButton = ({ children, to }) => (
  <div className="CtaButton__wrapper">
    <Link className="CtaButton__link" to={to}>
      <div className="CtaButton__inner">{children}</div>
    </Link>
  </div>
);

export default CtaButton;
