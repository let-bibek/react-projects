import React from "react";
import PhoneImg from "./images/phone.svg";
import { useGlobalContext } from "../../my_custom_hooks/globalContext";
export default function Hero() {
  const { closeSubmenu, closeNavbar } = useGlobalContext();

  return (
    <div className="hero" onMouseOver={closeNavbar}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Jelly sweet roll jelly beans biscuit.</h1>
          <p>
            Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
            Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
            Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
            drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton
            candy gummi bears chocolate bar cake cookie.
          </p>
        </article>
        <article className="hero-images">
          <img src={PhoneImg} className="phone-img" alt="Phone" />
        </article>
      </div>
    </div>
  );
}
