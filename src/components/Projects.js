import React, { useState } from 'react';
import './Projects.css';

const ProjectCard = ({ title, purpose, technologies, responsibilities, githubLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="project-card">
      <h4 onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
        {title} 
        {isOpen ? (
          <i className="fa-solid fa-circle-chevron-up"></i> // Icon for open state
        ) : (
          <i className="fa-solid fa-circle-chevron-down"></i> // Icon for closed state
        )}
      </h4>
      {isOpen && (
        <div className="project-details">
          <p><span style={{ fontWeight: 'bold', color: '#405763' }}>Purpose:</span> {purpose}</p>
          <p><span style={{ fontWeight: 'bold', color: '#405763' }}>Technologies:</span> {technologies}</p>
          <p><span style={{ fontWeight: 'bold', color: '#405763' }}>Responsibilities:</span> {responsibilities}</p>
          <a href={githubLink} className="project-button">GitHub</a>
        </div>
      )}
    </div>
  );
};

const Projects = () => (
  <section className="projects p-4">
    <h2><i className="fa-thin fa-files"></i>Projects</h2>
    <ProjectCard
      title="Online Job Portal"
      purpose="A web platform connecting job seekers and employers, allowing users to create profiles, search job listings, and apply for positions."
      technologies="HTML, CSS, Django, Flask, Python (Django framework), SQLite3"
      responsibilities="Develop the front-end and back-end of the online job portal, ensuring a seamless user experience through intuitive design and robust functionality. Implement real-time communication features and maintain database integrity while focusing on security and performance optimization."
      githubLink="https://github.com/mukhesh-23/Online-Bank-Management"
    />
    <ProjectCard
      title="Online Event Management System"
      purpose="A web-based application that facilitates the planning, organizing, and managing of events, allowing users to create events, register participants, and manage event logistics."
      technologies="ReactJS, Spring Boot, MySQL"
      responsibilities="Admins manage user accounts and oversee event logistics, organizers create and manage events while tracking participant registrations, and attendees register for events and provide feedback. This structure facilitates smooth interactions and enhances the overall event management experience."
      githubLink="https://github.com/mukhesh-23/Online-Bank-Management"
    />
    <ProjectCard
      title="Online Job Portal"
      purpose="A web platform connecting job seekers and employers, allowing users to create profiles, search job listings, and apply for positions."
      technologies="ReactJS, CSS, Bootstrap, Spring Boot, MySQL, Rest API, Microservices"
      responsibilities="Admins manage user accounts and oversee job listings, employers post jobs and review applications while communicating with candidates, and job seekers create profiles, search for jobs, and track application statuses. This collaborative framework ensures efficient interactions between all platform users."
      githubLink="https://github.com/mukhesh-23/Online-Bank-Management"
    />
    {/* Add more project cards as needed */}
  </section>
);

export default Projects;
