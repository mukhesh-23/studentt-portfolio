import React from 'react';
import './SocialLinks.css'; // Optional: create a separate CSS file for styling

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/mukhesh-naraparaju-3bb75128a" className="btn btn-primary m-1">
        <i className="fab fa-linkedin profile-icon"></i>
      </a>
      <a href="https://github.com/mukhesh-23" className="btn btn-dark m-1">
        <i className="fab fa-github profile-icon"></i>
      </a>
      <a href="mailto:your-email@example.com" className="btn btn-info m-1">
        <i className="fas fa-envelope profile-icon"></i>
      </a>
      <a href="https://www.instagram.com/_._mukhesh_.__/" className="btn btn-danger m-1">
        <i className="fab fa-instagram profile-icon"></i>
      </a>
    </div>
  );
};

export default SocialLinks;
