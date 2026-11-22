import React from 'react';
import { motion } from 'framer-motion';

const luxuryEase = [0.16, 1, 0.3, 1];

/**
 * MotionWords: Splits a string into individual words, each masked in an
 * overflow-hidden span, and animates them upwards with a subtle stagger.
 */
export function MotionWords({
  text,
  className = '',
  delay = 0,
  stagger = 0.035,
  duration = 0.75,
  once = true,
  as: Component = 'span'
}) {
  if (!text) return null;
  const words = text.split(' ');

  return (
    <Component className={`motion-words-container ${className}`}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="motion-word-mask"
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'top',
            marginRight: i === words.length - 1 ? 0 : '0.28em'
          }}
        >
          <motion.span
            style={{ display: 'inline-block', willChange: 'transform, opacity' }}
            initial={{ y: '115%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once, amount: 0.15 }}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: luxuryEase
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}

/**
 * MotionLines: Renders an array of lines or phrases, each in a masked wrapper,
 * controlled by a trigger boolean (e.g. isLoaded in Hero) or scroll viewport.
 */
export function MotionLines({
  lines = [],
  className = '',
  isTriggered = true,
  delay = 0,
  stagger = 0.12,
  duration = 0.8
}) {
  return (
    <div className={`motion-lines-container ${className}`}>
      {lines.map((line, idx) => (
        <div
          key={idx}
          className="motion-line-mask"
          style={{
            overflow: 'hidden',
            display: 'block'
          }}
        >
          <motion.span
            style={{
              display: 'block',
              willChange: 'transform, opacity'
            }}
            initial={{ y: '110%', opacity: 0 }}
            animate={isTriggered ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
            transition={{
              duration,
              delay: delay + idx * stagger,
              ease: luxuryEase
            }}
          >
            {line}
          </motion.span>
        </div>
      ))}
    </div>
  );
}

/**
 * MotionHeading: For section titles that need smooth architectural upward reveal.
 */
export function MotionHeading({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  once = true,
  as: Component = 'h2'
}) {
  return (
    <Component className={className} style={{ overflow: 'hidden' }}>
      <motion.span
        style={{ display: 'block', willChange: 'transform, opacity' }}
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once, amount: 0.2 }}
        transition={{
          duration,
          delay,
          ease: luxuryEase
        }}
      >
        {children}
      </motion.span>
    </Component>
  );
}
