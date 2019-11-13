import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <header className="header">
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">
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

export default Navbar;
