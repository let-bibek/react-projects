import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import { useGlobalContext } from "../../my_custom_hooks/globalContext";
export default function Strap() {
  return (
    <main className="my-2 center has-shadow strap-container">
      <h3 className="textCenter indicator titleHead">Strap and Submenu</h3>
      <Navbar />
      <Hero />
      <Submenu />

      <Sidebar />
    </main>
  );
}
