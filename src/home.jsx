import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import "./home.css";

function Home({ onKnowMore }) {
  const typedRef = useRef(null);

  // === Typed.js animation ===
  useEffect(() => {
    const el = typedRef.current;
    if (!el) return;
    const typed = new Typed(el, {
      strings: [
        "Crafting intelligent data-driven experiences.",
        "Transforming ideas into analytical realities.",
        "Designing with data, powered by innovation.",
      ],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1800,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-wrapper">
        {/* === LEFT CONTENT === */}
        <div className="home-left">
          <motion.h3
            className="intro"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Hello, I’m <span className="highlight">Sajid Ikbal</span>
          </motion.h3>

          <motion.h1
            className="headline"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            Data Science & AI Enthusiast
          </motion.h1>

          <motion.p
            ref={typedRef}
            className="subline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.p>

          <motion.div
            className="buttons"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="public\sajid_ikbal_cv.pdf" download="Sajid_Ikbal_cv.pdf" className="btn-primary">
  Download CV
</a>

            <button className="btn-outline" onClick={onKnowMore}>
              Know More ↓
            </button>
          </motion.div>
        </div>

        {/* === RIGHT SHOWCASE SPACE (for 3D or image later) === */}
                <motion.div
          className="home-right-placeholder"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
        >
         <div className="placeholder-box">
            <img
              src="public\ChatGPT Image Nov 9, 2025, 12_49_40 AM.png"
              alt="Anime Boy"
              className="profile-pic"
            />
          </div>
        </motion.div>

      </div> 
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: [0, 10, 0],
          transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
        }}
      >
        Scroll Down
      </motion.div>
    </section>
  );
}

export default Home;
