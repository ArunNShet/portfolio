import React, { useState } from 'react';
import '../App.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && subject && message) {
      // Simulate sending message
      setIsSent(true);
      // Reset form
      setName('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-content">
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon"><i className="fas fa-map-marker-alt bounce"></i></span>
              <span className="contact-label">Address:</span>
              <span className="contact-value">Shimoga, Karnataka, India, 577201</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon"><i className="fas fa-phone bounce"></i></span>
              <span className="contact-label">Phone:</span>
              <span className="contact-value">+91 9449222295</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon"><i className="fas fa-envelope bounce"></i></span>
              <span className="contact-label">Email:</span>
              <span className="contact-value">arunnshet2002@gmail.com</span>
            </div>
          </div>
          <div className="contact-form">
            {isSent && <p className="success-message">Message sent successfully, Thank You!</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
