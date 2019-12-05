import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as CorpLogo } from "../../assets/corp-logo.svg";

import "./Footer.scss";

const Footer = () => (
  <div className="footer">
    <ul className="footer__list">
      <li className="footer__list-item">
        <Link to="/">Home</Link>
      </li>
      <li className="footer__list-item">
        <Link to="/browse">Browse</Link>
      </li>
      <li className="footer__list-item">
        <Link to="/charts">Charts</Link>
      </li>
      <li className="footer__list-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    <p className="footer__copyright">Copyright 2019 Marmoset LLC</p>
    <CorpLogo className="corp-logo" />
  </div>
);

export default Footer;
