import React from "react";
import "./styles/AboutMe.css";

import profileImg from "./Img/souvikimg.jpeg"

const AboutMe = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-container">
        {/* RIGHT SIDE - TEXT */}
        <div className="about-content">
          <p className="about-description">
            As a dedicated full stack developer, I build dynamic, user-focused web applications that combine strong front-end design with efficient back-end functionality. I specialize in creating scalable, responsive, and visually appealing solutions using modern frameworks and tools. Always eager to learn and adapt, I turn complex ideas into simple, functional digital experiences—whether it’s crafting sleek interfaces, optimizing databases, or integrating APIs
          </p>

           <ul className="about-list">
            <li><span className="blue-dot">✔</span> Strong problem-solving and analytical skills</li>
            <li><span className="blue-dot">✔</span> Passionate about clean code and best practices</li>
            <li><span className="blue-dot">✔</span> Collaborative team player with excellent communication</li>
          </ul> 
        </div>
        {/* LEFT SIDE - IMAGE */}
        <div className="about-image-card">
          <img src={profileImg} alt="Profile" className="about-image" />
        </div>


      </div>
    </section>
  );
};

export default AboutMe;
