import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kartik-theme', theme);
  }, [theme]);

  return (
    <div className="portfolio-app">
      {/* Luxury 1 to 100 Arrival Preloader */}
      <Preloader />

      {/* Ambient Atmospheric Glow */}
      <AtmosphericBackground />

      {/* Main Architectural Flow (Hero -> About -> Experience -> Projects -> Contact) */}
      <main className="portfolio-main">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <FeaturedWorks />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
