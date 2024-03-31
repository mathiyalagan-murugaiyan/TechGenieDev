import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/header.css'

const Header = ({ title }) => {
    return (
      <header className="text-center">
        <h1>{title}</h1>
      </header>
    );
  };

export default Header;
