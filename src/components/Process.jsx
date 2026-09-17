import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Sparkles,
} from "lucide-react";

import "./Process.css";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "Understand the problem, user needs and project requirements before starting development.",
    icon: <Search size={22} />,
  },
  {
    number: "02",
    title: "Design",
    text: "Plan the structure, user flow and interface with a clean and practical design approach.",
    icon: <PenTool size={22} />,
  },
  {
    number: "03",
    title: "Build",
    text: "Develop the solution using modern technologies with clean and maintainable code.",
    icon: <Code2 size={22} />,
  },
  {
    number: "04",
    title: "Refine",
    text: "Test, improve and polish the product to deliver a better user experience.",
    icon: <Sparkles size={22} />,
  },
];

function Process() {
  return (
    <section className="process" id="process">
      <div className="process-container">

        <motion.div
          className="process-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">
            MY PROCESS
          </p>

          <h2>
            From an idea to a
            <br />
            <span>working product.</span>
          </h2>

          <p>
            I follow a simple development process to keep each project
            clear, practical and focused on the user.
          </p>
        </motion.div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <motion.div
              className="process-card"
              key={step.number}
              initial={{
                opacity: 0,
                y: 45,
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
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <div className="process-top">
                <span className="process-number">
                  {step.number}
                </span>

                <div className="process-icon">
                  {step.icon}
                </div>
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

              <div className="process-line"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;
