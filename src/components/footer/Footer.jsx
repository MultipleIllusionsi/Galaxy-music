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
        <Link to="/">Browse</Link>
      </li>
      <li className="footer__list-item">
        <Link to="/">Contact</Link>
      </li>
      <li className="footer__list-item">
        <Link to="/">Smth else</Link>
      </li>
    </ul>
    <p className="footer__copyright">Copyright 2019 Marmoset LLC</p>
    <CorpLogo className="corp-logo" />
  </div>
);

export default Footer;
