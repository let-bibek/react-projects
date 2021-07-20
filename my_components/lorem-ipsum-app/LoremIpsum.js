import React,{useState} from 'react'
import data from './data';
export default function LoremIpsum() {
    const [countParagrapg, setCountParagrapg] = useState(1);
    const [text, setText] = useState([]);
    const handleSubmition=(e)=>{
        
        e.preventDefault();
        let count=parseInt(countParagrapg);
        if(count>data.length){
            count=data.length-5;
        }
        setText(data.slice(0,count));
    }
    return (
      <div className="my-2 center">
        <h3 className="textCenter indicator titleHead">Lorem Ipsum</h3>
        <section className="my-2">
          <div className="title">
            <h3 className="highlighter">Tired of boring lorem ipsum?</h3>
          </div>
          <form className="lorem-form color-form" onSubmit={handleSubmition}>
            <label htmlFor="numberOfPara">Paragraphs:</label>
            <input
              type="number"
              name="numberOfPara"
              value={countParagrapg > 0 ? countParagrapg : ""}
              onChange={(e) => setCountParagrapg(e.target.value)}
              id="numberOfPara"
            />
            <button type="submit" className="filter-btn">
              Generate
            </button>
          </form>
          <article className="lorem-text">
            {text.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </article>
        </section>
      </div>
    );
}
