import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          className="scroll-to-top"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.div>

        <div className="footer-sections">
          <div className="footer-section">
            <h3>Rupesh Kumar</h3>
            <p>
              Developer passionate about creating beautiful and functional web
              experiences.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Email: rupeshk6555@gmail.com</p>

            <p>Location: Bihar, India</p>
          </div>

          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="social-links">
              <motion.a
                href="https://github.com/rupeshk6555"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rupeshk6555"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>
              © {currentYear} Rupesh Kumar. Made with{" "}
              <FaHeart className="heart-icon" /> by
              <a href="#home"> Rupesh Kumar</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
