import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ContactForm from './components/ContactForm';
import profileImage from './profile.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);
  const navbarHeight = 60;

  const scrollToSection = (ref) => {
    const yOffset = navbarHeight;
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    const sections = [aboutRef, skillsRef, educationRef, projectsRef, certificationsRef, contactRef];
    const options = { root: null, threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute('data-section'));
        }
      });
    }, options);

    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      }
    });

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection('Home');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, [aboutRef, skillsRef, educationRef, projectsRef, certificationsRef, contactRef]);

  return (
    <div className="App">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ aboutRef, skillsRef, educationRef, projectsRef, certificationsRef, contactRef }}
        activeSection={activeSection}
      />
      
      <Router>
        <div className="video-background">
          <video autoPlay loop muted>
            <source src="your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <header
          className="App-header"
          style={{
            backgroundColor: "#adacac",
            borderRadius: "15px",
            padding: "20px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '20px',
          }}
        >
          <div className="header-content">
            <h1 className="header-text">
              Hi there,<br />
              I'm <span className="highlight">Mukhesh Naraparaju !</span>
            </h1>
          </div>
          <img src={profileImage} alt="Profile" className="header-image" />
        </header>

        <main className="container">
          <section className="section" ref={aboutRef} data-section="About">
            <About />
          </section>
          <section className="section" ref={skillsRef} data-section="Skills">
            <Skills />
          </section>
          <section className="section" ref={projectsRef} data-section="Projects">
            <Projects />
          </section>
          <section className="section" ref={certificationsRef} data-section="Certifications">
            <Certifications />
          </section>
          <section className="section" ref={educationRef} data-section="Education">
            <Education />
          </section>
          <section className="section" ref={contactRef} data-section="Contact">
            <ContactForm />
          </section>
        </main>

        <footer className="App-footer">
          <div className="footer-content">
            <div className="footer-half">
              <h3>Mukhesh's Portfolio</h3>
              <p>Thank you for exploring my portfolio! Feel free to connect with me on social platforms.</p>
              <p>Keep pushing boundaries <i className="fa-solid fa-heart"></i>. Let's chat live!</p>
            </div>
            <div className="footer-half">
              <h3>Quick Links <i className="fa-solid fa-link"></i></h3>
              <ul>
                <li onClick={() => scrollToSection(aboutRef)}>▸ About</li>
                <li onClick={() => scrollToSection(skillsRef)}>▸ Skills</li>
                <li onClick={() => scrollToSection(projectsRef)}>▸ Projects</li>
                <li onClick={() => scrollToSection(certificationsRef)}>▸ Certifications</li>
                <li onClick={() => scrollToSection(educationRef)}>▸ Education</li>
                <li onClick={() => scrollToSection(contactRef)}>▸ Contact</li>
              </ul>
            </div>
            <div className="footer-half">
              <h3>Contact Info</h3>
              <p><i className="fa-solid fa-phone"></i> +91 9059059677</p>
              <p><i className="fa-solid fa-envelope"></i> mukheshnaraparaju23@gmail.com</p>
              <p><i className="fa-solid fa-location-dot"></i> Ongole, Andhra Pradesh, India - 523002</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/mukhesh-naraparaju-3bb75128a/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/mukhesh-23" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="mailto:mukheshnaraparaju23@gmail.com" className="social-link">
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="https://t.me/mukhesh-23" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-telegram"></i>
                </a>
                <a href="https://www.instagram.com/_._mukhesh_.__/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <hr className="footer-divider" />
          <p>&copy; {new Date().getFullYear()} Mukhesh Naraparaju. All rights reserved.</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
