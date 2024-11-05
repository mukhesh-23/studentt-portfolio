import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    "Microsoft Office (Excel, Word, PowerPoint)",
    "C",
    "C++",
    "Java",
    "Python",
    "Web Development",
    "Project Management",
    "Content Writing",
    "Typing",
    "HTML",
    "CSS",
    "DBMS",
    "Software Development",
    "Software Design",
    "Programming",
    "Data Structures"
  ];

  return (
    <section className="skills-container">
      <h2 className="skills-heading">My <span className="skills-color">Skills</span></h2>
      <div className="skills">
        <div className="skills-text">
          <p>
            Here are some of the key skills I've developed throughout my academic journey and personal projects.
          </p>
        </div>
        <div className="line-divider"></div>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
