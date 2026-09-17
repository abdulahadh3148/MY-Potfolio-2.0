import { motion } from "framer-motion";
import { Code2, Layers3, Sparkles } from "lucide-react";
import "./About.css";

import profileImage from "../assets/profile.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <motion.div
          className="about-image-area"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-image-card">

            <div className="about-card-top">
              <span className="about-dot"></span>
              <span>PROFILE</span>
            </div>

            <div className="about-photo">
              <img src={profileImage} alt="Abdul Ahadh" />
            </div>

            <div className="about-card-bottom">
              <span>ABDUL AHAHD</span>
              <span>SOFTWARE ENGINEER</span>
            </div>

          </div>

          <div className="about-floating-icon floating-one">
            <Code2 size={21} />
          </div>

          <div className="about-floating-icon floating-two">
            <Sparkles size={19} />
          </div>

        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">ABOUT ME</p>

          <h2>
            Building practical ideas
            <br />
            into <span>digital experiences.</span>
          </h2>

          <p className="about-highlight">
            Hi, I'm Abdul Ahadh. I enjoy building clean, practical and
            user-focused software solutions.
          </p>

          <p className="about-text">
            My focus is full-stack web development, where I work with modern
            frontend technologies and backend systems to turn ideas into
            functional applications.
          </p>

          <p className="about-text">
            I enjoy understanding real problems, designing simple solutions,
            developing reliable features and continuously improving the final
            product.
          </p>

          <div className="about-mini-cards">

            <div className="about-mini-card">
              <div className="mini-icon">
                <Code2 size={20} />
              </div>

              <div>
                <strong>Development</strong>
                <span>Modern web applications</span>
              </div>
            </div>

            <div className="about-mini-card">
              <div className="mini-icon">
                <Layers3 size={20} />
              </div>

              <div>
                <strong>Full Stack</strong>
                <span>Frontend & backend systems</span>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;
