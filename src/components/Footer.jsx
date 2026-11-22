import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUp, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function Footer() {
  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.25 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(href, { duration: 1.25 });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="michael-footer-section">
      <div className="container">
        {/* Top Footer Grid */}
        <div className="footer-columns-grid">
          {/* Column 1: Navigation Links */}
          <div className="footer-col-nav">
            <span className="footer-col-heading">Navigation</span>
            <ul className="footer-nav-links">
              <li><a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About Me</a></li>
              <li><a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a></li>
              <li><a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Selected Projects</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Get In Touch</a></li>
            </ul>
          </div>

          {/* Column 2: Social Connections & Resume */}
          <div className="footer-col-socials">
            <span className="footer-col-heading">Connect &amp; Social</span>
            <div className="footer-social-pills-list">
              <a
                href="https://github.com/kartikbhure"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href="mailto:kartikbhure655@gmail.com"
                className="footer-social-pill"
              >
                <Mail size={14} />
                <span>Email Kartik</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href="tel:+918200418994"
                className="footer-social-pill"
              >
                <Phone size={14} />
                <span>Call / WhatsApp</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill pill-highlight"
              >
                <Sparkles size={14} />
                <span>Read Full Resume CV</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Massive Bold Watermark Name across bottom (matching Dribbble frame) */}
        <motion.div
          className="footer-massive-brand-watermark"
          aria-hidden="true"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, ease: luxuryEase }}
        >
          KARTIK ®
        </motion.div>

        {/* Bottom Copyright & Back to Top Line */}
        <div className="footer-bottom-bar">
          <div className="footer-copy-text">
            © 2026 Kartik Bhure. Engineered with React, Node.js &amp; Framer Motion.
          </div>

          <div className="footer-location-tag">
            Surat, Gujarat, India • Available Worldwide
          </div>

          <button onClick={scrollToTop} className="footer-back-to-top-btn" aria-label="Back to Top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
