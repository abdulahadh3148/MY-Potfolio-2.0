import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Intro.css";

function Intro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="intro-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
          }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <motion.div
            className="intro-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="welcome-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span></span>
              <p>WELCOME</p>
              <span></span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.45,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              ABDUL<span>.</span>
            </motion.h1>

            <motion.div
              className="intro-divider"
              initial={{ width: 0 }}
              animate={{ width: 55 }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
            />

            <motion.p
              className="intro-role"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.6,
              }}
            >
              SOFTWARE ENGINEER
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Intro;
