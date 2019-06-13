/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark text-center Nav-bar">
      <div
        role="navigation"
        className="navbar-nav display-5 col-12 col-md-6 justify-content-center"
      >
        <NavLink className="nav-item nav-link" to="/" activeClassName="active">
          Diplom Music Project
        </NavLink>
      </div>

      <div role="navigation" className="navbar-nav h4 p-0 col-12 col-md-6">
        <NavLink
          className="nav-item nav-link col-4 col-md-4 offset-md-2"
          to="/charts"
          activeClassName="active"
        >
          Top Charts
        </NavLink>
        <NavLink
          className="nav-item nav-link col-4 col-md-3"
          to="/genre"
          activeClassName="active"
        >
          Genres
        </NavLink>
        <NavLink
          className="nav-item nav-link col-4 col-md-3"
          to="/search"
          activeClassName="active"
        >
          Search
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
