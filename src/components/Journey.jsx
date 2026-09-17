import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Rocket,
  BriefcaseBusiness,
} from "lucide-react";

import "./Journey.css";

const journeyItems = [
  {
    year: "2023",
    icon: <GraduationCap size={20} />,
    title: "Started My IT Journey",
    subtitle: "Higher National Diploma in Information Technology",
    description:
      "Built a strong foundation in programming, databases, networking, software engineering and computer systems.",
  },

  {
    year: "2024",
    icon: <Code2 size={20} />,
    title: "Started Building Applications",
    subtitle: "Academic & Personal Projects",
    description:
      "Moved from learning programming concepts to building practical systems and web applications.",
  },

  {
    year: "2025",
    icon: <Rocket size={20} />,
    title: "Full-Stack Development",
    subtitle: "React • Node.js • Firebase • PHP",
    description:
      "Focused on modern web development, responsive interfaces, backend APIs and database-driven applications.",
  },

  {
    year: "Now",
    icon: <BriefcaseBusiness size={20} />,
    title: "Building Toward a Software Engineering Career",
    subtitle: "Projects • Learning • Professional Development",
    description:
      "Continuing to build real-world projects, improve development skills and prepare for professional software engineering opportunities.",
  },
];

function Journey() {
  return (
    <section className="journey" id="journey">
      <div className="journey-container">

        <motion.div
          className="journey-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">
            MY JOURNEY
          </p>

          <h2>
            Learning, building
            <br />
            and <span>moving forward.</span>
          </h2>

          <p>
            My journey in technology has been about continuously learning,
            building practical projects and improving how I solve problems.
          </p>
        </motion.div>

        <div className="journey-layout">

          <div className="journey-line"></div>

          {journeyItems.map((item, index) => (
            <motion.div
              className="journey-item"
              key={item.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -35 : 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <div className="journey-year">
                {item.year}
              </div>

              <div className="journey-point">
                <div className="journey-icon">
                  {item.icon}
                </div>
              </div>

              <div className="journey-card">

                <span className="journey-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {item.title}
                </h3>

                <h4>
                  {item.subtitle}
                </h4>

                <p>
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Journey;
