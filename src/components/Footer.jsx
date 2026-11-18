import React from 'react';
import { Mail, Phone, ArrowUp, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Selected Projects</a></li>
              <li><a href="#contact">Get In Touch</a></li>
            </ul>
          </div>

          {/* Column 3: Social Connections & Resume */}
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

        {/* Massive Bold Watermark Name across bottom (Directly matching Dribbble frame 00:36 "Michael ®") */}
        <div className="footer-massive-brand-watermark" aria-hidden="true">
          KARTIK ®
        </div>

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
