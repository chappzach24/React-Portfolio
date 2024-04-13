import React from "react";
import "./Resume.css";
import Resume1 from '../../public/Resume.pdf'

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-download">
        <h3>Download Resume</h3>
        <p>Click the link below to download my resume:</p>
        <a href={Resume1} download="Zachary Resume" target="_blank">
          <button type="button" className="resume-button">
            Download Resume
          </button>
        </a>
      </div>
      <div className="resume-proficiencies"></div>
    </div>
  );
};

export default Resume;
