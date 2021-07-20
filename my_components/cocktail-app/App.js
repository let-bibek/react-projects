import React from 'react'
import { Link } from 'react-router-dom'

export default function App({id,image,name,glass,info}) {
    return (
      <article className="cocktail has-shadow has-bg">
        <div className="img-contaier">
          <img src={image} alt={name} />
        </div>
        <div className="cocktaill-footer has-shadow has-bg p-2">
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
          <Link to={`/home/cocktail/${id}`} className="btn btn-primary btn-details">Details</Link>
        </div>
      </article>
    );
}
