import React from 'react'
import Navbar from './Navbar';
import CocktailHome from './pages/CocktailHome'
export default function Cocktail() {
    return (
      <section className="my-2  has-shadow cocktail-app">
        <h3 className="textCenter indicator margin-20">COCKTAIL STORE</h3>     
            <Navbar/>
            <CocktailHome/>
      </section>
    );
}
