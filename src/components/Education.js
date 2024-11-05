import React from 'react';
import './Education.css';
import kluImage from './klu.jpg'; // Import the image for the first item
import aboutPic from './sri.avif'; // Import the image for the second item
import narayanaImage from './narayana.png'; // Import the image for the third item

const Education = () => (
  <section className="education">
    <h2 className="education-heading">
      <i className="fa-solid fa-graduation-cap" style={{ marginRight: '10px', color: '#282529' }}></i>
      Education
    </h2>
    <ul>
      <li className="education-item">
        <img src={kluImage} alt="KLU" className="education-image" />
        <div className="education-details">
        <h4>Bachelor of Engineering in Computer Science Engineering</h4>
        <p>KL University - Vaddeswaram, Vijayawada, India.</p> 
        <p>Relevant Coursework: Core Computer Science Courses, Software Development, Networking and Security, <br></br>Data Science and Machine Learning</p>
        
    </div>
        <button className="education-button">
          <span>DETAILS</span>
          <span className="hover-text">Pursuing (2022 - 2026)</span><br></br>
          <span className="hover-text">Current CGPA : 9.28</span>
        </button>
      </li>
      <li className="education-item">
        <img src={aboutPic} alt="Intermediate" className="education-image" />
        <div className="education-details">
          <h4>Intermediate | MPC</h4>
          <p>Sri Chaitanya Jr College - Ongole, India.</p>
          <p>Relevant Coursework: Mathematics, Physics, Chemistry, Sanskrit, English</p>
        </div>
        <button className="education-button">
          <span>DETAILS</span>
          <span className="hover-text">Completed (2020 - 2022)</span>
          <br></br>
          <span className="hover-text">Percentage: 80%</span>
        </button>
      </li>
      <li className="education-item">
        <img src={narayanaImage} alt="SSC" className="education-image" />
        <div className="education-details">
          <h4>SSC</h4>
          <p>Narayana Public School - Ongole, India</p>
          <p>Relevant Coursework: Mathematics, English, Physics, Chemistry, Social, Hindi </p>
        </div>
        <button className="education-button">
          <span>DETAILS</span>
          <span className="hover-text">Completed</span>
          <br></br>
          <span className="hover-text">Percentage: 95%</span>
        </button>
      </li>
    </ul>
  </section>
);

export default Education;
