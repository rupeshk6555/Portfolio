import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Hi, I'm Rupesh Kumar</h1>
        <h2>Frontend Developer</h2>
        <p>
         
          Developer passionate about creating beautiful and functional web
          experiences.
        </p>
        <motion.button
          onClick={scrollToProjects}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
