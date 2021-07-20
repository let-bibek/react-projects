import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
export default function Navbar() {
  return (
    <nav className="nav cocktail-nav">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/home/cocktailhome">
            <img src={logo} className="nav-logo logo" alt="logo" />
          </Link>
          <button type="button" className="btn toggle-btn btn-stripe ">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button type="button" className="link-btn">
              <Link to="/home/cocktailhome">Home</Link>
            </button>
          </li>
          <li>
            <button type="button" className="link-btn">
              <Link to="home/cocktailabout">About</Link>
            </button>
          </li>
        </ul>
        <button type="button" className="btn signin-btn">
          Sign in
        </button>
      </div>
    </nav>
  );
}
