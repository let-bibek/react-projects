import React from 'react'
import Tour from './Tour';
export default function Tours({tours,removeTour}) {
    return (
      <section>
        <div className="title">
          <h2 className="highlighter">Our Tours</h2>
        </div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
            })}
        </div>
      </section>
    );
}
