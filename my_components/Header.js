import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { navData } from "./data";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);
  const toggler = (index) => {
    setValue(index);
    if (window.innerWidth <= "768") {
      setToggle(!toggle);
    }
  };
  useEffect(() => {
    if (toggle & (window.innerWidth <= "768")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggle]);
  return (
    <div>
      <nav className="topNavigation">
        <div className="navComponents" id="logo">
          <Link to="/">LFCC</Link>
        </div>
        <div className="menu-toggler" onClick={() => setToggle(!toggle)}>
          <div className={`nav-toggle-container ${toggle ? "active" : ""}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 200 200"
            >
              <g strokeWidth="7.5" strokeLinecap="round">
                <path
                  d="M72 82.286h28.75"
                  fill="#009100"
                  fillRule="evenodd"
                  stroke="#fff"
                />
                <path
                  d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                  fill="none"
                  stroke="#fff"
                />
                <path
                  d="M72 125.143h28.75"
                  fill="#009100"
                  fillRule="evenodd"
                  stroke="#fff"
                />
                <path
                  d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                  fill="none"
                  stroke="#fff"
                />
                <path
                  d="M100.75 82.286h28.75"
                  fill="#009100"
                  fillRule="evenodd"
                  stroke="#fff"
                />
                <path
                  d="M100.75 125.143h28.75"
                  fill="#009100"
                  fillRule="evenodd"
                  stroke="#fff"
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          className={`navComponents ${toggle ? "" : "translator"}`}
          id="navComponentsContainer"
        >
          <div className="styler"></div>
          <ul>
            {navData.map((data, index) => {
              const { id, url, navName } = data;
              return (
                <li className="nav-menu-item" key={id}>
                  <Link
                    className={`nav-link ${
                      index === value ? "active-nav-link" : ""
                    }`}
                    to={url}
                    onClick={() => toggler(index)}
                  >
                    {navName}
                  </Link>
                </li>
              );
            })}
            {/* <li className="nav-menu-item">
              <Link
                className={`nav-link`}
                to="/"
                onClick={() => setToggle(!toggle)}
              >
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link
                className={`nav-link `}
                to="/about"
                onClick={() => setToggle(!toggle)}
              >
                About
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link
                className={`nav-link `}
                to="/contact"
                onClick={() => setToggle(!toggle)}
              >
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
