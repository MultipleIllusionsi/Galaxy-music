import React from "react";

import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "./Navbar.scss";

const Navbar = ({ location: { pathname } }) => {
  let style =
    pathname.includes("album") || pathname.includes("playlist")
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
            <NavLink to="/charts">Charts</NavLink>
          </li>
          <li className="navbar__list-item">
            <NavLink to="/genre">Genres</NavLink>
          </li>
          <li className="navbar__list-item">
            <NavLink to="/search">Search</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navbar);
