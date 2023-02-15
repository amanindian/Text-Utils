import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.Mode} navbar-${props.Mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">TextUtlis</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">Disabled</a>
            </li>
          </ul>
        </div>
        <div className={`form-check form-switch text-${props.Mode === "dark" ? "light" : "dark"}`}>
          <input className="form-check-input" onClick={props.onMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{
              `${props.Mode === "light" ? "Enable Dark Mode" : "Disabled Dark Mode"}`
            }
          </label>
        </div>
      </div>
    </nav>
  )
};

Navbar.propTypes = {
  title: PropTypes.string
};


Navbar.defaultProps = {
  title: "Please enter a title"
};
export default Navbar;