import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      style={{ backgroundColor: "white" }}
      class="navbar navbar-expand-lg border-bottom"
    >
      <div class="container-fluid p-2">
        <NavLink to="/">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt="logo"
              style={{ width: "25%", marginLeft: "20%" }}
            />
          </a>
        </NavLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink to="/signup" style={{ textDecoration: "none" }}>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Signup
                  </a>
                </li>
              </NavLink>
              <NavLink to="/about" style={{ textDecoration: "none" }}>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    About
                  </a>
                </li>
              </NavLink>
              <NavLink to="/product" style={{ textDecoration: "none" }}>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Product
                  </a>
                </li>
              </NavLink>
              <NavLink to="/pricing" style={{ textDecoration: "none" }}>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Pricing
                  </a>
                </li>
              </NavLink>
              <NavLink to="/support" style={{ textDecoration: "none" }}>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Support
                  </a>
                </li>
              </NavLink>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
