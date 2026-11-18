import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="michael-about-section" id="about">
      <div className="container">
        {/* "MY IMPACT THROUGH USER EXPERIENCE" (Directly matching Dribbble Reference) */}
        <div className="about-impact-grid">
          {/* Left Column: Portrait Card with Corner Crosshairs */}
          <motion.div
            className="about-portrait-card-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
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
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Category Eyebrow */}
            <div className="about-category-eyebrow">
              <span className="eyebrow-accent-number">01</span>
              <span className="eyebrow-sep">/</span>
              <span>ABOUT KARTIK BHURE</span>
            </div>

            {/* Display Headline */}
            <h2 className="about-impact-headline">
              MY IMPACT THROUGH USER EXPERIENCE &amp; HIGH-VELOCITY CODE.
            </h2>

            {/* Narrative Paragraph */}
            <div className="about-narrative-copy">
              <p className="narrative-p-highlight">
                I'm Kartik, a Full-Stack MERN engineer and BCA graduate (SGPA 7.35 / 10.0) from Surat, Gujarat,
                passionate about building scalable architectures, intuitive user interfaces, and robust web applications.
              </p>
              <p className="narrative-p-detail">
                During my hands-on 15-day web development internship at <strong>Tech-Fusion Technologies</strong>,
                I engineered modular React applications with complete CRUD functionality, custom state caching hooks,
                and optimistic UI updates. I turn complex logic into clean, maintainable, and high-velocity software.
              </p>
            </div>

            {/* Key Impact Metrics Grid */}
            <div className="about-metrics-two-col">
              <div className="metric-box-card">
                <span className="metric-box-number">10+</span>
                <span className="metric-box-title">PROJECTS COMPLETED</span>
                <span className="metric-box-sub">Full-stack web applications, e-commerce, &amp; business suites</span>
              </div>

              <div className="metric-box-card">
                <span className="metric-box-number">7.35</span>
                <span className="metric-box-title">BCA GRADUATE SGPA</span>
                <span className="metric-box-sub">Veer Narmad South Gujarat University (2026 Batch)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
