import React from "react";

import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "./Navbar.scss";

const Navbar = ({ location: { pathname } }) => {
  let style =
    pathname.includes("album") ||
    pathname.includes("playlist") ||
    pathname.includes("charts")
      ? { color: "black" }
      : { color: "whitesmoke" };

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar__list" style={style}>
          <li className="navbar__list-item logo">
            <NavLink to="/">Galaxy</NavLink>
          </li>
          <li className="navbar__list-item">
            <NavLink to="/browse">Browse</NavLink>
          </li>
          <li className="navbar__list-item">
            <NavLink to="/charts">Charts</NavLink>
          </li>
          <li className="navbar__list-item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navbar);
