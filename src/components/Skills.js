import React from 'react';
import '../App.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: '/icons/python.svg' },
        { name: 'Java', icon: '/icons/java.svg' },
        { name: 'C', icon: '/icons/c.svg' },
        { name: 'PHP', icon: '/icons/php.svg' }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', icon: '/icons/html5.svg' },
        { name: 'CSS', icon: '/icons/css3.svg' },
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
         { name: 'Bootstrap', icon: '/icons/bootstrap.png' }
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'Spring Boot', icon: '/icons/springboot.png' },
        { name: 'Django', icon: '/icons/django.png' },
        { name: 'React', icon: '/icons/react.svg' }
      ]
    },
    {
      title: 'Microsoft Technologies',
      skills: [
        { name: 'Word', icon: '/icons/word.png' },
        { name: 'Excel', icon: '/icons/excel.png' },
        { name: 'PowerPoint', icon: '/icons/powerpoint.png' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: '/icons/mysql.svg' },
        { name: 'MongoDB', icon: '/icons/mongodb.svg' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: '/icons/git.svg' },
        { name: 'GitHub', icon: '/icons/github.png' },
        { name: 'API Integration', icon: '🔗' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">💻 My Skills</h2>
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill.icon.startsWith('http') || skill.icon.startsWith('/') ? (
                      <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    ) : (
                      <span className="skill-icon">{skill.icon}</span>
                    )}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
