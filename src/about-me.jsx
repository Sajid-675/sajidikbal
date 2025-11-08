import { motion } from "framer-motion";
import "./about-me.css";
import { SiPython, SiNumpy, SiPandas, SiHtml5, SiCss3, SiReact } from "react-icons/si";


function About() {
  return (
    <section className="about-wrapper">
      <div className="about-container">
        {/* LEFT IMAGE / ID CARD WITH DOMAINS */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.45, 0, 0.55, 1],
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="image-frame">
            <img
              src="public\ChatGPT Image Nov 9, 2025, 12_49_40 AM.png"
              alt="Sajid Ikbal"
              className="profile-photo"
            />

            {/* CORE DOMAIN INSIDE CARD */}
            <div className="core-domain-section">
              <motion.div
                className="domain-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Problem Solving
              </motion.div>

              <motion.div
                className="domain-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Data Science
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.45, 0, 0.55, 1],
            delay: 0.2,
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            About <span className="highlight">Me</span>
          </motion.h2>

          <motion.h3
            className="subtitle"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Data Science & AI Enthusiast
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5 }}
          >
            I’m passionate about creating intelligent systems that bring data to
            life. My focus lies in applying <strong>AI</strong>,{" "}
            <strong>Machine Learning</strong>, and{" "}
            <strong>Data Science</strong> to build meaningful, efficient digital
            solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6 }}
          >
            Currently pursuing my <strong>IITM BS Degree</strong> in Data Science
            and working on projects combining intelligent automation with sleek
            web interfaces.
          </motion.p>

        {/* SKILLS SECTION */}
            <motion.div
              className="skills-section"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="skills-title">Skills & Tools</div>

              <div className="skills-icons">
                <div className="skill-item">
                  <SiPython className="skill-icon" style={{ color: "#3776AB" }} />
                  <span>Python</span>
                </div>
                <div className="skill-item">
                  <SiNumpy className="skill-icon" style={{ color: "#013243" }} />
                  <span>NumPy</span>
                </div>
                <div className="skill-item">
                  <SiPandas className="skill-icon" style={{ color: "#150458" }} />
                  <span>Pandas</span>
                </div>
                <div className="skill-item">
                  <SiHtml5 className="skill-icon" style={{ color: "#E34F26" }} />
                  <span>HTML</span>
                </div>
                <div className="skill-item">
                  <SiCss3 className="skill-icon" style={{ color: "#1572B6" }} />
                  <span>CSS</span>
                </div>
                <div className="skill-item">
                  <SiReact className="skill-icon" style={{ color: "#61DAFB" }} />
                  <span>React</span>
                </div>
              </div>
            </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default About;
