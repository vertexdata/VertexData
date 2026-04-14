import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import { CalendlyButton } from './CalendlyButton';

export const BeforeAfter: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[56px] font-black text-white mb-6 leading-[1.1] tracking-tight"
          >
            Before Jevus vs. <span className="text-brand-blue">After Jevus</span>
          </motion.h2>
          <p className="text-xl text-gray-400">
            The difference one AI receptionist makes for a 3-truck plumbing company.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-rose-500/5 border border-rose-500/20 rounded-3xl p-8 md:p-10"
          >
            <div className="text-rose-400 text-sm font-bold uppercase tracking-widest mb-6">Before Jevus</div>
            <div className="space-y-5">
              {[
                { metric: 'Calls answered', value: '73%', note: '27% go to voicemail' },
                { metric: 'After-hours coverage', value: 'None', note: 'Voicemail after 5 PM' },
                { metric: 'Average callback time', value: '47 min', note: 'Customer already booked someone' },
                { metric: 'Monthly revenue lost', value: '$5,400', note: 'From missed calls alone' },
                { metric: 'Weekend leads captured', value: '0', note: 'Office closed Sat & Sun' },
                { metric: 'Google Ads ROI', value: 'Poor', note: 'Paying for calls you don\'t answer' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X size={18} className="text-rose-400 mt-1 shrink-0" />
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-white font-bold">{item.metric}:</span>
                      <span className="text-rose-400 font-black">{item.value}</span>
                    </div>
                    <div className="text-gray-500 text-sm">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8 md:p-10"
          >
            <div className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-6">After Jevus</div>
            <div className="space-y-5">
              {[
                { metric: 'Calls answered', value: '100%', note: 'Every single call, every time' },
                { metric: 'After-hours coverage', value: '24/7', note: 'Nights, weekends, holidays' },
                { metric: 'Response time', value: '<1 sec', note: 'Instant — before the second ring' },
                { metric: 'Monthly revenue recovered', value: '+$4,800', note: 'Just from previously missed calls' },
                { metric: 'Weekend leads captured', value: '12-18/mo', note: 'Booked and ready Monday morning' },
                { metric: 'Google Ads ROI', value: '3.2x', note: 'Every paid call gets answered and booked' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-white font-bold">{item.metric}:</span>
                      <span className="text-emerald-400 font-black">{item.value}</span>
                    </div>
                    <div className="text-gray-500 text-sm">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-2xl md:text-3xl font-black text-white mb-8">
            That's <span className="text-emerald-400">$57,600/year</span> in recovered revenue.
          </p>
          <CalendlyButton className="bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-xl text-lg inline-flex items-center gap-2 shadow-xl shadow-brand-blue/25 transition-all transform hover:scale-105 cursor-pointer">
            See Your Numbers <ArrowRight size={20} />
          </CalendlyButton>
        </motion.div>
      </div>
    </section>
  );
};
