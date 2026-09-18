import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiPhp,
  SiMysql,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

import "./Skills.css";

const skills = [
  {
    name: "React.js",
    type: "Frontend",
    icon: <SiReact />,
  },
  {
    name: "JavaScript",
    type: "Language",
    icon: <SiJavascript />,
  },
  {
    name: "Node.js",
    type: "Backend",
    icon: <SiNodedotjs />,
  },
  {
    name: "Express.js",
    type: "Backend",
    icon: <SiExpress />,
  },
  {
    name: "Firebase",
    type: "Database & Cloud",
    icon: <SiFirebase />,
  },
  {
    name: "PHP",
    type: "Backend",
    icon: <SiPhp />,
  },
  {
    name: "MySQL",
    type: "Database",
    icon: <SiMysql />,
  },
  {
    name: "HTML5",
    type: "Frontend",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS3",
    type: "Styling",
    icon: <SiCss />,
  },
  {
    name: "Git",
    type: "Version Control",
    icon: <SiGit />,
  },
  {
    name: "GitHub",
    type: "Development",
    icon: <SiGithub />,
  },
  {
    name: "Figma",
    type: "UI Design",
    icon: <SiFigma />,
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">TECHNICAL STACK</p>

          <h2>
            Tools I use to turn
            <br />
            ideas into <span>products.</span>
          </h2>

          <p>
            Technologies and tools I use to design, develop and build modern
            web applications.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill.name}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>

              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span>{skill.type}</span>
              </div>

              <div className="skill-arrow">
                ↗
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="knowledge-box"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="knowledge-left">
            <span className="knowledge-number">
              02
            </span>

            <div>
              <p>DEVELOPMENT KNOWLEDGE</p>

              <h3>
                Beyond tools,
                <br />
                understanding the fundamentals.
              </h3>
            </div>
          </div>

          <div className="knowledge-tags">
            <span>Object-Oriented Programming (OOP)</span>
            <span>Data Structures & Algorithms</span>
            <span>Database Design (SQL)</span>
            <span>RESTful APIs</span>
            <span>Software Engineering</span>
            <span>Responsive Web Design</span>
            <span>Git Workflow</span>
            <span>Deployment & CI/CD</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
