import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="michael-contact-section" id="contact">
      <div className="container">
        <motion.div
          className="contact-image-exact-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Title */}
          <h2 className="contact-exact-name">
            KARTIK BHURE
          </h2>

          {/* Subtitle / Bio */}
          <p className="contact-exact-bio">
            Focused on crafting clean, scalable, and intuitive digital experiences that blend engineering discipline with high performance.
          </p>

          {/* Direct Communication Heading */}
          <div className="contact-exact-heading">
            DIRECT COMMUNICATION:
          </div>

          {/* Contact Details */}
          <div className="contact-exact-links">
            <a href="mailto:kartikbhure655@gmail.com" className="contact-exact-link">
              kartikbhure655@gmail.com
            </a>
            <a href="tel:+918200418994" className="contact-exact-link">
              +91 8200418994
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
