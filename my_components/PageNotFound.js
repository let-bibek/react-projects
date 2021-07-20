import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFoundImg from "../media/Flushed_Face_Emoji_grande.webp";
export default function PageNotFound() {
    return (
      <div className="center">
        <div className="container404">
          <h1>4</h1>
          <img src={PageNotFoundImg} alt="Page-not-found" />
          <h1>4</h1>
        </div>
        <div className="pageNotFoundMessage">
          <h3>Couldn't find this page!!!</h3>
          <Link to="/" className="noStyle link">Back To home?</Link>
        </div>
      </div>
    );
}
