import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";

import "./Projects.css";

import erangaDrivingImg from "../assets/images/eranga_driving.png";
import jamiulAzharImg from "../assets/images/jamiul_azhar.png";
import sparkleSalonImg from "../assets/images/sparkle_salon.png";
import abdulPortfolioImg from "../assets/images/abdul_portfolio.png";

const projects = [
  {
    number: "01",
    title: "Eranga Driving School",
    subtitle: "Digital Management Platform",
    description:
      "A full-stack digital platform designed to manage students, instructors, practical classes, payments, progress tracking, mock theory tests and notifications for a driving school.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Firebase",
    ],
    github:
      "https://github.com/abdulahadh3148/Eranga-Driving-School-Management-Platform",
    image: erangaDrivingImg,
  },
  {
    number: "02",
    title: "Jamiul Azhar Mosque",
    subtitle: "Community Web Platform",
    description:
      "A modern web platform created to provide a clean and accessible digital presence for Jamiul Azhar Mosque and its community.",
    tags: [
      "Web Development",
      "Responsive UI",
      "JavaScript",
    ],
    github:
      "https://github.com/abdulahadh3148/Jamiul-Azhar-Mosque",
    image: jamiulAzharImg,
  },
  {
    number: "03",
    title: "Sparkle Salon",
    subtitle: "Beauty & Wellness Platform",
    description:
      "An elegant digital solution designed to streamline salon bookings, manage services, and provide a premium experience for clients.",
    tags: [
      "React.js",
      "Web Design",
      "Frontend",
    ],
    github:
      "https://github.com/abdulahadh3148",
    image: sparkleSalonImg,
  },
  {
    number: "04",
    title: "Abdul Ahadh — Portfolio 2.0",
    subtitle: "Personal Developer Platform",
    description:
      "A fast, modern personal portfolio engineered to showcase engineering projects, core CS fundamentals, and interactive web experiences with custom typography, responsive design, and smooth animations.",
    tags: [
      "React.js",
      "Vite",
      "Framer Motion",
      "CSS3",
    ],
    github:
      "https://github.com/abdulahadh3148/MY-Potfolio-2.0",
    image: abdulPortfolioImg,
  },
];

function ProjectVisual({ image, title }) {
  return (
    <div className="project-mockup">
      <div className="mockup-window">
        <div className="mockup-browser">
          <div className="browser-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <p>{title}</p>
        </div>

        <img 
          src={image} 
          alt={title} 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      className="projects"
      id="projects"
    >
      <div className="projects-container">

        <motion.div
          className="projects-heading"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <p className="section-label">
            FEATURED WORK
          </p>

          <h2>
            Selected projects
            <br />
            I've <span>worked on.</span>
          </h2>

          <p>
            A selection of projects where I
            turned practical ideas into
            functional digital solutions.
          </p>
        </motion.div>

        <div className="projects-list">

          {projects.map(
            (project) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                }}
              >
                <div className="project-info">

                  <div className="project-number">
                    {project.number}
                  </div>

                  <div>
                    <p className="project-type">
                      FEATURED PROJECT
                    </p>

                    <h3>
                      {project.title}
                    </h3>

                    <h4>
                      {project.subtitle}
                    </h4>

                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="project-tags">
                      {project.tags.map(
                        (tag) => (
                          <span key={tag}>
                            {tag}
                          </span>
                        )
                      )}
                    </div>

                    <div className="project-buttons">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-primary-button"
                      >
                        <Github size={17} />

                        View GitHub

                        <ArrowUpRight
                          size={16}
                        />
                      </a>
                    </div>
                  </div>

                </div>

                <motion.div
                  className="project-visual"
                  whileHover={{
                    scale: 1.015,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <ProjectVisual
                    image={project.image}
                    title={project.title}
                  />
                </motion.div>

              </motion.article>
            )
          )}

        </div>

        <div className="projects-footer">
          <p>
            More projects available on
            GitHub.
          </p>

          <a
            href="https://github.com/abdulahadh3148"
            target="_blank"
            rel="noreferrer"
          >
            View all projects
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
