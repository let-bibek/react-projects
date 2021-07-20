import React from 'react'
import CocktailList from '../CocktailList';
import SearchField from '../SearchField';
export default function Home() {
    return (
      <section className="containerReminder margin-20 dark-bg-2-text">
        <SearchField/>
        <CocktailList/>
      </section>
    );
}
