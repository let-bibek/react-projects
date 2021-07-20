import React from "react";
import subLinks from "./data";
import { useGlobalContext } from "../../my_custom_hooks/globalContext";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Submenu() {
  const { isSubmenuOpen, closeSubmenu } = useGlobalContext();
  return (
    <aside className={`sidebar-wrapper ${isSubmenuOpen ? "show" : ""}`}>
      <div className="sidebar-nav">
        <button className="btn close-btn" onClick={closeSubmenu}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {subLinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h3>{page}</h3>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <Link key={index} to={url}>
                        {icon}
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
