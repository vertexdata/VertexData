import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';

export const Onboarding: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome to <span className="text-brand-blue">Jevus.ai</span>
            </h1>
            <p className="text-xl text-gray-400">
              Let's get your AI receptionist configured. This takes about 5 minutes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/50 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative w-full h-[800px] md:h-[1200px]">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSey_ysa1U6wpnVoG3JwsEO7WuQL23QQxv8saRI2P3PzdB9bvg/viewform?embedded=true" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="absolute inset-0 w-full h-full"
              >
                Loading Jevus Onboarding Form...
              </iframe>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
