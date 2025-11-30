import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    padding: '10px 0',
    width: '100%',
    textAlign: 'center',
  };

  // Style for nav-links container
  const navLinksStyle = {
    display: 'flex',
    gap: '10px',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    width: window.innerWidth <= 768 ? '100%' : 'auto',
    position: window.innerWidth <= 768 ? 'absolute' : 'static',
    top: window.innerWidth <= 768 ? '60px' : 'auto',
    left: window.innerWidth <= 768 ? '0' : 'auto',
    background: window.innerWidth <= 768 ? '#f9f9f9' : 'transparent',
    borderRadius: window.innerWidth <= 768 ? '5px' : '0',
    padding: window.innerWidth <= 768 ? '10px 0' : '0',
    display: window.innerWidth <= 768 ? (open ? 'flex' : 'none') : 'flex',
    flexWrap: 'wrap',
  };

  return (
    <nav style={{ padding: '10px 20px', borderBottom: '1px solid #ccc', position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ fontSize: '22px', fontWeight: 'bold' }}>Portfolio</div>

        {/* Hamburger */}
        <div
          onClick={() => setOpen(!open)}
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            fontSize: '28px',
            cursor: 'pointer',
          }}
        >
          {open ? '✖' : '☰'}
        </div>

        {/* Links */}
        <div style={navLinksStyle}>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#education" style={linkStyle}>Education</a>
          <a href="#skills" style={linkStyle}>Tech Skills</a>
          <a href="#projects" style={linkStyle}>Projects</a>
          <a href="#resume" style={linkStyle}>Resume</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
