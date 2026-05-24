
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { CalendlyButton } from './CalendlyButton';

export const FinalCTA: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated Gradient Wave Background */}
      <div className="absolute inset-0 bg-brand-dark -z-20"></div>
      <div className="absolute inset-0 -z-10 opacity-30">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-50%] left-[-20%] w-[140%] h-[200%] bg-[radial-gradient(circle_at_center,var(--color-brand-blue)_0%,transparent_70%)]"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-50%] right-[-20%] w-[140%] h-[200%] bg-[radial-gradient(circle_at_center,var(--color-brand-violet)_0%,transparent_70%)]"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6">
        <div className="glass-card p-12 lg:p-24 text-center relative overflow-hidden border-white/10">
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-lg mb-8"
            >
              Stop donating jobs to <span className="text-brand-blue">your competitors.</span>
            </motion.h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              You probably missed a call while reading this. Let's fix it.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <CalendlyButton 
                className="btn-primary w-full sm:w-auto text-lg px-12 py-5 cursor-pointer"
              >
                Book a Live Demo
                <ArrowRight size={20} />
              </CalendlyButton>
              <a href="tel:+156733JEVUS" className="btn-secondary w-full sm:w-auto text-lg px-12 py-5">
                <Phone size={20} />
                Talk to Jevus Now
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400 font-bold uppercase tracking-widest text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                No Contracts
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                Cancel Anytime
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                White-Glove Setup
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

