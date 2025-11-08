import { useEffect, useRef, useState } from "react";
import Home from "./home.jsx";
import About from "./about-me.jsx";
import Project from "./my-project.jsx";
import Contact from "./contact-me.jsx";
import Navbar from "./navbar.jsx";
import Lenis from "lenis";
import "./App.css";

function App() {
  const lenisRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef([]);
  const scrollingLockRef = useRef(false);

  // Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Scroll to section with navbar offset
  const lenisScrollToEl = (el) => {
    if (!el || !lenisRef.current) return;
    const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
    const target = el.offsetTop - navbarHeight;

    scrollingLockRef.current = true;
    lenisRef.current.scrollTo(target, {
      duration: 1.1,
      onComplete: () => {
        scrollingLockRef.current = false;
      },
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (scrollingLockRef.current) return;

      if (e.key === "ArrowDown") {
        setCurrentSection((prev) => {
          const next = Math.min(prev + 1, sectionsRef.current.length - 1);
          lenisScrollToEl(sectionsRef.current[next]);
          return next;
        });
      }

      if (e.key === "ArrowUp") {
        setCurrentSection((prev) => {
          const next = Math.max(prev - 1, 0);
          lenisScrollToEl(sectionsRef.current[next]);
          return next;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Navbar click handler
  const handleNavClick = (index) => {
    setCurrentSection(index);
    lenisScrollToEl(sectionsRef.current[index]);
  };

  return (
    <>
      <Navbar onNavClick={handleNavClick} />
      <div className="sections-container">
        <section ref={(el) => (sectionsRef.current[0] = el)} className="section">
           <Home
              onKnowMore={() => {
                 setCurrentSection(1);
                 lenisScrollToEl(sectionsRef.current[1]);
                 }}
                />
        </section>

        <section ref={(el) => (sectionsRef.current[1] = el)} className="section">
          <About />
        </section>

        <section ref={(el) => (sectionsRef.current[2] = el)} className="section">
          <Project />
        </section>

        <section ref={(el) => (sectionsRef.current[3] = el)} className="section">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
