import React, { useState } from "react";
import "./navbar.css";

function Navbar({ onNavClick, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { idx: 0, label: "Home" },
    { idx: 1, label: "About" },
    { idx: 2, label: "Projects" },
    { idx: 3, label: "Contact" },
  ];

  const handleClick = (index) => {
    if (onNavClick) onNavClick(index);
    setMenuOpen(false); // close menu after clicking on mobile
  };

  return (
    <nav className="navigator" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-logo">MyPortfolio</div>

        {/* Hamburger only visible on mobile */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Links section */}
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          {items.map((it) => (
            <button
              key={it.idx}
              type="button"
              className={`navbuttons ${
                activeSection === it.idx ? "active" : ""
              }`}
              onClick={() => handleClick(it.idx)}
            >
              {it.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
