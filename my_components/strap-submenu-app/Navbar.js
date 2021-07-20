import React from "react";

import { useGlobalContext } from "../../my_custom_hooks/globalContext";
import { FaBars } from "react-icons/fa";
import logo from "./images/logo.svg";
export default function Navbar() {
  const { openNavbar, openSubmenu, closeNavbar, closeSubmenu } =
    useGlobalContext();
  const displaySubmenu = (e) => {
    let pageContent = e.target.textContent;
    let btnPos = e.target.getBoundingClientRect();
    let centerBtnPos = (btnPos.left + btnPos.right) / 2 - 35;
    let bottomPos = btnPos.bottom - 90;
    openNavbar(pageContent, { centerBtnPos, bottomPos });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeNavbar();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <button
            type="button"
            className="btn toggle-btn btn-stripe "
            onClick={openSubmenu}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button
              type="button"
              className="link-btn"
              onMouseOver={displaySubmenu}
            >
              products
            </button>
          </li>
          <li>
            <button
              type="button"
              className="link-btn"
              onMouseOver={displaySubmenu}
            >
              developers
            </button>
          </li>
          <li>
            {" "}
            <button
              type="button"
              className="link-btn"
              onMouseOver={displaySubmenu}
            >
              company
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
