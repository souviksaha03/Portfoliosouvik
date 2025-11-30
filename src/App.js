
import React from 'react';
import Navbar from './components/Navbar';
import Me from './components/Me';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './index.css';

export default function App(){
  return (
    <>
      <Navbar/>
      <Me/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Contact/>
  
    </>
  );
}
