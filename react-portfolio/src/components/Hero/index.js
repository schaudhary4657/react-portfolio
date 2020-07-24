import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-heading">Hi, I'm <span className="accent-text">Sapana Chaudhary</span></h1>
      <p className="hero-subheading">I am a software engineer and web developer based in Fullerton, California who enjoys building web applications. See my projects on Github, professional profile on LinkedIn, or download my resume.</p>

      <div className="hero-social">
        <a 
          href="https://github.com/schaudhary4657" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-social_link">
          <i className="fab fa-github"></i>
        </a>
        <a 
          href="https://www.linkedin.com/in/sapana-chaudhary-b86a93a2/"
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-social_link">
          <i className="fab fa-linkedin"></i>
        </a>
        <a 
          href="tel: +7147327295" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-social_link">
          <i className="fal fa-phone-square-alt"></i>
        </a>
        <a 
          href="mailto: sapana.chy23@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-social_link">
          <i className="fal fa-envelope"></i>
        </a>
        <a 
          href="./SAPANA_CHAUDHARY_RESUME.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-social_link" 
          download>
          <i className="fal fa-file-pdf"></i>
        </a> 
      </div>

      <div className="hero-buttons">
        <Link className="" to="/portfolio">
          <button className="btn btn-primary hero-btn">View Portfolio</button>
        </Link>

        <Link className="" to="/contact">
          <button className="btn btn-secondary hero-btn">Contact Me</button>
        </Link>
      </div>

    </section>
  );
};

export default Hero;