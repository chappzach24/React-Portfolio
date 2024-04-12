
import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Connect with me:</p>
      <div>
        <a href="https://github.com/your-github" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/your-linkedin" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Footer;