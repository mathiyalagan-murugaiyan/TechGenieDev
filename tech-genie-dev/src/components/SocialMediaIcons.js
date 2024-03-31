import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/socialMediaIcons.css';

const SocialMediaIcons = () => {
  return (
    <div className="social_media">
      <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
      <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
    </div>
  );
}

export default SocialMediaIcons;
