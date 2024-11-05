import React from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar({ scrollToSection, refs, activeSection }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ color: '#61808F', textDecoration: 'none' }}
        >
          <i className="fas fa-star"></i> Welcome
        </a>
      </div>
      <ul className="navbar-links">
        <li>
          <a 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className={activeSection === 'Home' ? 'active' : ''}
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={() => scrollToSection(refs.aboutRef)}
            className={activeSection === 'About' ? 'active' : ''}
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={() => scrollToSection(refs.skillsRef)}
            className={activeSection === 'Skills' ? 'active' : ''}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            onClick={() => scrollToSection(refs.projectsRef)}
            className={activeSection === 'Projects' ? 'active' : ''}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            onClick={() => scrollToSection(refs.certificationsRef)}
            className={activeSection === 'Certifications' ? 'active' : ''}
          >
            Achivements
          </a>
        </li>
        <li>
          <a
            onClick={() => scrollToSection(refs.educationRef)}
            className={activeSection === 'Education' ? 'active' : ''}
          >
            Education
          </a>
        </li>
        <li>
          <a
            onClick={() => scrollToSection(refs.contactRef)}
            className={activeSection === 'Contact' ? 'active' : ''}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
