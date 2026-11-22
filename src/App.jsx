import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import AtmosphericBackground from './components/AtmosphericBackground';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import FeaturedWorks from './components/FeaturedWorks';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [theme] = useState(() => {
    return localStorage.getItem('kartik-theme') || 'dark';
  });

  // Track if initial arrival preloader has finished so hero elements cascade in one by one
  const [isLoaded, setIsLoaded] = useState(() => {
    try {
      return sessionStorage.getItem('kartik_portfolio_visited') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kartik-theme', theme);
  }, [theme]);

  // Lenis Luxury Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
      infinite: false,
    });

    window.lenis = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Pause smooth scrolling during arrival preloader
    if (!isLoaded) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      delete window.lenis;
    };
  }, [isLoaded]);

  const handlePreloaderComplete = () => {
    setIsLoaded(true);
    if (window.lenis) {
      window.lenis.start();
    }
  };

  return (
    <div className="portfolio-app">
      {/* Luxury 1 to 100 Arrival Preloader */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Ambient Atmospheric Glow */}
      <AtmosphericBackground />

      {/* Main Architectural Flow */}
      <main className="portfolio-main">
        <Hero isLoaded={isLoaded} />
        <AboutSection />
        <ExperienceSection />
        <FeaturedWorks />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
