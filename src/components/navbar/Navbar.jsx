import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "./Navbar.scss";

const Navbar = ({ location: { pathname } }) => {
  const [isOpen, setOpen] = useState(false);

  let style =
    pathname.includes("album") ||
    pathname.includes("playlist") ||
    pathname.includes("charts")
      ? { color: "black" }
      : { color: "whitesmoke" };

  return (
    <header className="header">
      <nav style={style} className="navbar">
        <div className="logo">
          <NavLink to="/">Galaxy</NavLink>
        </div>
        <button
          onClick={() => setOpen(!isOpen)}
          className="hamburger"
          aria-label="Open the menu"
        >
          <span></span>
        </button>
        <ul
          className={`navbar__list ${
            isOpen ? "navbar__list--opened" : ""
          } `}
          onClick={() => setOpen(false)}
        >
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
