import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";

import "./Hero.css";

import profileImage from "../assets/profile.png";
import resumeFile from "../assets/Abdul_Ahadh_CV.pdf";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <p className="hero-label">
            SOFTWARE ENGINEER · FULL-STACK DEVELOPER
          </p>

          <h1>
            Hi, I'm <span>Abdul</span>,
            <br />
            building useful
            <br />
            digital experiences.
          </h1>

          <p className="hero-description">
            I build modern, practical and user-friendly web applications
            using React, JavaScript, Node.js, Express and Firebase.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work
              <ArrowRight size={17} />
            </a>

            <a
              href={resumeFile}
              className="secondary-button"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={17} />
              Resume
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/abdulahadh3148"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a href="mailto:your-email@example.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.9,
            x: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.35,
          }}
        >
          <div className="monitor">
            <div className="monitor-top">
              <div className="monitor-brand">
                <span></span>
                ABDUL
              </div>

              <span className="monitor-status">● ONLINE</span>
            </div>

            <div className="monitor-screen">
              <img src={profileImage} alt="Abdul Ahadh" />

              <div className="screen-overlay">
                <span>SOFTWARE ENGINEER</span>
              </div>
            </div>

            <div className="monitor-bottom">
              <div className="monitor-dot active"></div>
              <div className="monitor-dot"></div>
              <div className="monitor-dot"></div>
            </div>
          </div>

          <div className="monitor-stand">
            <div className="stand-neck"></div>
            <div className="stand-base"></div>
          </div>

          <div className="floating-code">&lt;/&gt;</div>

          <div className="floating-status">
            <span></span>
            Available for opportunities
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
