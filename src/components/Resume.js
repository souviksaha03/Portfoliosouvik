import React from "react";
import "./styles/Resume.css";
import { Download } from "lucide-react";

const Resume= () => {
  return (
    <div className="resume-container" id="resume">
      <h1 className="resume-title">Resume</h1>

      <div className="resume-card">
        {/* Icon */}
        <div className="icon-circle">
          <Download size={48} className="icon" />
        </div>

        <h2 className="section-heading">Download My Resume</h2>

        <p className="section-text">
          Get a comprehensive overview of my skills, experience, and
          qualifications in a downloadable PDF format.
        </p>

        {/* Button */}
        <a href="/Resumeupdated.pdf" download className="download-btn">
          <Download size={20} /> Download Resume (PDF)
        </a>

        <p className="updated-text">Last updated: November 2025</p>
      </div>
    </div>
  );
};

export default Resume;
