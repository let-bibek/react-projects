import React,{useState} from 'react'
import SingleColor from './SingleColor';
import Values from 'values.js'
export default function Colors() {
    const [color, setColor] = useState("");
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values("#009ffc").all(10));
    function handleSubmit(e){
        e.preventDefault();
        try {
            setError(false);
            let colors=new Values(color).all(5);
            setList(colors);
            
        } catch (err) {
            setError(true);
        }
    }
    return (
      <div className="my-2">
        <h3 className="textCenter indicator titleHead">Color Code Generator</h3>
        <div className="title">
          <h3 className="highlighter">
            Enter the color Code to generate shades{" "}
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="lorem-form color-form">
          <label htmlFor="color_label">Color Generator: </label>
          <input
            type="text"
            name="color_label"
            id="color_label"
            className={`${error ? "error" : null}`}
            value={color}
            placeholder="#009ffc"
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="filter-btn">
            Submit
          </button>
        </form>
        <section className="lorem-text grid-responsive-small">
          {error ? (
            <h3 className="error">
              Error occurred! Plesase, try with different code.
            </h3>
          ) : (
            list.map((color, index) => {
              return (
                <SingleColor
                  key={index}
                  {...color}
                  index={index}
                  hexColor={color.hex}
                  className="singleColor"
                />
              );
            })
          )}
        </section>
      </div>
    );
}
