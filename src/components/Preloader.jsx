import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  // Check if visited in this session
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
    // If the user has already arrived in this session, skip preloader
    if (hasVisited) {
      document.body.style.overflow = '';
      if (onComplete) onComplete();
      return;
    }

    // Prevent scrolling during arrival count
    document.body.style.overflow = 'hidden';

    const startTime = performance.now();
    const duration = 1500; // 1.5s smooth acceleration

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
        // Pause briefly at 100% so user registers "100%", then begin lifting curtain
        setTimeout(() => {
          setIsFinished(true); // Curtain starts sliding upward

          // Trigger home page animations right as the curtain unveils the screen (600ms into slide)
          // so all navbar items, text, portrait, and buttons animate LIVE in front of the user!
          setTimeout(() => {
            document.body.style.overflow = '';
            if (onComplete) onComplete();
          }, 600);
        }, 250);
      }
    };

    const animId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animId);
      document.body.style.overflow = '';
    };
  }, [hasVisited, onComplete]);

  // If already visited and finished exit, don't render to DOM
  if (hasVisited) {
    return null;
  }

  return (
    <AnimatePresence
      onExitComplete={() => {
        setHasVisited(true);
        try {
          sessionStorage.setItem('kartik_portfolio_visited', 'true');
        } catch {
          // ignore storage restrictions
        }
        document.body.style.overflow = '';
        if (onComplete) onComplete();
      }}
    >
      {!isFinished && (
        <motion.div
          key="preloader-curtain"
          className="portfolio-preloader-curtain"
          initial={{ y: '0%' }}
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
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
              <span className="preloader-asterisk">{count === 100 ? '✦' : '✱'}</span>
              <span>{count === 100 ? 'PORTFOLIO READY • ENTERING SYSTEM' : 'INITIALIZING ARCHITECTURE & ASSETS'}</span>
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
