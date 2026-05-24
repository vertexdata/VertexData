import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { CalendlyButton } from './CalendlyButton';

const trustBadges = [
  'No Setup Fee',
  'Launch in Under 3 Days',
  'Cancel Anytime',
];

const industries = [
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

const ORBIT_DURATION = 60;

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-gradient-to-r from-brand-blue to-brand-violet rounded-full opacity-10 blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              <span className="text-brand-blue text-sm font-bold uppercase tracking-wider">Experience Jevus Live</span>
              <a href="tel:+15673353887" className="text-white hover:text-brand-blue transition-colors text-sm font-mono ml-2 font-bold">(567) 335-3887</a>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-6">
              Your 24/7 AI Receptionist for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-violet">
                Home Service Businesses
              </span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
              AI that answers calls, qualifies leads, and books jobs. 24/7. No staff required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <CalendlyButton
                className="w-full sm:w-auto bg-brand-blue hover:bg-blue-600 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg shadow-xl shadow-brand-blue/25 cursor-pointer"
                text="Book a Demo"
              />
            </div>

            <div className="mt-6 flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-sm text-white">
                  <Check size={14} className="text-brand-blue flex-shrink-0" strokeWidth={3} />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: receptionist illustration + orbiting industry pills */}
          <div className="relative w-full max-w-[560px] mx-auto aspect-square">
            {/* Soft glow behind image */}
            <div className="absolute inset-[10%] bg-gradient-to-br from-brand-blue/25 to-brand-violet/25 blur-3xl rounded-full -z-10"></div>

            {/* Receptionist illustration with chroma-keyed transparent bg */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/images/hero-receptionist.png"
                alt="AI receptionist for home service businesses"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            {/* Orbiting industry pills */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: 'linear' }}
            >
              {industries.map((industry, i) => {
                const angle = (360 / industries.length) * i;
                const rad = (angle * Math.PI) / 180;
                const radius = 52;
                const x = 50 + Math.cos(rad) * radius;
                const y = 50 + Math.sin(rad) * radius;
                return (
                  <motion.div
                    key={industry}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="bg-brand-dark/90 backdrop-blur-md border border-brand-blue/40 text-white text-[11px] md:text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg shadow-black/40">
                      {industry}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
