import React from 'react';
import './styles.css';

function Project({ title, image, desc, link, github}) {
  return (
    <div className="card">
      <div className="card-img_container">
        <img className="card-img" src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="card-buttons">
          <a href={link} rel="noopener noreferrer">
            <button className="btn btn-primary card-btn">View Project</button>
          </a>
          <a href={github} rel="noopener noreferrer">
            <button className="btn btn-secondary card-btn">View Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;