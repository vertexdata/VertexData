
import React from 'react';
import { motion } from 'framer-motion';

const logos: { name: string; color: string }[] = [
  { name: 'ServiceTitan', color: '#FF6B35' },
  { name: 'Housecall Pro', color: '#00A651' },
  { name: 'OpenAI', color: '#74AA9C' },
  { name: 'Twilio', color: '#F22F46' },
  { name: 'n8n', color: '#EA4B71' },
  { name: 'Google Calendar', color: '#4285F4' },
  { name: 'Zapier', color: '#FF4A00' },
  { name: 'Salesforce', color: '#00A1E0' },
  { name: 'HubSpot', color: '#FF7A59' },
];

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-center text-xs font-bold text-gray-500 tracking-[0.3em] uppercase">
          Integrates with your existing trade tools
        </h2>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
          className="flex gap-24 items-center whitespace-nowrap px-12"
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="text-2xl font-bold whitespace-nowrap transition-opacity hover:opacity-80"
              style={{ color: logo.color }}
            >
              {logo.name}
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-brand-dark to-transparent z-10"></div>
      </div>
    </section>
  );
};
