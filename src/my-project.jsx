import { motion } from "framer-motion";
import "./my-project.css";

function Project() {
  const projects = [
    // {
    //   title: "AI Insight Dashboard",
    //   description:
    //     "An interactive analytics dashboard visualizing real-time data using React and D3.js.",
    //   tech: ["React", "D3.js", "Tailwind"],
    // },
    // {
    //   title: "E-Commerce Store",
    //   description:
    //     "Full-stack eCommerce platform with Next.js, MongoDB, and Stripe payments.",
    //   tech: ["Next.js", "MongoDB", "Stripe"],
    // },
    // {
    //   title: "Portfolio Website",
    //   description:
    //     "Animated personal portfolio featuring 3D models and scroll-triggered animations.",
    //   tech: ["React", "Framer Motion", "Three.js"],
    // },
    {
      title: "COMING SOON",
      description: "LEARNING AND EXPLORING MORE PROJECTS",
      tech: ["Stay Tuned"],
    },
  ];

  // Container animation (staggered flow)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Card animation (depth + gentle motion)
  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    whileHover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 8px 20px rgba(255, 255, 255, 0.08)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="project-section" id="projects">
      <motion.div
        className="project-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: false }}
      >
        <motion.h2
          className="project-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.div className="project-grid" variants={container}>
          {projects.map((proj, i) => (
            <motion.div
              className="project-card"
              key={i}
              variants={card}
              whileHover="whileHover"
            >
              <div className="card-content">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="tech-stack">
                  {proj.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Project;
