
import React from 'react'
import App from './App';
import Loading from '../Loading';
import { useGlobalContext } from '../../my_custom_hooks/globalContext'
export default function SingleCocktail() {
    const { cocktails, cockLoading } = useGlobalContext();

    if(cockLoading){
        return <Loading/>
    }
    if (cocktails.length < 1) {
      return (
        <h2 className="section-title">
          No Cocktails matched your search criteria.
        </h2>
      );
    }
    return (
        <section className="main">
            <h2 className="center highlight-text">Cocktails</h2>
            <div className="cocktails-center center my-2">
                
           {
               cocktails.map((cocktail)=>{
                return <App key={cocktail.id} {...cocktail} />
               })
              
           }
            </div>
        </section>
    )
}