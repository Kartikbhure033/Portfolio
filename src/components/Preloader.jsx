import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  // Only load ONCE per session when the user arrives
  const [hasVisited, setHasVisited] = useState(() => {
    try {
      return sessionStorage.getItem('kartik_portfolio_visited') === 'true';
    } catch {
      return false;
    }
  });

  const [count, setCount] = useState(1);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // If the user has already arrived in this session, skip preloader completely
    if (hasVisited) {
      document.body.style.overflow = '';
      if (onComplete) onComplete();
      return;
    }

    // Prevent scrolling during the first arrival loader
    document.body.style.overflow = 'hidden';

    const startTime = performance.now();
    const duration = 1500; // 1.5 seconds smooth countdown

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic curve for natural, elegant acceleration
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(1 + easedProgress * 99);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        setTimeout(() => {
          setIsFinished(true);
          try {
            sessionStorage.setItem('kartik_portfolio_visited', 'true');
          } catch {
            // ignore storage restrictions
          }
          setHasVisited(true);
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 250);
      }
    };

    const animId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animId);
      document.body.style.overflow = '';
    };
  }, [hasVisited, onComplete]);

  // If already visited, don't render anything to DOM
  if (hasVisited) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="portfolio-preloader-curtain"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Subtle Ambient Background Radial Glow */}
          <div className="preloader-radial-glow" />

          {/* Top Architectural Meta Row */}
          <div className="preloader-meta-top">
            <div className="preloader-brand">
              <span className="preloader-brand-bold">KARTIK</span>
              <span className="preloader-brand-reg">®</span>
              <span className="preloader-brand-sub">PORTFOLIO</span>
            </div>
            <div className="preloader-meta-right">
              <span className="preloader-live-pulse" />
              <span>SURAT, GUJARAT, INDIA</span>
            </div>
          </div>

          {/* Center Counter Display */}
          <div className="preloader-center-content">
            <div className="preloader-count-wrapper">
              <span className="preloader-counter-digits">
                {count < 10 ? `0${count}` : count}
              </span>
              <span className="preloader-counter-percent">%</span>
            </div>

            <div className="preloader-status-text">
              <span className="preloader-asterisk">✱</span>
              <span>INITIALIZING SYSTEM &amp; ASSETS</span>
            </div>
          </div>

          {/* Bottom Progress Bar & Coordinates */}
          <div className="preloader-bottom-bar">
            <div className="preloader-coords">
              <span>LAT 21.1702° N</span>
              <span className="preloader-coords-sep">/</span>
              <span>LON 72.8311° E</span>
            </div>

            {/* Glowing Orange Progress Track */}
            <div className="preloader-track-outer">
              <div
                className="preloader-track-fill"
                style={{ width: `${count}%` }}
              />
            </div>

            <div className="preloader-edition">
              <span>EDITION 2026</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
