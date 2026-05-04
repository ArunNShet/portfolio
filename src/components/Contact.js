import React, { useState } from 'react';
import '../App.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const getFriendlyErrorMessage = (messageText) => {
    if (!messageText) {
      return 'Something went wrong while sending your message. Please try again in a moment or contact me directly at arunnshet2002@gmail.com.';
    }

    if (messageText.toLowerCase().includes('activation')) {
      return 'The contact form is not activated yet. Please check the Gmail inbox for arunnshet2002@gmail.com and open the latest FormSubmit activation email.';
    }

    return 'Your message could not be sent right now. Please try again in a moment or contact me directly at arunnshet2002@gmail.com.';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSent(false);
    setStatusMessage('');

    if (name && email && subject && message) {
      setIsSending(true);

      try {
        const response = await fetch('https://formsubmit.co/ajax/arunnshet2002@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message
          })
        });

        const result = await response.json();
        const requestSucceeded =
          response.ok && (result.success === true || result.success === 'true');

        if (!requestSucceeded) {
          throw new Error(result.message || 'Message sending failed');
        }

        setIsSent(true);
        setStatusMessage(
          'Thank you for your message. I have received it and will get back to you soon.'
        );
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } catch (submitError) {
        setError(getFriendlyErrorMessage(submitError.message));
      } finally {
        setIsSending(false);
      }
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
              <span className="contact-value">Gandhi Bazar, Shivamoga, Karnataka, India, 577201</span>
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
            {isSent && <p className="success-message">{statusMessage}</p>}
            {error && <p className="success-message">{error}</p>}
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
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
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
              <button type="submit" className="send-btn" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
