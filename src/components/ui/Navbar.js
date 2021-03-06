import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Heroes
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/marvel"
            >
              Marvel
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/dc"
            >
              DC
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/search"
            >
              Search
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
