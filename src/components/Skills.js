import React from "react";
import { FaCode, FaDatabase, FaServer, FaLaptopCode, FaCogs } from "react-icons/fa";
import "./styles/Skills.css"

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Tech Skills</h2>

      <div className="skills-container">

        {/* Programming */}
        <div className="skill-card">
          <div className="skill-header">
            <FaCode className="skill-icon" />
            <h3>Programming</h3>
          </div>
          <div className="skill-tags">
            <span>C</span>
            <span>C++</span>
            <span>Python</span>
            <span>Java</span>
          </div>
        </div>

        {/* Frontend */}
        <div className="skill-card">
          <div className="skill-header">
            <FaLaptopCode className="skill-icon" />
            <h3>Frontend</h3>
          </div>
          <div className="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
             <span>Jquery</span>
            <span>React.js</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <div className="skill-header">
            <FaServer className="skill-icon" />
            <h3>Backend</h3>
          </div>
          <div className="skill-tags">
            <span>Node.js</span>
            <span>Express.js</span>
          </div>
        </div>

        {/* Database */}
        <div className="skill-card">
          <div className="skill-header">
            <FaDatabase className="skill-icon" />
            <h3>Database</h3>
          </div>
          <div className="skill-tags">
            <span>MongoDB</span>
            <span>SQL</span>
            <span>DBMS</span>
          </div>
        </div>

        {/* Core */}
        <div className="skill-card">
          <div className="skill-header">
            <FaCogs className="skill-icon" />
            <h3>Core</h3>
          </div>
          <div className="skill-tags">
            <span>Operating Systems</span>
             <span>Data Structures</span>
          </div>
        </div>
      </div>
    </section>
  );
}
