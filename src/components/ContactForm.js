import React, { useState, useEffect } from 'react';
import './ContactForm.css'; // Import your CSS file
import contactImage from './contact.png';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });
  const [activeField, setActiveField] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isPageActive, setIsPageActive] = useState(false);

  // Trigger the animation when the component mounts
  useEffect(() => {
    setIsPageActive(true);
  }, []);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle field focus
  const handleFocus = (field) => setActiveField(field);

  // Handle field blur (unfocus)
  const handleBlur = () => setActiveField('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // EmailJS parameters
    const serviceID = 'service_hjtqbvn';
    const templateID = 'template_u2ns0cq';
    const userID = 'dB9z4IKwO-SzbfFSP';

    try {
      await emailjs.send(serviceID, templateID, formData, userID);
      setStatusMessage('Your message was sent successfully!');
      setFormData({ name: '', email: '', mobile: '', message: '' }); // Clear form
    } catch (error) {
      setStatusMessage('Error sending message. Please try again later.');
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>
      <div className={`contact-container ${isPageActive ? 'active' : ''}`}>
        <div className="contact-image">
          <img src={contactImage} alt="Contact illustration" />
        </div>
        <form onSubmit={handleSubmit} className="contact-form p-4">
          <div className="input-group">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
              className={activeField === 'name' ? 'active' : ''}
              required
            />
          </div>
          <div className="input-group">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              className={activeField === 'email' ? 'active' : ''}
              required
            />
          </div>
          <div className="input-group">
            <i className="fa-solid fa-mobile-alt"></i>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              onFocus={() => handleFocus('mobile')}
              onBlur={handleBlur}
              className={activeField === 'mobile' ? 'active' : ''}
              required
            />
          </div>
          <div className="input-group">
            <i className="fa-solid fa-message"></i>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
              className={activeField === 'message' ? 'active' : ''}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send <i className="fa-regular fa-paper-plane"></i>
          </button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
