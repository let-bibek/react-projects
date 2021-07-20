import React,{useState,useEffect} from 'react'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
export default function Slider() {
    const [person, setPerson] = useState(data);
    const [index, setIndex] = useState(0);
    // ? last index and first index handler
useEffect(()=>{
  const lastIndex=person.length-1;
    if(index<0){
      setIndex(lastIndex);
    }
    if(index>lastIndex){
      setIndex(0);
    }
},[index,person])

//? auto slide
useEffect(() => {
  let slider=setInterval(() => {
    setIndex(index+1);
  }, 3000);
  return ()=>{clearInterval(slider)}
}, [index])

    return (
      <div className="my-2">
        <h3 className="textCenter indicator titleHead">Slider</h3>
        <div className="title">
          <h3 className="highlighter">Reviews</h3>
        </div>
        <div className="section-center-slider">
          {person.map((person, perIndex) => {
            const { image, name, title, quote } = person;

            let position = "nextSlide";
            if (perIndex === index) {
              position = "activeSlide";
            }
            if (
              perIndex === index - 1 ||
              (index === 0 && perIndex === person.length)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={`article-slider ${position}`} key={perIndex}>
                <div className="img-container">
                  <img src={image} alt={name} className="person-image" />
                </div>
                <h4>{name}</h4>
                <p className="person-title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon icon-quote-right" />
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>

          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    );
}
