import React from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo">
          <a href="#home"> Portfolio </a>
        </div>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#home">Home</a>

          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
