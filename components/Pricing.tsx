
import React from 'react';
import { motion } from 'framer-motion';
import { CustomPricingPanel } from './CustomPricingPanel';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden bg-brand-dark">
      <div className="container mx-auto px-6">
        {/* Pricing Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            The average home service business loses <span className="text-rose-500">$3,000-$5,000</span> a month in missed calls.
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stop donating jobs to your competitors. Jevus.ai pays for itself with just 1-2 saved jobs a month.
          </p>
        </div>

        {/* Custom Pricing Panel */}
        <CustomPricingPanel />
      </div>
    </section>
  );
};
