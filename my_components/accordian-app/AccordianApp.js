import React from 'react'
import data from './data';
import AccordianComp from './AccordianComp';
export default function AccordianApp() {
    const questions = data;
    return (
      <section>
        <h3 className="textCenter indicator titleHead">Accordian</h3>

        <div className="single-tour accordianApp">
          
          <div>
            <h4 className="title highlighter">Questions and answer about login</h4>
            <section>
                {
                    questions.map((question)=>{
                        return <AccordianComp key={question.id} {...question}/>
                    })
                }
            </section>
          </div>
        </div>
      </section>
    );
}
