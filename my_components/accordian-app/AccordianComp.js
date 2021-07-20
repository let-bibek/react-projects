import React,{useState} from 'react';
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai';
export default function AccordianComp({title,info}) {
    const [expand, setExpand] = useState(0);
    return (
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn-question" onClick={() => setExpand(!expand)}>
            {expand ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        <p>{expand ? info : null}</p>
      </article>
    );
}
