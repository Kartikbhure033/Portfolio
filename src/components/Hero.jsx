import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function Hero({ isLoaded = true }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  // Prevent background scroll and pause Lenis while navigation drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) {
        window.lenis.stop();
      }
    } else {
      document.body.style.overflow = '';
      if (window.lenis) {
        window.lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = '';
      if (window.lenis) {
        window.lenis.start();
      }
    };
  }, [menuOpen]);

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

    if (window.lenis) {
      window.lenis.scrollTo(item.href, { duration: 1.25 });
    } else {
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
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
          {/* Brand Logo - drops down */}
          <motion.a
            href="#hero"
            className="image1-brand-logo"
            onClick={(e) => handleNavClick(e, { label: 'Home', href: '#hero' })}
            initial={{ opacity: 0, y: -14 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -14 }}
            transition={{ duration: 0.55, delay: 0.1, ease: luxuryEase }}
          >
            <span>Kartik</span>
            <span className="brand-reg">®</span>
          </motion.a>

          {/* Center Links (Home, About, Experience, Projects, Contact) - coming one by one */}
          <nav className="image1-nav-center-links">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`image1-nav-link ${activeNav === item.label ? 'active' : ''}`}
                initial={{ opacity: 0, y: -12 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
                transition={{
                  duration: 0.5,
                  delay: 0.18 + idx * 0.08,
                  ease: luxuryEase
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Right Hamburger Icon (2 clean horizontal white bars) */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="image1-hamburger-btn"
            aria-label="Open Navigation Menu"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: luxuryEase }}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </motion.button>
        </header>

        {/* 2. Massive Watermark Name behind Portrait (Exact pure CSS translate(-50%, -50%)) */}
        <motion.div
          className="image1-watermark-bg"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.85, delay: 0.05, ease: luxuryEase }}
        >
          KARTIK
        </motion.div>

        {/* 3. Left Narrative Text (Original HTML structure & exact font layout preserved) */}
        <div className="image1-left-narrative">
          <motion.p
            className="image1-narrative-p"
            initial={{ opacity: 0, y: 18 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.7, delay: 0.42, ease: luxuryEase }}
          >
            I DESIGN USER-CENTERED DIGITAL<br />
            EXPERIENCES THAT ARE SIMPLE<br />
            SMART AND IMPACTFUL
          </motion.p>
        </div>

        {/* 4. Center Hero Portrait (Exactly Dead-Center, original wrapper CSS preserved) */}
        <div className="image1-portrait-wrapper">
          <motion.img
            src="/assets/kartik_face_centered.png"
            alt="Kartik Bhure — Full Stack Developer"
            className="image1-portrait-img"
            loading="eager"
            decoding="sync"
            initial={{ opacity: 0, y: 35 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
            transition={{ duration: 0.9, delay: 0.28, ease: luxuryEase }}
          />
        </div>

        {/* 5. Bottom-Left Giant Name & Copyright (Original visual hierarchy preserved) */}
        <div className="image1-bottom-left-block">
          <motion.span
            className="image1-copyright-label"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.52, ease: luxuryEase }}
          >
            ©2026
          </motion.span>
          <motion.h1
            className="image1-display-name"
            initial={{ opacity: 0, y: 25 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.75, delay: 0.60, ease: luxuryEase }}
          >
            KARTIK
          </motion.h1>
        </div>

        {/* 6. Bottom-Right "Let's Talk" Card */}
        <motion.div
          className="image1-lets-talk-card"
          initial={{ opacity: 0, y: 25 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.8, delay: 0.72, ease: luxuryEase }}
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
          <a
            href="#contact"
            className="lets-talk-arrow-btn"
            aria-label="Contact Kartik"
            onClick={(e) => {
              e.preventDefault();
              if (window.lenis) {
                window.lenis.scrollTo('#contact', { duration: 1.25 });
              } else {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Fullscreen Drawer Overlay mounted directly via React Portal to document.body */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="nav-drawer-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28 }}
                onClick={() => setMenuOpen(false)}
              >
                <motion.div
                  className="nav-drawer-panel"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.35, ease: luxuryEase }}
                  onClick={(e) => e.stopPropagation()}
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
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
