import React, { useState, useReducer, useEffect } from "react";
import sublinks from "../strap-submenu-app/data";

// ? cart
import reducer from "../cart-app/reducer";
import { cartItems } from "../cart-app/data";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();
const initialState = {
  loading: false,
  cart:cartItems,
  total: 0,
  amount: 0,
};

// ? cocktail app
const cockurl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

 

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ? for stripe and submenu
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [btnlocation, setBtnlocation] = useState({});
  const [pages, setPages] = useState({ page: "", links: [] });

  // ? for cart app
  // const [cart, setCart] = useState(cartItems);

  
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({type:"GET_TOTAL"})
  }, [state.cart]);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increaseItem = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const fetchData= async()=>{
    dispatch({type:"LOADING"})
    const response=await fetch(url);
    const cart=await response.json();
    dispatch({type:"DISPLAY",payload:cart})
  }

useEffect(()=>{
  fetchData();
},[])


// ? for cocktail app

const [cockLoading, setCockLoading] = useState(true);
const [searchTerm, setsearchTerm] = useState("a");
const [cocktails, setCocktails] = useState([]);

const fetchcocktail=async()=>{
  setCockLoading(true);
  try {
    const response = await fetch(`${cockurl}${searchTerm}`);
    const cocktail = await response.json();
    const {drinks}=cocktail;
    if(drinks){
      const newDrinks=drinks.map((drink)=>{
        const { idDrink, strDrink, strDrinkThumb ,strCategory,strGlass} = drink;

        
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strCategory,
          glass: strGlass,
        };
      })
      setCocktails(newDrinks);
    }
    else{
      setCocktails([]);
    }
    
    setCockLoading(false);
  } catch (error) {
    setCockLoading(false)
    console.log(error);
  }
}

useEffect(()=>{
  fetchcocktail()
},[searchTerm])


  // for the sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  // for  the modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // ? for stripe and submenu

  const openNavbar = (text, coordinates) => {
    const pagenbr = sublinks.find((sublin) => sublin.page === text);
    setPages(pagenbr);
    setBtnlocation(coordinates);
    setIsNavbarOpen(true);
  };
  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  const openSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          isModalOpen,
          isSidebarOpen,
          openModal,
          openSidebar,
          closeModal,
          closeSidebar,
          isNavbarOpen,
          isSubmenuOpen,
          openNavbar,
          openSubmenu,
          closeNavbar,
          closeSubmenu,
          btnlocation,
          pages,
          ...state,
          clearCart,
          removeItem,
          increaseItem,
          decreaseItem,
          cockLoading,
          cocktails,
          
          setsearchTerm,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
//? custom hooks
export { AppProvider, AppContext };
