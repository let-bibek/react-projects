import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../my_custom_hooks/globalContext";
export default function Sidebar() {
  const { isNavbarOpen, btnlocation, pages } = useGlobalContext();
  const { page, links } = pages;
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { centerBtnPos, bottomPos } = btnlocation;
    submenu.style.left = `${centerBtnPos}px`;
    submenu.style.top = `${bottomPos}px`;
    if (pages.links.length === 3) {
      setColumns("col-3");
    }
    if (pages.links.length > 3) {
      setColumns("col-4");
    }
  }, [btnlocation, links]);
  return (
    <div className="submenu-container">
      <aside
        className={`${isNavbarOpen ? "submenu show" : "submenu"}`}
        ref={container}
      >
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <Link to={url} key={index}>
                {icon}
                {label}
              </Link>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
