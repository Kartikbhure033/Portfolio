import React from 'react';
import { motion } from 'framer-motion';
import { MotionWords } from './MotionText';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function ExperienceSection() {
  const experiences = [
    {
      id: 'tech-fusion',
      number: '01',
      period: 'JUN 2024 — JUL 2024',
      badge: '15-DAY INTENSIVE INTERNSHIP',
      role: 'Web Development Intern',
      organization: 'TECH-FUSION TECHNOLOGIES',
      location: 'Surat / Navsari, Gujarat',
      description: 'Engineered modular React applications with complete Create, Read, Update, and Delete (CRUD) operations, custom data-fetching hooks, and optimistic UI state caching. Optimized bundle footprint to achieve sub-120ms API response latency and a 100/100 Google Lighthouse audit.',
      skills: [
        'React 19',
        'Custom React Hooks',
        'Optimistic CRUD State',
        'REST API Integration',
        'Vite',
        'Lighthouse 100/100'
      ],
      metrics: [
        { label: 'Lighthouse Score', value: '100 / 100' },
        { label: 'API Latency', value: '< 120ms' },
        { label: 'CRUD Handlers', value: '100% Modular' }
      ]
    },
    {
      id: 'freelance-fullstack',
      number: '02',
      period: '2024 — PRESENT',
      badge: 'CLIENT PROJECTS & SYSTEM ARCHITECTURE',
      role: 'Full-Stack MERN & Frontend Engineer',
      organization: 'INDEPENDENT CLIENT ENGINEERING',
      location: 'Surat, Gujarat • Remote',
      description: 'Designed and deployed enterprise-grade web applications for real-world business use cases. Built an Angular 17 & Node.js online bookstore managing 5,000+ catalog titles, and engineered a comprehensive salon ERP system featuring live stylist chair allocation, queue monitoring, and automated tax invoicing.',
      skills: [
        'MongoDB Atlas',
        'Express.js Engine',
        'React & Angular 17',
        'Node.js REST Services',
        'MySQL Relational DB',
        'JWT Role Guards'
      ],
      metrics: [
        { label: 'Shipped Systems', value: '10+ Projects' },
        { label: 'Catalog Handled', value: '5,000+ Titles' },
        { label: 'Appointment Queue', value: '60% Streamlined' }
      ]
    },
    {
      id: 'bca-degree',
      number: '03',
      period: '2023 — 2026',
      badge: 'BCA GRADUATE • SGPA 7.35',
      role: 'Bachelor of Computer Applications (BCA)',
      organization: 'VEER NARMAD SOUTH GUJARAT UNIVERSITY',
      location: 'Surat, Gujarat, India',
      description: 'Rigorous 3-year university curriculum focused on computer science fundamentals, Object-Oriented Programming (OOP), Data Structures & Algorithms, Relational Database Management Systems (RDBMS), and web technologies. Maintained an excellent academic track record with an aggregate SGPA of 7.35 / 10.0.',
      skills: [
        'SGPA 7.35 / 10.0',
        'Data Structures & Algorithms',
        'RDBMS & SQL Schema Design',
        'OOP Architecture',
        'Software Engineering'
      ],
      metrics: [
        { label: 'Aggregate SGPA', value: '7.35 / 10.0' },
        { label: 'Core Coursework', value: '100% Passed' },
        { label: 'Graduation Year', value: 'Class of 2026' }
      ]
    }
  ];

  return (
    <section className="michael-experience-section" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="experience-section-header">
          <motion.div
            className="experience-category-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: luxuryEase }}
          >
            <span className="eyebrow-accent-number">02</span>
            <span className="eyebrow-sep">/</span>
            <span>EXPERIENCE &amp; EDUCATION</span>
          </motion.div>

          <h2 className="experience-main-title">
            <MotionWords
              text="PROFESSIONAL JOURNEY & PROVEN IMPACT."
              delay={0.12}
              stagger={0.04}
            />
          </h2>

          <motion.p
            className="experience-main-subtext"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.25, ease: luxuryEase }}
          >
            Hands-on software development internship, verified full-stack client deliverables, and academic foundation in computer applications.
          </motion.p>
        </div>

        {/* Experience Rows */}
        <div className="experience-timeline-list">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="experience-timeline-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: luxuryEase }}
            >
              <div className="experience-row-inner-grid">
                {/* Left Column: Number & Period */}
                <div className="exp-col-period">
                  <div className="exp-number-pill">
                    <span className="row-asterisk">✱</span>
                    <span className="exp-num-txt">{exp.number}</span>
                  </div>
                  <span className="exp-period-label">{exp.period}</span>
                  <span className="exp-badge-micro">{exp.badge}</span>
                </div>

                {/* Middle Column: Organization, Role & Details */}
                <div className="exp-col-content">
                  <div className="exp-org-row">
                    <h3 className="exp-org-title">{exp.organization}</h3>
                    <span className="exp-location-tag">{exp.location}</span>
                  </div>

                  <h4 className="exp-role-title">{exp.role}</h4>

                  <p className="exp-description-text">{exp.description}</p>

                  {/* Skills / Tech Tags */}
                  <div className="exp-skills-cluster">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="exp-skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Key Metric Highlights */}
                <div className="exp-col-metrics">
                  <div className="exp-metrics-card">
                    {exp.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="exp-metric-item">
                        <span className="exp-metric-val">{m.value}</span>
                        <span className="exp-metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Horizontal Divider */}
              <div className="exp-row-divider" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
