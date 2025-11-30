import React from "react";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "./styles/Education.css"
export default function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>

      <div className="edu-card">

        <div className="icon-box">
          <FaGraduationCap className="edu-icon" />
        </div>

        <div className="edu-content">
          <h3>Bachelor of Technology in Computer Science and Engineering</h3>
          <h4 className="inst">Bengal Institute Of Technology</h4>

          <p className="meta">
            <FaMapMarkerAlt className="small-icon" /> Kolkata, West Bengal
            &nbsp;&nbsp;&nbsp;
            <FaCalendarAlt className="small-icon" /> 2021 - 2025
          </p>

          <p className="desc">
            CGPA - 8.71
          </p>
        </div>
      </div>


      {/* Higher Secondary (12th) */}
      <div className="edu-card">

        <div className="icon-box">
          <FaGraduationCap className="edu-icon" />
        </div>

        <div className="edu-content">
          <h3>Higher Secondary Education (12th)</h3>
          <h4 className="inst">Uttarpara Government High School</h4>

          <p className="meta">
            <FaMapMarkerAlt className="small-icon" /> Uttarpara, West Bengal 
            &nbsp;&nbsp;&nbsp;
            <FaCalendarAlt className="small-icon" /> 2019 - 2021
          </p>

          <p className="desc">Percentage - 82 </p>
        </div>
      </div>


      {/* Secondary (10th) */}
      <div className="edu-card">

        <div className="icon-box">
          <FaGraduationCap className="edu-icon" />
        </div>

        <div className="edu-content">
          <h3>Secondary Education (10th)</h3>
          <h4 className="inst">Uttarpara Government High School</h4>

          <p className="meta">
            <FaMapMarkerAlt className="small-icon" /> Uttarpara, West Bengal  
            &nbsp;&nbsp;&nbsp;
            <FaCalendarAlt className="small-icon" /> 2018 - 2019
          </p>

          <p className="desc">Percentage - 80.571</p>
        </div>
      </div>

    </section>
  );
}
