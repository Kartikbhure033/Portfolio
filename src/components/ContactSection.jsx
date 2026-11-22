import React from 'react';
import { motion } from 'framer-motion';
import { MotionWords } from './MotionText';

const luxuryEase = [0.16, 1, 0.3, 1];

export default function ContactSection() {
  return (
    <section className="michael-contact-section" id="contact">
      <div className="container">
        <motion.div
          className="contact-image-exact-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: luxuryEase }}
        >
          {/* Title with Motion on Text */}
          <h2 className="contact-exact-name">
            <MotionWords text="KARTIK BHURE" delay={0.1} stagger={0.06} />
          </h2>

          {/* Subtitle / Bio */}
          <motion.p
            className="contact-exact-bio"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
          >
            Focused on crafting clean, scalable, and intuitive digital experiences that blend engineering discipline with high performance.
          </motion.p>

          {/* Direct Communication Heading */}
          <motion.div
            className="contact-exact-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.3, ease: luxuryEase }}
          >
            DIRECT COMMUNICATION:
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="contact-exact-links"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.38, ease: luxuryEase }}
          >
            <a href="mailto:kartikbhure655@gmail.com" className="contact-exact-link">
              kartikbhure655@gmail.com
            </a>
            <a href="tel:+918200418994" className="contact-exact-link">
              +91 8200418994
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
