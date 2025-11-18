import React, { useState } from 'react';
import '../App.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h3>ARUN N SHET</h3>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
            <a href="#education" className="nav-link" onClick={closeMenu}>Education</a>
            <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
            <a href="#certificates" className="nav-link" onClick={closeMenu}>Certificates</a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </div>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
      <div className='container'>
      <div id="home" className="hero">
        <img src="/profile.jpg" alt="Profile" className="profile-image" />
        <div className="hero-text">
          <h1>Hi, I'm <div id="myname">ARUN N SHET</div></h1>
          <h2>
            {(() => {
              const text = 'Aspiring FULL-STACK DEVELOPER | SOFTWARE DEVELOPER';
              const words = text.split(' ');
              let charIndex = 0;
              return words.map((word, wordIndex) => (
                <span key={wordIndex} style={{ whiteSpace: 'nowrap' }}>
                  {word.split('').map((char) => (
                    <span key={charIndex} style={{ animationDelay: `${1.6 + charIndex++ * 0.05}s` }}>{char}</span>
                  ))}
                  {wordIndex < words.length - 1 && (
                    <span key={`space-${wordIndex}`} style={{ animationDelay: `${1.6 + charIndex++ * 0.05}s` }}>&nbsp;</span>
                  )}
                </span>
              ));
            })()}
          </h2>
          <p>Welcome to my portfolio. I create amazing web experiences.</p>
          <a href="#about" className="cta-button">Learn More</a>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
