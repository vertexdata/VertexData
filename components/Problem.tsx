
import React from 'react';
import { motion } from 'framer-motion';
import { PhoneMissed } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-20 lg:py-24 relative overflow-hidden bg-[#020617]">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-violet/10 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-[clamp(1.875rem,6vw,3.25rem)] font-black text-white mb-5 leading-[1.1] tracking-tight">
              Every Missed Call Is a Job You Already Lost
            </h2>

            <div className="space-y-3 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p>
                When you're on a job and your phone rings, it goes straight to your competitor.
              </p>
              <p>
                Customers don't wait. They call the next number.
              </p>
            </div>

            <div className="mt-8 border-l-2 border-rose-500/40 pl-5">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                Average monthly loss
              </div>
              <div className="text-[clamp(2rem,5vw,2.75rem)] font-black text-rose-500 tracking-tight leading-none mb-2">
                $5,000–$9,500
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                in missed calls for the average trades business
              </p>
            </div>
          </motion.div>

          {/* Right Column: Plumber Image with Missed Call Notification Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-square bg-[#020617]">
              <img
                src="/images/plumber-missed-call.png"
                alt="Plumber working under a sink while a call comes in"
                className="w-full h-full object-cover"
              />

              {/* Left-edge gradient fade — blends image into the section bg */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#020617] via-[#020617]/60 to-transparent pointer-events-none"></div>

              {/* Missed Call Notification Card — positioned in the upper-right empty space */}
              <motion.div
                initial={{ opacity: 0, y: -16, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, type: 'spring', bounce: 0.35 }}
                className="absolute top-[14%] right-[6%] w-[58%] max-w-[260px] bg-black/70 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative shrink-0">
                    {/* Pulsing red glow ring */}
                    <span className="absolute inset-0 rounded-full bg-red-500/60 animate-ping"></span>
                    <div className="relative w-11 h-11 rounded-full bg-red-500 flex items-center justify-center text-white shadow-[0_0_24px_rgba(239,68,68,0.7)]">
                      <PhoneMissed size={20} strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-bold text-base leading-tight">Missed Call</h4>
                    <p className="text-gray-300 text-xs mt-0.5">Potential Customer</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-sm transition-colors shadow-lg shadow-red-500/30"
                >
                  Call back now
                </button>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
