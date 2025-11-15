import React, { useRef } from 'react';
import certificateLogo from '../assets/icons/certificate-logo.jpg';

const Certificate = () => {
  const scrollContainerRef = useRef(null);

  const certificates = [
    {
      title: 'DATA ANALYSIS WITH PYTHON',
      issuer: 'IBM SKILLSBUILD',
      date: '2025',
      description: 'This certification covers data analysis techniques using Python, including data manipulation, visualization, and statistical analysis for extracting insights from datasets.',
      image: certificateLogo,
      link: 'https://drive.google.com/file/d/1r6pXB8lo1rPVuDPRUGg43wNaj_gGeTNe/view?usp=drive_link'
    },
    {
      title: 'DATA ANALYTICS ESSENTIALS',
      issuer: 'CISCO',
      date: '2025',
      description: 'This course provides foundational knowledge in data analytics, covering data collection, processing, and interpretation to support informed decision-making in various industries.',
      image: certificateLogo,
      link: 'https://drive.google.com/file/d/1uHp0EynRFY5vrioXsw6GnUBXE0ShgCzV/view?usp=sharing'
    },
    {
      title: 'INTRODUCTION TO MACHINE LEARNING',
      issuer: 'VTU',
      date: '2024',
      description: 'This course introduces the core concepts of machine learning, including supervised and unsupervised learning algorithms, model training, and evaluation techniques.',
      image: certificateLogo,
      link: 'https://drive.google.com/file/d/1i4iGznEfUdzRMeUUzudhlw5HG68jqgXL/view?usp=drive_link'
    },
    {
      title: 'ETHICAL HACKING - BASICS',
      issuer: 'VTU',
      date: '2025',
      description: 'This course covers ethical hacking principles, including vulnerability assessment, penetration testing, and cybersecurity best practices to protect systems from threats.',
      image: certificateLogo,
      link: 'https://drive.google.com/file/d/1aPCr2cyJaF3uUZKrA_i-ah0Hc7kKenPk/view?usp=drive_link'
    }
  ];

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
  };

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2>Certificates</h2>

        <div className="slider-wrapper">
          <button className="scroll-button left" onClick={scrollLeft}>❮</button>

          <div className="certificates-slider" ref={scrollContainerRef}>
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-card">
                <div className="certificate-icon">
                  <img src={cert.image} alt={cert.title} />
                </div>
                <div className="certificate-content">
                  <h3>{cert.title}</h3>
                  <p className="certificate-issuer">{cert.issuer} - {cert.date}</p>
                  <p className="certificate-description">{cert.description}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-cert-btn">View Certificate</a>
                </div>
              </div>
            ))}
          </div>

          <button className="scroll-button right" onClick={scrollRight}>❯</button>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
