
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2, Calendar } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white/[0.02] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            What Happens When <span className="text-brand-blue">Someone Calls?</span>
          </motion.h2>
          <p className="text-xl text-gray-400">
            It's simple. You keep working, we handle the rest.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-blue/0 via-brand-blue/30 to-brand-blue/0 z-0"></div>

          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative z-10"
          >
            <div className="glass-card p-8 h-full flex flex-col items-center text-center border-white/10 hover:border-brand-blue/30 transition-colors">
              <div className="w-20 h-20 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center mb-6 shadow-xl shadow-black/50">
                <Phone size={32} className="text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">1. The 11 PM Call</h3>
              <p className="text-gray-400 leading-relaxed">
                Customer calls late at night about a burst pipe. You're asleep. Jevus picks up instantly—no voicemail, no waiting.
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <div className="glass-card p-8 h-full flex flex-col items-center text-center border-white/10 hover:border-brand-blue/30 transition-colors">
              <div className="w-20 h-20 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center mb-6 shadow-xl shadow-black/50">
                <CheckCircle2 size={32} className="text-brand-violet" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">2. Perfect Qualification</h3>
              <p className="text-gray-400 leading-relaxed">
                Jevus gets their name, address, and issue. It sounds completely natural, empathetic, and professional.
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10"
          >
            <div className="glass-card p-8 h-full flex flex-col items-center text-center border-white/10 hover:border-brand-blue/30 transition-colors">
              <div className="w-20 h-20 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center mb-6 shadow-xl shadow-black/50">
                <Calendar size={32} className="text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">3. Booked & Notified</h3>
              <p className="text-gray-400 leading-relaxed">
                Appointment lands on your calendar. You wake up to a text summary: <span className="italic text-emerald-400">"New Job: Burst Pipe at 123 Main St."</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


