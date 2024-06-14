import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="about-me">
        <h1>Testimonial</h1>
        <p>WHAT my clients say about Me?</p>
        <div className="trait">
          <span className="primary-trait"></span>
        </div>
      </div>
      <div className="testimonial-content">
        
      </div>
      <div className="testimonial-content-bottom">
        <img src={require("../Testimonial/shape-bg.png")}
        alt="Image"
        />
      </div>
    </div>
  );
};

export default Testimonial;
