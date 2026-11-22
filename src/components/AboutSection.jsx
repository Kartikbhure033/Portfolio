import React from 'react';
import { motion } from 'framer-motion';
import { MotionWords } from './MotionText';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function AboutSection() {
  return (
    <section className="michael-about-section" id="about">
      <div className="container">
        {/* "MY IMPACT THROUGH USER EXPERIENCE" */}
        <div className="about-impact-grid">
          {/* Left Column: Portrait Card with Corner Crosshairs */}
          <motion.div
            className="about-portrait-card-wrapper"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: luxuryEase }}
          >
            <div className="crosshair-portrait-box">
              {/* 4 Corner Crosshairs (+) from Dribbble shot */}
              <span className="crosshair-plus plus-tl">+</span>
              <span className="crosshair-plus plus-tr">+</span>
              <span className="crosshair-plus plus-bl">+</span>
              <span className="crosshair-plus plus-br">+</span>

              <div className="portrait-image-inner">
                <img
                  src="/assets/kartik_face_centered.png"
                  alt="Kartik Bhure — Full Stack Developer"
                  className="about-action-photo"
                  loading="eager"
                />
              </div>

              {/* Verified Experience Badge pinned on image */}
              <div className="portrait-floating-meta-pill">
                <div className="meta-pill-indicator" />
                <span>Tech-Fusion Technologies Intern • 2024</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Impact Numbers */}
          <motion.div
            className="about-impact-narrative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: luxuryEase }}
          >
            {/* Category Eyebrow */}
            <div className="about-category-eyebrow">
              <span className="eyebrow-accent-number">01</span>
              <span className="eyebrow-sep">/</span>
              <span>ABOUT KARTIK BHURE</span>
            </div>

            {/* Display Headline with Motion on Text (kinetic word reveals) */}
            <h2 className="about-impact-headline">
              <MotionWords
                text="MY IMPACT THROUGH USER EXPERIENCE & HIGH-VELOCITY CODE."
                delay={0.15}
                stagger={0.04}
              />
            </h2>

            {/* Narrative Paragraph */}
            <div className="about-narrative-copy">
              <motion.p
                className="narrative-p-highlight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.25, ease: luxuryEase }}
              >
                I'm Kartik, a Full-Stack MERN engineer and BCA graduate (SGPA 7.35 / 10.0) from Surat, Gujarat,
                passionate about building scalable architectures, intuitive user interfaces, and robust web applications.
              </motion.p>
              <motion.p
                className="narrative-p-detail"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.35, ease: luxuryEase }}
              >
                During my hands-on 15-day web development internship at <strong>Tech-Fusion Technologies</strong>,
                I engineered modular React applications with complete CRUD functionality, custom state caching hooks,
                and optimistic UI updates. I turn complex logic into clean, maintainable, and high-velocity software.
              </motion.p>
            </div>

            {/* Key Impact Metrics Grid */}
            <div className="about-metrics-two-col">
              <motion.div
                className="metric-box-card"
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.4, ease: luxuryEase }}
              >
                <span className="metric-box-number">10+</span>
                <span className="metric-box-title">PROJECTS COMPLETED</span>
                <span className="metric-box-sub">Full-stack web applications, e-commerce, &amp; business suites</span>
              </motion.div>

              <motion.div
                className="metric-box-card"
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: 0.5, ease: luxuryEase }}
              >
                <span className="metric-box-number">7.35</span>
                <span className="metric-box-title">BCA GRADUATE SGPA</span>
                <span className="metric-box-sub">Veer Narmad South Gujarat University (2026 Batch)</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
