
import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Connect with me:</p>
      <div>
        <a href="https://github.com/chappzach24" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/zachary-chapman-a291a6b5/" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
};

export default Footer;