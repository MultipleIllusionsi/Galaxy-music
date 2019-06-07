/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark text-center Nav-bar">
      <div className=" navbar-brand display-5 m-0  col-12 col-md-6">
        Diplom Music Project
      </div>

      <div role="navigation" className="navbar-nav h4 p-0 col-12 col-md-6">
        <NavLink
          className="nav-item nav-link col-4 col-md-3 offset-md-3"
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
          to="/"
          activeClassName="active"
        >
          Search
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
