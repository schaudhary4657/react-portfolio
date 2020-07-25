import React from "react";
import "./styles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a
          href="https://github.com/schaudhary4657"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social_link"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sapana-chaudhary-b86a93a2/"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social_link"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.facebook.com/sapanac"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social_link"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/sappu23/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social_link"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
