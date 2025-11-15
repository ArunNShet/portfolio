import React, { useState, useRef } from 'react';
import '../App.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollContainerRef = useRef(null);

  const projects = [
    {
      title: 'Real-time Face Attributes Detection using ML',
      description: 'This project involves real-time detection of age, gender, race, and emotions using ...',
      details: 'This project involves real-time detection of age, gender, race, and emotions using machine learning algorithms. It utilizes computer vision techniques with libraries like OpenCV and TensorFlow to analyze facial features from live video streams. The system processes video input in real-time, applying pre-trained models for accurate detection and classification.',
      icon: '🤖',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Machine Learning'],
      link: 'https://github.com/ArunNShet/Real-time-Face-Attribute-Detection-project-CLEAN'
    },
    {
      title: 'Plant Leaf Disease Detection using Machine Learning',
      description: 'Developed a machine learning model to detect diseases in plant leaves using image processing...',
      details: 'Developed a machine learning model to detect diseases in plant leaves using image processing and classification algorithms using CNNs. The system analyzes leaf images to identify various diseases, providing farmers with early detection capabilities to prevent crop loss.',
      icon: '🌿',
      technologies: ['Python', 'CNN', 'Image Processing', 'Flask'],
      link: 'https://github.com/ArunNShet/Plant-leaf-disease-detection-using-ML'
    },
    {
      title: 'Student Result Management System',
      description: 'Built with PHP, Bootstrap, and MySQL - includes inputting grades, generating reports...',
      details: 'Built with PHP, Bootstrap, and MySQL - includes inputting grades, generating reports, and tracking student performance. The system provides a user-friendly interface for administrators to manage student data, calculate grades, and generate comprehensive academic reports.',
      icon: '📊',
      technologies: ['PHP', 'Bootstrap', 'MySQL'],
      link: 'https://github.com/ArunNShet/Student-Result-Management-System'
    },
    {
      title: 'Gold Price Prediction using Machine Learning',
      description: 'This project performs data preprocessing, feature selection, and predictive analysis...',
      details: 'This project performs data preprocessing, feature selection, and predictive analysis for gold price forecasting. Using historical market data, the system employs Random Forest and XGBoost algorithms to predict future gold prices with high accuracy, helping investors make informed decisions.',
      icon: '💰',
      technologies: ['Python', 'Pandas', 'XGBoost', 'RandomForest'],
      link: 'https://github.com/ArunNShet/Gold-Price-Prediction-using-machine-learning'
    }
  ];

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>

        <div className="slider-wrapper">
          <button className="scroll-button left" onClick={scrollLeft}>❮</button>

          <div className="projects-slider" ref={scrollContainerRef}>
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <button onClick={() => openModal(project)} className="project-link">
                  Read More <span className="arrow">⇒</span>
                </button>
              </div>
            ))}
          </div>

          <button className="scroll-button right" onClick={scrollRight}>❯</button>
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.details}</p>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-link">View Project</a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
