import React from 'react';
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      
      <div className="resume-download">
        <h3>Download Resume</h3>
        <p>Click the link below to download my resume:</p>
        <a href="/path/to/your/resume.pdf" download>
          Download Resume
        </a>
      </div>
      <div className="resume-proficiencies">
      </div>
    </div>
  );
};

export default Resume;
