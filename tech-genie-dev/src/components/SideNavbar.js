import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/sideNavbar.css';

const SideNavbar = () => {
    return (
      <div className="sidebar main_box">
        <nav className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse sidebar_menu" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto flex-column menu">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">E-Books</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Learning Resources</a>
              </li>
            </ul>
            <div className="social-media">
                {/* TODO */}
            </div>
          </div>
        </nav>
      </div>
    );
  };
  
  export default SideNavbar;
  