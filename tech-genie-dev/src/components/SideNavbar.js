import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/sideNavbar.css';
import SocialMediaIcons from './SocialMediaIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faFileAlt, faBookOpen } from '@fortawesome/free-solid-svg-icons';

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
                <a className="nav-link" href="#"><FontAwesomeIcon icon={faHome} className="me-2" />Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><FontAwesomeIcon icon={faBook} className="me-2" />Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><FontAwesomeIcon icon={faFileAlt} className="me-2" />E-Books</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><FontAwesomeIcon icon={faBookOpen} className="me-2" />Learning Resources</a>
              </li>
            </ul>
            <SocialMediaIcons/>
          </div>
        </nav>
      </div>
    );
  };
  
  export default SideNavbar;
  