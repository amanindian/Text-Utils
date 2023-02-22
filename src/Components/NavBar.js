import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.Mode} navbar-${props.Mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TextUtlis
        </Link>
        <div className=" navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="/">
                Disabled
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`form-check form-switch text-${
            props.Mode === "dark" ? "light" : "dark"
          }`}
        >
          <input
            className="form-check-input"
            onClick={props.onMode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {`${
              props.Mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"
            }`}
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Please enter a title",
};
export default Navbar;
