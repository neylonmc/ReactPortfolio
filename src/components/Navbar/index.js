import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <nav className="nav" id="navbar">
        <img
          src={logo}
          alt="logo"
          style={{ width: "200px", height: "40px", margin: "10px" }}
        />
        <div className="nav-content">
          <ul className="nav-items">
            <Link to="/work" className="nav-item">
              Work
            </Link>
            <Link to="/contact" className="nav-item">
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}
