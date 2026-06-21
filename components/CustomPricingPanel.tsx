import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CalendlyButton } from './CalendlyButton';

export const CustomPricingPanel: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="max-w-2xl mx-auto text-center p-10 md:p-14 rounded-2xl border border-brand-blue bg-brand-blue/10 shadow-2xl shadow-brand-blue/20"
  >
    <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
      Pricing custom to your business
    </h3>
    <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
      We build a plan around your call volume, the tools you already use, and the results you
      need — then show you exactly how it pays for itself. Book a call and we'll put together a
      custom quote for your business.
    </p>
    <CalendlyButton className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2">
      Book a Call <ArrowRight className="w-5 h-5" />
    </CalendlyButton>
    <div className="mt-6">
      <a
        href="mailto:info@jevus.ai"
        className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
      >
        Or email us at info@jevus.ai
      </a>
    </div>
  </motion.div>
);
