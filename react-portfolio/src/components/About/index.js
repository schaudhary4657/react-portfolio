import React from 'react';
import './styles.css';

function About() {

  return (
    <section id="about" className="about">
      <h1 className="about-heading">ABOUT ME.</h1>
      <div className="container">
        <div className="grid-container">
          <p className="about-para">Sapana Chaudhary is known for being able to bring ideas together to build out the user interface of an application. With every project, my aim is to give users a great experience from the user interface to the backend - ensuring everything works as intended.</p>

          <p className="about-para">Sapana Chaudhary is a Software professional seeking for the career in the Information and Technology field. She has currently graduate with MS degree in Software Engineering at California State University Fullerton. She also holds MBA and BBA degree in Business Administration from Nepal. In short, she is a software professional with the business administration and management skills with over six years of working experience.</p>

          <button className="btn btn-primary about-btn">
            <a 
              href="./assets/SAPANA_CHAUDHARY_RESUME.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              download>
              <i className="fal fa-file-pdf"></i> See my resume
            </a> 
          </button>
        </div>
      </div>
    </section>
  );

};

export default About;