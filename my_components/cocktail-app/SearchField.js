import React,{useRef} from 'react'
import {useGlobalContext} from '../../my_custom_hooks/globalContext'
export default function SearchField() {
    const cockRef = useRef(null);
    const { searchTerm, setsearchTerm } = useGlobalContext();
    const searchCocktail=()=>{
        setsearchTerm(cockRef.current.value);
    }
    function preventdefault(e){
        e.preventDefault();
    }
    return (
      <div className="center section-search">
        <form className="search-form lorem-form color-form" onSubmit={preventdefault}>
          <label htmlFor="searchForm">Search: </label>
          <input
            type="search"
            name="search"
            value={searchTerm}
            onChange={searchCocktail}
            id="searchForm"
            ref={cockRef}
          />
        </form>
      </div>
    );
}
