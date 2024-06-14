import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-container-content">
        <div className="about-me">
          <h1>About Me</h1>
          <p>Why choose Me?</p>
          <div className="trait">
            <span className="primary-trait"></span>
          </div>
        </div>
        <div className="about-content">
          <div className="about-picture">
            {/* <img src="myIMG.jpg" alt="My  image" />  */} <h1>image</h1>
          </div>
          <div className="about-me-content">
            <div className="about-top">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur cum eius dignissimos dolorem a officiis quo ipsum
              numquam, ducimus adipisci, enim iusto accusantium odit illum
              aliquam velit nihil aspernatur illo!
            </div>
            <div className="about-bottom">
              <h4>Here are a few Highlights :</h4>
              <div className="meme">
                <span className="primary-color"></span>
                <span className="meme-style">Full stack web developement</span>
              </div>
              <div className="meme">
                <span className="primary-color"></span>
                <span className="meme-style">Full stack web developement</span>
              </div>
              <div className="meme">
                <span className="primary-color"></span>
                <span className="meme-style">Full stack web developement</span>
              </div>
              <div className="meme">
                <span className="primary-color"></span>
                <span className="meme-style">Full stack web developement</span>
              </div>
              <div className="meme">
                <span className="primary-color"></span>
                <span className="meme-style">Full stack web developement</span>
              </div>
              <div className="meme">
                <span className="primary-color"></span>
                <span className="meme-style">Full stack web developement</span>
              </div>
              <div className="profile-optins">
                <button className="btn primary-btn"> Hire Me {""}</button>
                <a href="cvYac.pdf" download="Yacoubou cvYac.pdf">
                  <button className="btn highlighted-btn">Get resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
