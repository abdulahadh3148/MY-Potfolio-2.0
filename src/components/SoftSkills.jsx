import { motion } from "framer-motion";
import {
  MessageCircle,
  Users,
  Brain,
  Clock3,
  RefreshCw,
  Lightbulb,
  Handshake,
  Eye,
} from "lucide-react";

import "./SoftSkills.css";

const softSkills = [
  {
    icon: <MessageCircle size={22} />,
    title: "Communication",
    text: "Clear and simple communication with team members and users.",
  },
  {
    icon: <Users size={22} />,
    title: "Teamwork",
    text: "Working collaboratively and contributing positively to a team.",
  },
  {
    icon: <Brain size={22} />,
    title: "Problem Solving",
    text: "Analyzing problems and finding practical technical solutions.",
  },
  {
    icon: <Clock3 size={22} />,
    title: "Time Management",
    text: "Organizing tasks and completing work within deadlines.",
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Adaptability",
    text: "Learning quickly and adapting to new tools and environments.",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Creativity",
    text: "Thinking of useful ideas and better ways to improve products.",
  },
  {
    icon: <Handshake size={22} />,
    title: "Collaboration",
    text: "Sharing ideas, receiving feedback and working toward common goals.",
  },
  {
    icon: <Eye size={22} />,
    title: "Attention to Detail",
    text: "Carefully reviewing UI, code and functionality for better quality.",
  },
];

function SoftSkills() {
  return (
    <section className="soft-skills" id="soft-skills">
      <div className="soft-skills-container">

        <motion.div
          className="soft-skills-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">
            BEYOND THE CODE
          </p>

          <h2>
            Skills that help me
            <br />
            <span>work better.</span>
          </h2>

          <p>
            Good software is not only about code.
            Communication, teamwork and problem-solving
            are equally important when building real products.
          </p>
        </motion.div>

        <div className="soft-skills-grid">
          {softSkills.map((skill, index) => (
            <motion.div
              className="soft-skill-card"
              key={skill.title}
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
                delay: index * 0.06,
              }}
            >
              <div className="soft-skill-top">
                <div className="soft-skill-icon">
                  {skill.icon}
                </div>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{skill.title}</h3>

              <p>{skill.text}</p>

              <div className="soft-skill-line"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SoftSkills;
