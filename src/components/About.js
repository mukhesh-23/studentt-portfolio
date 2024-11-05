import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import profileImage from './aboutPicc.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false); // New state to toggle details
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFlip = () => setIsFlipped(!isFlipped);

  return (
    <section className="about-container">
      <h2 className="about-heading">
        About <span className="highlight">Me</span>
      </h2>
      <div ref={aboutRef} className={`about d-flex p-4 ${isVisible ? 'visible' : ''}`}>
        <div className="about-text">
          {!isFlipped ? (
            // Main About Content
            <>
              <h3 className="name">I'm Mukhesh</h3>
              <p>
                A third-year B.Tech student specializing in Computer Science with a focus on Data Science and Big Data.
                I enjoy learning how to turn data into meaningful insights and using technology to solve practical problems.
                My coursework has helped me build a strong foundation in programming, data analysis, and algorithms.
                I am always eager to apply what I’ve learned to real-world challenges.
                I look forward to gaining practical experience through an internship, where I can contribute my technical skills and collaborate with others.
                I am excited to embrace new opportunities and continue growing in my field.
              </p>
              <br />
              <p>
                <span className="email-label">Email:</span> mukheshnaraparaju23@gmail.com
                <br />
                <span className="place-label">Place:</span> Ongole, Andhra Pradesh, India-523002
              </p>
              <button onClick={toggleFlip} className="flip-button">
                DETAILS
              </button>
              <a href="/path/to/Resume.pdf" download className="download-button" data-hover="DOWNLOAD">
                <span>RESUME ⮞</span>
              </a>
            </>
          ) : (
            // Additional Details Content
            <>
              <p className="details-heading">
                <strong>Gender:</strong>
                <span className="details-text"> Male</span>
              </p>
              <p className="details-heading">
                <strong>Date of Birth:</strong>
                <span className="details-text"> February 23, 2005</span>
              </p>
              <p className="details-heading">
                <strong>Known Languages:</strong>
                <span className="details-text"> English, Telugu, Hindi</span>
              </p>
              <p className="details-heading">
                <strong>Native Place:</strong>
                <span className="details-text"> Chirala, Andhra Pradesh, India</span>
              </p>
              <p className="details-heading">
                <strong>Hobbies:</strong>
                <span className="details-text"> Cricket, Movies, Music</span>
              </p>
              <button onClick={toggleFlip} className="flip-button">
                Back to About
              </button>
            </>
          )}
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Profile" className="profile-img" width="150" />
        </div>
      </div>
    </section>
  );
};

export default About;
