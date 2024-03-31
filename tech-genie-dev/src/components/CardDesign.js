  import React from 'react';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import '../css/cardDesign.css'

  const CardDesign = ({ title, imageName, description }) => {
    return (
      <div className="card">  
        <img src={imageName} className="card-img-top" alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-outline-primary btn-sm">Udemy Course</a>
        </div>
      </div>
    );
  };

  export default CardDesign;
