/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark text-center Nav-bar">
      <div className="m-0  col-12 col-md-6">
        <a className="navbar-brand display-5" href="/">
          Diplom Music Project
        </a>
      </div>

      <div role="navigation" className="navbar-nav h4  p-0 col-12 col-md-6">
        <a
          className="nav-item nav-link active col-4 col-md-3 offset-md-4"
          href="/charts"
        >
          Top Charts
        </a>
        <a className="nav-item nav-link col-4 col-md-3" href="/genre">
          Genre
        </a>
        <a className="nav-item nav-link  col-4 col-md-2" href="#">
          <i className="fas fa-user-cog" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
