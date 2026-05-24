import React from 'react';

const INDUSTRIES = [
  'Plumbing',
  'HVAC',
  'Electrical',
  'Pest Control',
  'Landscaping',
  'Roofing',
  'Appliance Repair',
  'Painters',
  'Tree Service',
];

// Orbit radius as a % of the (square) container's half-width.
// Pills sit on a circle this far from the container center.
const RADIUS_PCT = 44;

export const HeroVisual: React.FC = () => {
  return (
    // Self-contained square wrapper, capped at 480px, centered, never bleeds
    // outside the right column.
    <div className="relative mx-auto w-full max-w-[480px] aspect-square">
      {/* Soft glow behind the receptionist */}
      <div className="pointer-events-none absolute inset-[18%] -z-10 rounded-full bg-gradient-to-br from-brand-blue/30 to-brand-violet/30 blur-3xl" />

      {/* Receptionist illustration — stationary, centered, room left for the
          orbit ring to sit just outside its edges */}
      <img
        src="/images/hero-receptionist.png"
        alt="AI receptionist for home service businesses"
        className="absolute inset-[14%] h-[72%] w-[72%] object-contain"
        loading="eager"
      />

      {/* Orbit ring — square, full container, rotates as a whole via CSS */}
      <div className="absolute inset-0 animate-hero-orbit-spin pointer-events-none">
        {INDUSTRIES.map((industry, i) => {
          // 9 labels, 40° apart, starting at the top of the clock
          const angleDeg = -90 + (360 / INDUSTRIES.length) * i;
          const angleRad = (angleDeg * Math.PI) / 180;
          const xPct = Math.cos(angleRad) * RADIUS_PCT;
          const yPct = Math.sin(angleRad) * RADIUS_PCT;
          return (
            <div
              key={industry}
              className="absolute"
              style={{
                left: `calc(50% + ${xPct}%)`,
                top: `calc(50% + ${yPct}%)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* Counter-rotation keeps each label upright as the orbit spins.
                  Same duration + timing function as the parent — they stay in
                  perfect sync because both start at component mount. */}
              <div className="animate-hero-orbit-counter">
                <span className="block whitespace-nowrap rounded-full border border-brand-blue/40 bg-brand-dark/95 px-3 py-1.5 text-[11px] md:text-xs font-semibold text-white shadow-lg shadow-black/40 backdrop-blur-md">
                  {industry}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
