import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Send,
  MapPin,
} from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Message from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:YOUR_EMAIL@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="contact-container">

          <motion.div
            className="contact-heading"
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
            <p className="contact-label">
              LET'S WORK TOGETHER
            </p>

            <h2>
              Let's build
              <br />
              something <span>meaningful.</span>
            </h2>

            <p className="contact-intro">
              I'm interested in opportunities where I can
              contribute, learn and build useful digital
              products with a great team.
            </p>
          </motion.div>

          <div className="contact-grid">

            {/* LEFT SIDE */}

            <motion.div
              className="contact-left"
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <p className="contact-small-title">
                FIND ME ONLINE
              </p>

              <div className="contact-links">

                <a
                  href="https://github.com/abdulahadh3148"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <div className="contact-link-icon">
                    <Github size={20} />
                  </div>

                  <div>
                    <span>GitHub</span>
                    <p>View my projects & code</p>
                  </div>

                  <ArrowUpRight size={17} />
                </a>

                <a
                  href="https://www.linkedin.com/in/m-f-abdul-ahadh-1aa231396"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <div className="contact-link-icon">
                    <Linkedin size={20} />
                  </div>

                  <div>
                    <span>LinkedIn</span>
                    <p>Connect professionally</p>
                  </div>

                  <ArrowUpRight size={17} />
                </a>

                <a
                  href="mailto:YOUR_EMAIL@gmail.com"
                  className="contact-link"
                >
                  <div className="contact-link-icon">
                    <Mail size={20} />
                  </div>

                  <div>
                    <span>Email</span>
                    <p>Send me a message</p>
                  </div>

                  <ArrowUpRight size={17} />
                </a>

              </div>

              <div className="availability-card">
                <div className="availability-top">
                  <span className="availability-dot"></span>

                  <p>
                    AVAILABLE FOR OPPORTUNITIES
                  </p>
                </div>

                <h3>
                  Open to software engineering
                  opportunities.
                </h3>

                <div className="contact-location">
                  <MapPin size={14} />

                  <span>
                    Sri Lanka
                  </span>
                </div>
              </div>

            </motion.div>


            {/* RIGHT SIDE */}

            <motion.div
              className="contact-form-wrapper"
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <div className="form-header">
                <div>
                  <span>MESSAGE</span>

                  <h3>
                    Start a conversation.
                  </h3>
                </div>

                <div className="form-header-number">
                  01
                </div>
              </div>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-group">
                  <label htmlFor="name">
                    YOUR NAME
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    EMAIL ADDRESS
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    MESSAGE
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="send-button"
                >
                  Send Message

                  <Send size={16} />
                </button>

              </form>

            </motion.div>

          </div>

        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">

          <div className="footer-brand">
            ABDUL<span>.</span>
          </div>

          <p>
            Software Engineer • Full-Stack Developer
          </p>

          <div className="footer-right">
            © {new Date().getFullYear()} Abdul Ahadh
          </div>

        </div>
      </footer>
    </>
  );
}

export default Contact;
