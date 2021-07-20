import React from "react";
import ReviewComp from "./ReviewComp";
export default function ReviewApp() {
  return (
    <section>
      <h3 className="textCenter indicator titleHead">Review App</h3>

      <div className="title">
        <h2 className="highlighter">Testimonials</h2>
      </div>
      <div className="single-tour reviewApp">
          <ReviewComp/>
      </div>
    </section>
  );
}
