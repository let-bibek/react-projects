import React from 'react'

export default function Categories({ fliterCategories, uniqueCategories }) {
  return (
    <div className="btn-container scrollmenu">
      {uniqueCategories.map((uniqueCategory) => {
        return (
          <button
            className="filter-btn"
            onClick={() => fliterCategories(uniqueCategory)}
            key={uniqueCategory}
          >
            {uniqueCategory}
          </button>
        );
      })}
    </div>
  );
}
