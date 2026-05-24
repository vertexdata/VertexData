import React from 'react';
import { motion } from 'framer-motion';
import { CalendlyButton } from './CalendlyButton';

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
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
              <a href="tel:+15673353887" className="text-sm text-gray-400 hover:text-white transition-colors">
                or call <span className="text-white font-bold underline decoration-brand-blue/40">(567) 335-3887</span>
              </a>
            </div>
            <p className="mt-6 text-brand-blue font-bold tracking-wide uppercase text-xs">
              Starting at $497/mo · Cancel Anytime
            </p>
          </div>

          {/* Right: receptionist + orbiting industry pills */}
          <div className="relative w-full aspect-square max-w-[480px] mx-auto">
            {/* Soft glow */}
            <div className="absolute inset-8 bg-gradient-to-br from-brand-blue/30 to-brand-violet/30 rounded-full blur-3xl"></div>

            {/* Center photo */}
            <div className="absolute inset-[18%] rounded-full overflow-hidden border-2 border-brand-blue/30 shadow-2xl shadow-brand-blue/30">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="AI receptionist for home service businesses"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 via-transparent to-brand-violet/10"></div>
            </div>

            {/* Orbiting pills */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: 'linear' }}
            >
              {industries.map((industry, i) => {
                const angle = (360 / industries.length) * i;
                const rad = (angle * Math.PI) / 180;
                const radius = 50;
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
                    <div className="bg-brand-dark/90 backdrop-blur-md border border-brand-blue/40 text-white text-[11px] md:text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg shadow-black/30">
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
