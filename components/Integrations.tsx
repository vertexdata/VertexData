import React from 'react';
import { motion } from 'framer-motion';

const integrations = [
  { name: 'OpenAI', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
  { name: 'Twilio', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg' },
  { name: 'n8n', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/N8n_logo.svg' },
  { name: 'Google Calendar', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg' },
  { name: 'HubSpot', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg' },
  { name: 'Salesforce', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { name: 'Zapier', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Zapier_logo.svg' },
  { name: 'Slack', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
  { name: 'Housecall Pro', icon: 'https://picsum.photos/seed/housecall/100/100' },
  { name: 'ServiceTitan', icon: 'https://picsum.photos/seed/servicetitan/100/100' },
  { name: 'Jobber', icon: 'https://picsum.photos/seed/jobber/100/100' },
  { name: 'Outlook', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg' },
];

export const Integrations: React.FC = () => {
  return (
    <section id="integrations" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            Connect Your <span className="text-brand-blue">Entire Stack.</span>
          </motion.h2>
          <p className="text-xl text-gray-400">
            Jevus.ai integrates with the tools you already use, creating a unified system for managing leads and appointments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-8 flex flex-col items-center justify-center gap-4 group cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/5 transition-colors"></div>
              <div className="w-12 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-bold text-gray-500 group-hover:text-white transition-colors uppercase tracking-widest">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
