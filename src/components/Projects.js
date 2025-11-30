import React from "react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import "./styles/Projects.css";
import { FaGithub } from "react-icons/fa";


export default function Projects() {
  const projectData = [
    {
      title: "IMDB clone",
      desc: "A dynamic IMDb-inspired movie application built with React, featuring real-time data fetching, detailed movie pages, search functionality, and a responsive UI. Designed to deliver a smooth browsing experience, it showcases my skills in modern front-end development and API integration.",
      tech: ["React.js"],
      img:"/IMDB.png",
      demo: "https://imdbclone-4bxp.vercel.app/",
      github: "https://github.com/souviksaha03/Front",
    },
    {
      title: "PatientCare Manager",
      desc: "A simple and efficient patient list management system built with React, Node.js, Express, and MongoDB. It allows users to add, update, delete, and view patients with details like name, contact, and appointment time. It also includes a symptom-tracking feature, enabling doctors to record and manage patient symptoms in a clean and intuitive interface.",
      tech: ["React.js", "Node.js", "MongoDB"],
      img: "/doctor.png",
      demo: "https://github.com/souviksaha03/CRUD",
      github: "https://github.com/souviksaha03/CRUD",
    },
    {
      title: "NotesDekho",
      desc: "A user-friendly notes platform where students can log in, download free study materials, and access premium courses. Built with secure authentication and a clean UI, it offers easy navigation, fast downloads, and organized content for an efficient learning experience.",
      tech: ["React.js", "CSS", "Node. js" ,"Mongodb"],
      img: "/NotesDekho.png",
      demo: "https://github.com/souviksaha03/mern2",
      github: "https://github.com/souviksaha03/mern2",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img">
              <img src={project.img} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.demo} className="btn demo">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.github} className="btn code" target="_blank" rel="noopener noreferrer">

                  <FaGithub /> github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
