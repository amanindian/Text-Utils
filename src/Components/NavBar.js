import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg px-3 bg-${props.Mode} navbar-${props.Mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i>
              <b>TextUtlis</b>{" "}
            </i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  <b>About</b>
                </Link>{" "}
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Another Projects
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      title="amanindian"
                      target="_blank"
                      rel="noreferrer"
                      href="https://amanindian.netlify.app/"
                    >
                      Portfolio Website
                    </a>
                  </li> 
                  <li>
                    <a
                      class="dropdown-item"
                      title="ShopNow"
                      target="_blank"
                      rel="noreferrer"
                      href="https://shopnowreact.netlify.app/"
                    >
                      E-Commerce
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" title="Make in future" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${props.Mode === "dark" ? "light" : "dark"
                }`}
            >
              <input
                type="checkbox"
                className="form-check-input"
                onClick={props.onMode}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {`${props.Mode === "light"
                  ? "Enable Dark Mode"
                  : "Disable Dark Mode"
                  }`}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Please enter a title",
};

export default Navbar;
