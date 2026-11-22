import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { BookstorePreview, SalonPreview, CrudPreview, SaasPreview } from './ProjectPreviews';
import { MotionWords } from './MotionText';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function FeaturedWorks() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Independent slide state for each project row (0: Live App, 1: Architecture Specs, 2: Metrics)
  const [rowSlides, setRowSlides] = useState({
    'online-book-store': 0,
    'beauty-parlour-system': 0,
    'tech-fusion-crud-platform': 0,
    'mern-saas-dashboard': 0
  });

  const setProjectSlide = (projectId, dotIndex) => {
    setRowSlides((prev) => ({
      ...prev,
      [projectId]: dotIndex
    }));
  };

  const projects = [
    {
      id: 'online-book-store',
      number: '001',
      title: 'ONLINE BOOK STORE MANAGEMENT SYSTEM',
      tagline: 'Enterprise E-Commerce & Inventory Automation Platform',
      description: 'Built an enterprise-grade responsive bookstore application featuring token authorization, dynamic multi-filter catalog browsing, persistent shopping cart state, and an administrative inventory monitoring dashboard.',
      tags: [
        'Angular 17',
        'Node.js REST API',
        'MongoDB Atlas',
        'JWT Auth Route Guards',
        'Persistent Cart State',
        'Admin Inventory OS'
      ],
      githubUrl: 'https://github.com/kartikbhure',
      previewComponent: <BookstorePreview />,
      specs: {
        architecture: 'Client-Server RESTful Architecture with Modular Route Guards',
        frontend: 'Angular 17 (Standalone Components, Signals, Reactive Forms)',
        backend: 'Node.js, Express.js, JWT Middleware',
        database: 'MongoDB (Mongoose ODM, Optimized Indexing)',
        capacity: '5,000+ Book Titles with Sub-second Filter Queries'
      },
      metrics: [
        { label: 'Inventory Capacity', value: '5,000+ Titles' },
        { label: 'Checkout Latency', value: '< 1.8s' },
        { label: 'Order Workflow', value: '35% Faster' }
      ]
    },
    {
      id: 'beauty-parlour-system',
      number: '002',
      title: 'BEAUTY PARLOUR & SALON MANAGEMENT OS',
      tagline: 'Full-Cycle Salon ERP, Stylist Allocation & Billing Suite',
      description: 'Web-based management suite featuring dedicated Admin & Customer modules for salon appointments, dynamic stylist chair allocation, package catalogs, and automated tax-compliant billing generation.',
      tags: [
        'React.js',
        'Node.js & Express',
        'MySQL Relational DB',
        'Real-Time Slot Verification',
        'Stylist Allocation',
        'Automated Invoicing'
      ],
      githubUrl: 'https://github.com/kartikbhure',
      previewComponent: <SalonPreview />,
      specs: {
        architecture: 'Relational Database Schema with ACID Transaction Guards',
        frontend: 'React.js, CSS Grid, Modular UI State',
        backend: 'Node.js RESTful Micro-handlers',
        database: 'MySQL (Foreign Key Relational Integrity)',
        capacity: '100% Digitized Client Service History & Billing Records'
      },
      metrics: [
        { label: 'Queue Efficiency', value: '60% Streamlined' },
        { label: 'Client Records', value: '100% Digitized' },
        { label: 'Booking Capacity', value: '25+ Daily Slots' }
      ]
    },
    {
      id: 'tech-fusion-crud-platform',
      number: '003',
      title: 'TECH-FUSION REACT CRUD PLATFORM',
      tagline: 'Production React Platform Engineered During Web Dev Internship',
      description: 'High-performance React application developed during the 15-day Web Development Internship at Tech-Fusion Technologies. Features modular components with full CRUD operations, reusable custom hooks, and state caching.',
      tags: [
        'React 19',
        'Custom React Hooks',
        'End-to-End CRUD',
        'Live Search & Sorting',
        'Multi-Field Pagination',
        'Lighthouse 100/100'
      ],
      githubUrl: 'https://github.com/kartikbhure',
      previewComponent: <CrudPreview />,
      specs: {
        architecture: 'Custom Hook State Cache with Optimistic Mutations',
        frontend: 'React 19, Vite, JavaScript ES6+',
        backend: 'REST API Integration with Error Boundaries',
        performance: 'Sub-120ms Latency with 100/100 Lighthouse Audit',
        internship: 'Tech-Fusion Technologies (Web Development Intern, 2024)'
      },
      metrics: [
        { label: 'Lighthouse Score', value: '100 / 100' },
        { label: 'API Latency', value: '< 120ms' },
        { label: 'Data Operations', value: 'Full CRUD' }
      ]
    },
    {
      id: 'mern-saas-dashboard',
      number: '004',
      title: 'MERN SAAS CLOUD ANALYTICS PLATFORM',
      tagline: 'Real-Time Telemetry & Data Aggregation Dashboard',
      description: 'Modern full-stack cloud analytics dashboard providing dynamic chart visualizations, role-based JWT authorization, RESTful aggregation endpoints, and minimalist high-density data tables.',
      tags: [
        'MongoDB Aggregation',
        'Express.js Engine',
        'React.js Visuals',
        'Node.js REST Services',
        'Recharts Analytics',
        'Role-Based JWT'
      ],
      githubUrl: 'https://github.com/kartikbhure',
      previewComponent: <SaasPreview />,
      specs: {
        architecture: 'MERN Full-Stack with Mongo Aggregation Pipeline',
        frontend: 'React.js, Recharts, Responsive Dashboard Grid',
        backend: 'Node.js, Express.js API, JWT Authentication',
        database: 'MongoDB Atlas with Multi-Stage Metric Aggregations',
        analytics: 'Real-Time MRR, Churn & Session Telemetry Calculation'
      },
      metrics: [
        { label: 'Uptime Reliability', value: '99.98%' },
        { label: 'Data Pipeline', value: 'Real-Time' },
        { label: 'MRR Monitored', value: '$28,450+' }
      ]
    }
  ];

  return (
    <section className="michael-projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="projects-section-header">
          <motion.div
            className="projects-category-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: luxuryEase }}
          >
            <span className="eyebrow-accent-number">03</span>
            <span className="eyebrow-sep">/</span>
            <span>SELECTED PROJECTS</span>
          </motion.div>
          <h2 className="projects-main-title">
            <MotionWords
              text="FEATURED WORK & CODE ARCHITECTURE."
              delay={0.12}
              stagger={0.04}
            />
          </h2>
          <motion.p
            className="projects-main-subtext"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.25, ease: luxuryEase }}
          >
            Production-grade web applications, business management suites, and full-stack software engineered with clean code and modern frameworks.
          </motion.p>
        </div>

        {/* Project List / Accordion Rows (All Preview Cards Visible on Scroll) */}
        <div className="projects-interactive-list">
          {projects.map((project, idx) => {
            const isActive = activeIdx === idx;
            const currentSlide = rowSlides[project.id] ?? 0;

            return (
              <div
                key={project.id}
                className={`project-interactive-row ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
              >
                {/* 3-Column Grid: Number | Content | Preview Card */}
                <div className="project-row-inner-grid">
                  {/* Left Column: Asterisk & 3-Digit Number */}
                  <div className="project-col-number">
                    <span className="row-asterisk">✱</span>
                    <span className="row-number-text">{project.number}</span>
                  </div>

                  {/* Middle Column: Title, Description & Tags */}
                  <div className="project-col-content">
                    <h3 className={`project-row-headline ${isActive ? 'title-active-orange' : ''}`}>
                      {project.title}
                    </h3>

                    <p className="project-row-description">
                      {project.description}
                    </p>

                    {/* Tag Badges Clusters */}
                    <div className="project-row-tags-cluster">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="project-tag-pill-clean">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="project-row-actions">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-btn-clean btn-github"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon size={13} />
                        <span>View Source Code</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Live Interactive Media Card (Permanently Visible on Scroll) */}
                  <div className="project-col-preview">
                    <motion.div
                      className={`project-media-card-frame ${isActive ? 'card-focused' : ''}`}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* Slide Content */}
                      <div className="media-card-slide-canvas">
                        {currentSlide === 0 && (
                          <div className="slide-content-app">
                            {project.previewComponent}
                          </div>
                        )}

                        {currentSlide === 1 && (
                          <div className="slide-content-specs">
                            <div className="specs-card-header">
                              <Layers size={14} className="specs-icon" />
                              <span>Architecture Specifications</span>
                            </div>
                            <ul className="specs-list">
                              <li>
                                <strong>Architecture:</strong> {project.specs.architecture}
                              </li>
                              <li>
                                <strong>Frontend:</strong> {project.specs.frontend}
                              </li>
                              <li>
                                <strong>Backend:</strong> {project.specs.backend}
                              </li>
                              {project.specs.database && (
                                <li>
                                  <strong>Database:</strong> {project.specs.database}
                                </li>
                              )}
                              {project.specs.capacity && (
                                <li>
                                  <strong>Capacity:</strong> {project.specs.capacity}
                                </li>
                              )}
                            </ul>
                          </div>
                        )}

                        {currentSlide === 2 && (
                          <div className="slide-content-metrics">
                            <div className="specs-card-header">
                              <Cpu size={14} className="specs-icon" />
                              <span>Verified Engineering Metrics</span>
                            </div>
                            <div className="specs-metrics-grid">
                              {project.metrics.map((m, mIdx) => (
                                <div key={mIdx} className="metric-chip">
                                  <span className="metric-chip-val">{m.value}</span>
                                  <span className="metric-chip-lbl">{m.label}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Carousel Navigation Dots (Matching Reference Image) */}
                      <div className="media-card-dots-bar" onClick={(e) => e.stopPropagation()}>
                        {[0, 1, 2].map((dot) => (
                          <button
                            key={dot}
                            onClick={() => setProjectSlide(project.id, dot)}
                            className={`carousel-dot-btn ${currentSlide === dot ? 'dot-active' : ''}`}
                            aria-label={`Switch to slide ${dot + 1}`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Horizontal Divider Line */}
                <div className="project-row-bottom-divider" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
