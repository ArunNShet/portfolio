import React, { useEffect, useRef } from 'react';
import '../App.css';

const Education = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = itemRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  const education = [
    {
      degree: 'Master Of Computer Applications',
      institution: 'Jawaharlal Nehru New College of Engineering',
      description: 'Completed Master\'s degree in 2024-25 with 80%.',
      icon: '🎓'
    },
    {
      degree: 'Bachelor Of Computer Applications',
      institution: 'S R N M National College of Applied Sciences',
      description: 'Completed degree in 2020-23 with 77.46%.',
      icon: '🎓'
    },
    {
      degree: 'PUC - PCMC',
      institution: 'H S Rudrappa National PU College',
      description: 'Completed PUC in 2019-20 with 77.33%.',
      icon: '🏫'
    },
    {
      degree: 'SSLC',
      institution: 'Gayatri English Medium High School',
      description: 'Completed SSLC in 2017-18 with 79.04%.',
      icon: '🏫'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item" ref={(el) => (itemRefs.current[index] = el)}>
          <div className="education-content">
            <div className="education-icon">{edu.icon}</div>
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p className="education-description">{edu.description}</p>
          </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
