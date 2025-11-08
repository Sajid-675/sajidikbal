import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import "./contact-me.css";

function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {/* Title */}
        <motion.h2
          className="contact-title"
          variants={fadeUp}
          custom={0}
        >
          <span className="gradient-text">Let’s Connect</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="contact-subtext"
          variants={fadeUp}
          custom={1}
        >
          Have a project in mind or just want to say hi?  
          Feel free to reach out anytime!
        </motion.p>

        {/* Links */}
        <div className="contact-links">
          {[
            {
              icon: <Mail size={20} />,
              name: "Email",
              link: "mailto:sajid402689@gmail.com",
            },
            {
              icon: <Github size={20} />,
              name: "GitHub",
              link: "https://github.com/Sajid-675?tab=overview&from=2025-10-01&to=2025-10-31",
            },
            // {
            //   icon: <Linkedin size={20} />,
            //   name: "LinkedIn",
            //   link: "https://linkedin.com/",
            // },
            // {
            //   icon: <Instagram size={20} />,
            //   name: "Instagram",
            //   link: "https://instagram.com/",
            // },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
              variants={fadeUp}
              custom={i + 2}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 25px rgba(255,215,128,0.25)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              {item.icon}
              <span>{item.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
