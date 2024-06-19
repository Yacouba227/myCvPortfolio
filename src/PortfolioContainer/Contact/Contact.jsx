import React from "react";
import "./Contact.css";
import Typical from "react-typical";

const Contact = () => {
  return (
    <div className="contact-container">
        <div className="about-me">
          <h1>Contact Me</h1>
          <p>Lets keep in touch?</p>
          <div className="trait">
            <span className="primary-trait"></span>
          </div>
        </div>
      <div className="contact-container-content">
        <div className="getIn">
          <span className="primary-text">
            {" "}
            <h1>
              {" "}
              <Typical loop={Infinity} steps={[
                "Get In Touch 📧",
                 1000,
                 "Check location 🗺️",
                 1000
                ]} />
            </h1>
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
            <div className="icon-photo">
              <span>Send your email here or check here my location !</span>
              <div className="emai-icon">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.06040826092!2d2.1050521859452798!3d13.531884298980643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11d0754a14323b47%3A0x67409acc1f19285b!2sEPI%20Niger%2C%20L&#39;Ecole%20Priv%C3%A9e%20d&#39;Ing%C3%A9nierie%20du%20Niger!5e0!3m2!1sfr!2sfr!4v1718363307869!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{border:"0"}}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </span>
        </div>
        <div className="input-content">
          <div className="input-balise">
            <form action="">
              <label htmlFor="">Nom</label>
              <br />
              <input type="text" placeholder="Nom & prènom" />
              <br />
              <label htmlFor="">Email</label>
              <br />
              <input type="email" name="" id="" placeholder="Email" />
              <br />
              <label htmlFor="">Message</label>
              <textarea name="" id="" placeholder="Message"></textarea>
              <button className="btn primary-btn">
                {" "}
                Send <i
                  style={{ marginLeft: "2%" }}
                  className="fa fa-send"
                ></i>{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
