import React from 'react'

import "../styles/root.css";
import "../App.css";
import AccordianApp from './accordian-app/AccordianApp';
import Colors from './color-generator-app/Colors';
import GroceryBud from './grocerybud-app/GroceryBud';
import LoremIpsum from './lorem-ipsum-app/LoremIpsum';
import Menu from './menu-app/Menu';
import ReminderProject from "./reminderApp/ReminderProject";
import ReviewApp from './review-app/ReviewApp';
import Slider from './slider-app/Slider';
import Tab from './tab-app/Tab';
import ToursApp from './tours-app/ToursApp';
import App from './navbar-and-modal/App';
import Strap from "./strap-submenu-app/Strap";
import { StripProvider } from "./strap-submenu-app/Context";
import Cart from './cart-app/Cart';
import Cocktail from './cocktail-app/Cocktail';
export default function Home() {
    return (
      <div className="containerReminder">
        <ReminderProject />
        <ToursApp />
        <ReviewApp />
        <AccordianApp />
        <Menu />
        <Tab />
        <Slider />
        <LoremIpsum />
        <Colors />
        <GroceryBud />
        <App />
        <Strap />
        <Cart/>
       <Cocktail/>
      </div>
    );
}
