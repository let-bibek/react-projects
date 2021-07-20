import React from "react";

import './index.css';
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../my_custom_hooks/globalContext";
const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();
  
 
  return (
    <main className="modal-main">
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
