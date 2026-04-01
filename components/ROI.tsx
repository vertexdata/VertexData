
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, TrendingUp } from 'lucide-react';

export const ROI: React.FC = () => {
  return (
    <section id="roi" className="section-padding bg-white/[0.02] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            One Job Covers <span className="text-brand-blue">The Cost.</span>
          </motion.h2>
          <p className="text-xl text-gray-400">
            Average plumbing job: <span className="text-white font-bold">$350</span>. Missing 3 calls a week = <span className="text-rose-500 font-bold">$54,600/year</span> walking out the door. Jevus costs less than one of those jobs per month.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Human Receptionist */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-white/5"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Human Receptionist</h3>
            <div className="text-4xl font-black text-gray-500 mb-8">$3,000–$4,000<span className="text-sm font-medium">/mo</span></div>
            
            <ul className="space-y-4">
              {[
                'Limited to 8 hours a day',
                'Sick days and vacations',
                'Handles one call at a time',
                'Manual data entry',
                'High turnover rates'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-500">
                  <X size={18} className="text-red-500/50" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Jevus.ai */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-brand-blue/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 px-6 py-2 bg-brand-blue text-white text-xs font-black uppercase tracking-widest rounded-bl-xl">Recommended</div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Jevus.ai</h3>
            <div className="text-4xl font-black text-white mb-8">Starting at $497<span className="text-sm font-medium text-brand-blue">/mo</span></div>
            
            <ul className="space-y-4 mb-10">
              {[
                'Works 24/7/365',
                'Never sick, never tired',
                'Unlimited concurrent calls',
                'Automated CRM logging',
                'White-glove setup included'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white font-medium">
                  <Check size={18} className="text-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="p-4 bg-brand-blue/10 rounded-xl border border-brand-blue/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white">
                <TrendingUp size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-brand-blue uppercase">Bottom Line</div>
                <div className="text-sm font-bold text-white">Save $30,000+ per year per location.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
