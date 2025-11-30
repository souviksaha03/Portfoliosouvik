import React from "react";
import "./styles/Me.css"
import { Contact } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Me = () => {
  return (
    <section className="hero">
      <h1>Souvik Saha</h1>
      <h2>Full Stack Developer</h2>
      <p>Building scalable web applications with modern technologies</p>

      <div className="buttons">
        <a
  href="#projects"
  style={{
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
    cursor: "pointer",
    display: "inline-block"
  }}
>
  View My Work
</a>

                <a
  href="#contact" className="outline-btn"
  style={{
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
    cursor: "pointer",
    display: "inline-block"
  }}
>
  Get in Touch
</a>
      </div>

      {/* --- ICONS BELOW BUTTONS --- */}
      <div className="social-icons">
        {/* GitHub */}
        <a href="https://github.com/souviksaha03" target="_blank">
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.85 10.95c.57.1.78-.25.78-.55v-1.9c-3.2.7-3.88-1.55-3.88-1.55-.52-1.3-1.28-1.65-1.28-1.65-1.05-.72.08-.7.08-.7 1.17.1 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.3-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.1-.12-.3-.52-1.52.12-3.15 0 0 .97-.3 3.18 1.2a10.7 10.7 0 0 1 5.8 0c2.2-1.5 3.17-1.2 3.17-1.2.65 1.63.25 2.85.12 3.15.75.8 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.25 5.7.42.37.82 1.1.82 2.25v3.33c0 .3.2.65.78.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/souviksaha2003?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank">
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5a2.5 2.5 0 1 1-.01 5.01 2.5 2.5 0 0 1 .01-5.01zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9z"/>
          </svg>
        </a>
      </div>

    </section>
  );
};

export default Me;
