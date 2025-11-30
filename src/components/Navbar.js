import React, { useState } from "react";
import "./styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Portfolio</div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${open ? "open" : ""}`}>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Tech Skills</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
