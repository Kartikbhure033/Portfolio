import React from 'react';

export default function AtmosphericBackground() {
  return (
    <div className="atmospheric-bg-wrapper" aria-hidden="true">
      {/* Ambient background glows */}
      <div className="ambient-glow ambient-glow-top" />
      <div className="ambient-glow ambient-glow-bottom" />
    </div>
  );
}
