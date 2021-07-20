import React,{useState} from 'react'
const StripContext = React.createContext();
const StripProvider = ({ Children }) => {
  return (
    <>
      <StripContext.Provider value="Hello world!">
        {Children}
      </StripContext.Provider>
    </>
  );
};
 export { StripContext, StripProvider };