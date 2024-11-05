import React, { useEffect, useState } from 'react';
import './Certifications.css';
import awssImage from './awss.png';
import rhImage from './rh.png';
import salesforceeImage from './salesforcee.png';
import oracleImage from './oracle.png';

function Certifications() {
  const [visible, setVisible] = useState(false);
  const [containerOpen, setContainerOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.certifications');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleViewCertificate = (certImage) => {
    setSelectedCertificate(certImage);
    setContainerOpen(true);
  };

  const handleCloseContainer = () => {
    setContainerOpen(false);
    setSelectedCertificate('');
  };

  return (
    <div className="certifications-container">
      <h2 className="certifications-heading">
        <i className="fa fa-certificate certification-icon" aria-hidden="true"></i>
        Achievements
      </h2>
      <div className={`certifications ${visible ? 'visible' : ''}`}>
        {/* AWS Certification */}
        <div className="certification-item">
          <img src={awssImage} alt="AWS Certification" className="certification-image" />
          <div className="certification-content">
            <p className="certification-name"><strong>Amazon Web Services Cloud Practitioner</strong></p>
            <p className="certification-details">(Issued by Amazon Web Services (AWS))</p>
            <p>▸ Gained foundational knowledge of AWS services, cloud architecture, and best practices.</p>
          </div>
          <div className="certification-buttons">
            <button className="certification-button">
              <span>DETAILS</span>
              <span className="hover-text"> May 2024 - May 2027</span>
            </button>
            <button className="certification-button" onClick={() => handleViewCertificate(awssImage)}>
              <span>VIEW CERTIFICATE</span>
              <span className="hover-text">VIEW CERTIFICATE</span>
            </button>
          </div>
        </div>

        {/* Red Hat Certification */}
        <div className="certification-item">
          <img src={rhImage} alt="Red Hat Certification" className="certification-image" />
          <div className="certification-content">
            <p className="certification-name"><strong>Red Hat Certified Enterprise Application Developer</strong></p>
            <p className="certification-details">(Issued by Red Hat)</p>
            <p>▸ Certified in developing and deploying enterprise applications using Red Hat technologies.</p>
          </div>
          <div className="certification-buttons">
            <button className="certification-button">
              <span>DETAILS</span>
              <span className="hover-text"> Sep 2024 - Sep 2027</span>
            </button>
            <button className="certification-button" onClick={() => handleViewCertificate(rhImage)}>
              <span>VIEW CERTIFICATE</span>
              <span className="hover-text">VIEW CERTIFICATE</span>
            </button>
          </div>
        </div>

        {/* Salesforce Certification */}
        <div className="certification-item">
          <img src={salesforceeImage} alt="Salesforce Certification" className="certification-image" />
          <div className="certification-content">
            <p className="certification-name"><strong>Salesforce Certified AI Associate</strong></p>
            <p className="certification-details">(Issued by Salesforce)</p>
            <p>▸ Skilled in integrating AI solutions within Salesforce for automation and enhanced processes.</p>
          </div>
          <div className="certification-buttons">
            <button className="certification-button">
              <span>DETAILS</span>
              <span className="hover-text">Oct 2024 - Present</span>
            </button>
            <button className="certification-button" onClick={() => handleViewCertificate(salesforceeImage)}>
              <span>VIEW CERTIFICATE</span>
              <span className="hover-text">VIEW CERTIFICATE</span>
            </button>
          </div>
        </div>

        {/* Oracle Certification */}
        <div className="certification-item">
          <img src={oracleImage} alt="Oracle Certification" className="certification-image" />
          <div className="certification-content">
            <p className="certification-name"><strong>Oracle Cloud Infrastructure 2024 Generative AI</strong></p>
            <p className="certification-details">(Issued by Oracle)</p>
            <p>▸ Certified in using Oracle Cloud for deploying AI-driven applications and generative AI techniques.</p>
          </div>
          <div className="certification-buttons">
            <button className="certification-button">
              <span>DETAILS</span>
              <span className="hover-text">Jul 2024 - Jul 2026</span>
            </button>
            <button className="certification-button" onClick={() => handleViewCertificate(oracleImage)}>
              <span>VIEW CERTIFICATE</span>
              <span className="hover-text">VIEW CERTIFICATE</span>
            </button>
          </div>
        </div>
      </div>

      {/* Container for viewing the certificate */}
      {containerOpen && (
        <div className="certificate-container">
          <div className="certificate-content">
            <span className="close-container" onClick={handleCloseContainer}>&times;</span>
            <img src={selectedCertificate} alt="Certificate" className="certificate-view-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Certifications;
