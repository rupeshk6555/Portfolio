
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaMobileAlt,
  FaGitAlt,
} from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact className="skill-icon" /> },
    { name: "JavaScript", icon: <FaJsSquare className="skill-icon" /> },
    { name: "CSS3", icon: <FaCss3Alt className="skill-icon" /> },
    { name: "HTML5", icon: <FaHtml5 className="skill-icon" /> },
    { name: "Responsive Design", icon: <FaMobileAlt className="skill-icon" /> },
    { name: "Git", icon: <FaGitAlt className="skill-icon" /> },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-slider">
        <motion.div
          className="skills-track"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.5, 
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              className="skill-item"
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill.icon}
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
