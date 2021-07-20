import React from "react";
import { useGlobalContext } from "../../my_custom_hooks/globalContext";
import Loading from "../Loading";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

// items
export default function Cart() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="my-2 center">
        <Loading />
      </div>
    );
  }
  return (
    <section className="my-2  has-shadow">
      <h3 className="textCenter indicator">Cart</h3>

      <Navbar />
      <CartContainer />
    </section>
  );
}
