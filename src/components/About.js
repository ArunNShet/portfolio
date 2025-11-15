import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Hi, I’m Arun. I’m a passionate Full-Stack Developer and MCA graduate with experience in React, JavaScript, HTML, CSS, Java, Python, and other modern web technologies. I enjoy creating user-friendly, responsive, and efficient applications that solve real-world problems.</p>
            <p>With a background in computer science, I focus on writing clean, maintainable code while ensuring strong performance and a great user experience. I love working across both frontend and backend technologies, and I’m always looking to improve my skills through hands-on projects.</p>
            <p>I’m also passionate about machine learning, data analytics, and building practical solutions that blend logic with creativity. When I’m not coding, I enjoy exploring new technologies, learning modern frameworks, and contributing to open-source projects.</p>
          </div>
          <div className="about-links">
            <a href="mailto:arunnshet2002@gmail.com" className="about-link" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/arun-n-shet-625965263" target="_blank" rel="noopener noreferrer" className="about-link" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/ArunNShet" target="_blank" rel="noopener noreferrer" className="about-link" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="/Arun_Resume.pdf" download className="about-link" title="Download Resume">
              <span className="resume-label">Resume</span>
              <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
