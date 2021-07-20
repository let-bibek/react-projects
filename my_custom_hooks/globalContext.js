import {  useContext } from "react";
import { AppContext } from "../my_components/navbar-and-modal/context";
export const useGlobalContext = () => {
  return useContext(AppContext);
};


