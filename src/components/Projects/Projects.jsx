import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import YoutubeImage from "../../assets/YoutubeImage.png";
import ACONEWS from "../../assets/ACONEWS.png";

const Projects = () => {
  const projects = [
    {
      title: "Youtube UI",
      description:
        "A full-featured YouTube clone built using React, Redux, React Router dom and the YouTube API",
      image: YoutubeImage,
      github: "https://github.com/rupeshk6555/youtube.git",
      demo: "https://youtuberk.netlify.app",
    },
    {
      title: "ACONEWS ",
      description:
        "ACONEWS is a React-based news app using the GNews API to display top headlines by category. It features smooth navigation, real-time updates, and is hosted on Firebase for quick access.",
      image: ACONEWS,
      github: "https://github.com/rupeshk6555/ACONEWS.git",
      demo: "https://aconews-ef603.web.app",
    },
  
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
