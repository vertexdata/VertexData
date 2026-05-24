
import React from 'react';
import { motion } from 'framer-motion';

type Logo = {
  name: string;
  src: string;
  heightPx?: number;
};

const DEFAULT_HEIGHT = 26;

const logos: Logo[] = [
  { name: 'ServiceTitan', src: '/images/logos/servicetitan.png' },
  { name: 'Housecall Pro', src: '/images/logos/housecallpro.png' },
  { name: 'Jobber', src: '/images/logos/jobber.png' },
  { name: 'ServiceNow', src: '/images/logos/servicenow.png', heightPx: 18 },
  { name: 'FieldEdge', src: '/images/logos/fieldedge.png' },
  { name: 'Service Fusion', src: '/images/logos/servicefusion.png' },
  { name: 'Google Calendar', src: '/images/logos/google-calendar.png' },
  { name: 'Calendly', src: '/images/logos/calendly.png', heightPx: 18 },
  { name: 'Salesforce', src: '/images/logos/salesforce.png' },
  { name: 'HubSpot', src: '/images/logos/hubspot.png' },
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
              duration: 35,
              ease: 'linear',
            },
          }}
          className="flex items-center whitespace-nowrap gap-16 px-8"
        >
          {[...logos, ...logos, ...logos].map((logo, index) => {
            const h = logo.heightPx ?? DEFAULT_HEIGHT;
            return (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center flex-shrink-0"
                style={{ height: DEFAULT_HEIGHT }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-auto object-contain"
                  style={{ height: h }}
                  loading="lazy"
                />
              </div>
            );
          })}
        </motion.div>

        {/* Edge gradients */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-brand-dark to-transparent z-10"></div>
      </div>
    </section>
  );
};
