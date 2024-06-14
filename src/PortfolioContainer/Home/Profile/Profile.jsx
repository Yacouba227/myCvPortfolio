import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import Marquee from "react-fast-marquee";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-test">
              {" "}
              Hello I'M <span className="highlighted-text">Yacoubou</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Mobile dev 📱",
                    1000,
                    "Fll stack dev 💻",
                    1000,
                    "React/React native dev 🌐",
                    1000,
                    "Angular/ionic dev 🌐",
                    1000,
                    "Windev dev 🖥️",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates harum quasi
              </span>
            </span>
          </div>
          <div className="profile-optins">
            <button className="btn primary-btn"> Hire Me {""}</button>
            <a href="cvYac.pdf" download="Yacoubou cvYac.pdf">
              <button className="btn highlighted-btn">Get resume</button>
            </a>
          </div>
          {<Marquee className="d-flex marquer">
            <div className="image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ionic-logo-landscape.svg/1200px-Ionic-logo-landscape.svg.png"
                alt=""
              />
            </div>
            <div className="image">
              <img
                src="https://e7.pngegg.com/pngimages/490/824/png-clipart-product-design-logo-brand-trademark-javascript-logo-text-trademark.png"
                alt=""
              />
            </div>
            <div className="image">
              <img
                src="https://upload.wikimedia.org/wikipedia/fr/c/cc/Logo_windev_27.png"
                alt=""
              />
            </div>
            <div className="image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt=""
              />
            </div>
          </Marquee>}
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
