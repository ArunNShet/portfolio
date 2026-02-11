import React from 'react';
import '../App.css';
import pythonIcon from '../assets/icons/python.svg';
import javaIcon from '../assets/icons/java.svg';
import cIcon from '../assets/icons/c.svg';
import phpIcon from '../assets/icons/php.svg';
import html5Icon from '../assets/icons/html5.svg';
import css3Icon from '../assets/icons/css3.svg';
import javascriptIcon from '../assets/icons/javascript.svg';
import reactIcon from '../assets/icons/react.svg';
import bootstrapIcon from '../assets/icons/bootstrap.png';
import springbootIcon from '../assets/icons/springboot.png';
import djangoIcon from '../assets/icons/django.png';
import wordIcon from '../assets/icons/word.png';
import excelIcon from '../assets/icons/excel.png';
import powerpointIcon from '../assets/icons/powerpoint.png';
import mysqlIcon from '../assets/icons/mysql.svg';
import mongodbIcon from '../assets/icons/mongodb.svg';
import gitIcon from '../assets/icons/git.svg';
import githubIcon from '../assets/icons/github.png';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: pythonIcon },
        { name: 'Java', icon: javaIcon },
        { name: 'C', icon: cIcon },
        { name: 'PHP', icon: phpIcon }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', icon: html5Icon },
        { name: 'CSS', icon: css3Icon },
        { name: 'JavaScript', icon: javascriptIcon }
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'React', icon: reactIcon },
        { name: 'Bootstrap', icon: bootstrapIcon },
        { name: 'Spring Boot', icon: springbootIcon },
        { name: 'Django', icon: djangoIcon }
      ]
    },
    {
      title: 'Microsoft Technologies',
      skills: [
        { name: 'Word', icon: wordIcon },
        { name: 'Excel', icon: excelIcon },
        { name: 'PowerPoint', icon: powerpointIcon }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: mysqlIcon },
        { name: 'MongoDB', icon: mongodbIcon }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: gitIcon },
        { name: 'GitHub', icon: githubIcon },
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
                    {typeof skill.icon === 'string' && !skill.icon.includes('🔗') ? (
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
