
import "./index.css";
import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'

const Nav = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linkContainerRef = useRef(null);
    const linksRef = useRef(null);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <span>Bibek </span>

          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
       
          <div className="links-container" ref={linkContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
       
        <ul className="social-icons">
          {social.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url} target="_blank">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nav
