import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveNav(item.label);
    setMenuOpen(false);
    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="image1-hero-container" id="hero">
      {/* The Master Orange Canvas (Edge-to-Edge Full Screen) */}
      <div className="image1-orange-canvas">
        {/* Architectural Grid Lines & Intersection Crosshairs (+) */}
        <svg className="hero-architectural-grid" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none" aria-hidden="true">
          {/* Horizontal grid lines */}
          <line x1="0" y1="90" x2="1440" y2="90" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          <line x1="0" y1="460" x2="1440" y2="460" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          <line x1="0" y1="840" x2="1440" y2="840" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

          {/* Vertical grid lines */}
          <line x1="280" y1="0" x2="280" y2="900" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          <line x1="720" y1="0" x2="720" y2="900" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          <line x1="1160" y1="0" x2="1160" y2="900" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

          {/* Crosshairs (+) at line intersections */}
          <g stroke="rgba(255, 255, 255, 0.55)" strokeWidth="1.8">
            {/* Top intersections */}
            <line x1="272" y1="90" x2="288" y2="90" />
            <line x1="280" y1="82" x2="280" y2="98" />

            <line x1="712" y1="90" x2="728" y2="90" />
            <line x1="720" y1="82" x2="720" y2="98" />

            <line x1="1152" y1="90" x2="1168" y2="90" />
            <line x1="1160" y1="82" x2="1160" y2="98" />

            {/* Middle intersections */}
            <line x1="272" y1="460" x2="288" y2="460" />
            <line x1="280" y1="452" x2="280" y2="468" />

            <line x1="712" y1="460" x2="728" y2="460" />
            <line x1="720" y1="452" x2="720" y2="468" />

            <line x1="1152" y1="460" x2="1168" y2="460" />
            <line x1="1160" y1="452" x2="1160" y2="468" />

            {/* Bottom intersections */}
            <line x1="272" y1="840" x2="288" y2="840" />
            <line x1="280" y1="832" x2="280" y2="848" />

            <line x1="712" y1="840" x2="728" y2="840" />
            <line x1="720" y1="832" x2="720" y2="848" />

            <line x1="1152" y1="840" x2="1168" y2="840" />
            <line x1="1160" y1="832" x2="1160" y2="848" />
          </g>
        </svg>

        {/* 1. Header / Navbar INSIDE the Orange Canvas */}
        <header className="image1-canvas-navbar">
          {/* Brand Logo */}
          <a href="#hero" className="image1-brand-logo" onClick={(e) => handleNavClick(e, { label: 'Home', href: '#hero' })}>
            <span>Kartik</span>
            <span className="brand-reg">®</span>
          </a>

          {/* Center Links (Home, About, Projects, Contact - No Services!) */}
          <nav className="image1-nav-center-links">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`image1-nav-link ${activeNav === item.label ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Hamburger Icon (2 clean horizontal white bars) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="image1-hamburger-btn"
            aria-label="Open Navigation Menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </header>

        {/* 2. Massive Watermark Name behind Portrait */}
        <div className="image1-watermark-bg" aria-hidden="true">
          KARTIK
        </div>

        {/* 3. Left Narrative Text */}
        <div className="image1-left-narrative">
          <p className="image1-narrative-p">
            I DESIGN USER-CENTERED DIGITAL<br />
            EXPERIENCES THAT ARE SIMPLE<br />
            SMART AND IMPACTFUL
          </p>
        </div>

        {/* 4. Center Hero Portrait (Exactly Dead-Center, Zoomed in on Face, Neck & Shoulders) */}
        <div className="image1-portrait-wrapper">
          <img
            src="/assets/kartik_face_centered.png"
            alt="Kartik Bhure — Full Stack Developer"
            className="image1-portrait-img"
            loading="eager"
            decoding="sync"
          />
        </div>



        {/* 6. Bottom-Left Giant Name & Copyright */}
        <div className="image1-bottom-left-block">
          <span className="image1-copyright-label">©2026</span>
          <h1 className="image1-display-name">
            KARTIK
          </h1>
        </div>

        {/* 7. Bottom-Right "Let's Talk" Card */}
        <motion.div
          className="image1-lets-talk-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Left: Square avatar frame */}
          <div className="lets-talk-avatar-frame">
            <img src="/assets/kartik_face_centered.png" alt="Kartik" loading="eager" />
          </div>

          {/* Middle: Text info */}
          <div className="lets-talk-info-col">
            <div className="lets-talk-tag">
              <span>Let's Talk</span>
              <span className="tag-sparkle">✻</span>
            </div>
            <span className="lets-talk-name">Kartik Bhure</span>
            <span className="lets-talk-role">MERN &amp; UI/UX</span>
          </div>

          {/* Right: Square white button with arrow */}
          <a href="#contact" className="lets-talk-arrow-btn" aria-label="Contact Kartik">
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Fullscreen Drawer Overlay (when hamburger is clicked) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="nav-drawer-panel"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Drawer Header */}
              <div className="drawer-header">
                <span className="drawer-brand">KARTIK BHURE</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="drawer-close-btn"
                  aria-label="Close Menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="drawer-body-grid">
                <div className="drawer-nav-list">
                  {navItems.map((link, idx) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className="drawer-nav-item"
                    >
                      <span className="drawer-nav-number">0{idx + 1}</span>
                      <span className="drawer-nav-label">{link.label}</span>
                    </a>
                  ))}
                </div>

                <div className="drawer-contact-block">
                  <div className="drawer-contact-group">
                    <span className="drawer-contact-title">Contact Phone</span>
                    <a href="tel:+918200418994" className="drawer-contact-value">
                      +91 8200418994
                    </a>
                  </div>

                  <div className="drawer-contact-group">
                    <span className="drawer-contact-title">Contact Mail</span>
                    <a href="mailto:kartikbhure655@gmail.com" className="drawer-contact-value">
                      kartikbhure655@gmail.com
                    </a>
                  </div>

                  <div className="drawer-contact-group">
                    <span className="drawer-contact-title">Location &amp; Availability</span>
                    <span className="drawer-contact-desc">
                      Surat, Gujarat, India • Open for Full-Time Roles &amp; Freelance Projects
                    </span>
                  </div>

                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, { label: 'Contact', href: '#contact' })}
                    className="drawer-get-in-touch-btn"
                  >
                    <span>Get In Touch</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
