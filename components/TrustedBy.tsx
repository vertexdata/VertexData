
import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'OpenAI', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
  { name: 'Twilio', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg' },
  { name: 'n8n', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/N8n_logo.svg' },
  { name: 'Google Calendar', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg' },
  { name: 'HubSpot', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg' },
  { name: 'Salesforce', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { name: 'Zapier', url: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Zapier_logo.svg' },
  { name: 'ServiceTitan', url: 'https://picsum.photos/seed/servicetitan/100/100' },
  { name: 'Housecall Pro', url: 'https://picsum.photos/seed/housecall/100/100' },
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
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }
          }}
          className="flex gap-24 items-center whitespace-nowrap px-12"
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`}
              className="text-2xl font-bold text-gray-600 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default flex items-center gap-2"
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

