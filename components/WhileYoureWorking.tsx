import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, PhoneIncoming, Calendar, MessageSquare, CheckCircle2, ArrowDown } from 'lucide-react';

export const WhileYoureWorking: React.FC = () => {
  const timeline = [
    { time: '8:15 AM', icon: <Wrench size={18} />, title: 'You start a water heater install', subtitle: 'Both hands busy. Phone in the truck.', color: 'blue' },
    { time: '8:32 AM', icon: <PhoneIncoming size={18} />, title: 'New customer calls about a leak', subtitle: 'Jevus answers on the first ring.', color: 'emerald' },
    { time: '8:33 AM', icon: <MessageSquare size={18} />, title: 'Jevus qualifies the lead', subtitle: 'Collects name, address, urgency, and issue details.', color: 'emerald' },
    { time: '8:34 AM', icon: <Calendar size={18} />, title: 'Job booked for 2 PM today', subtitle: 'Lands directly in your ServiceTitan calendar.', color: 'emerald' },
    { time: '8:35 AM', icon: <CheckCircle2 size={18} />, title: 'You get a text summary', subtitle: '"New Job: Kitchen leak at 4521 Oak Dr. Booked 2-4 PM."', color: 'violet' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-violet/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-sm font-bold mb-8">
              <Wrench size={14} />
              <span>A DAY WITH JEVUS</span>
            </div>

            <h2 className="text-[clamp(1.875rem,6.5vw,3.5rem)] font-black text-white mb-6 leading-[1.1] tracking-tight">
              You Keep Working.<br />Jevus Keeps <span className="text-brand-violet">Booking.</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-lg">
              Here's what happens in 20 minutes while you're elbow-deep in a job.
            </p>

            <div className="space-y-1">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                      item.color === 'blue' ? 'bg-brand-blue/20 text-brand-blue' :
                      item.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
                      'bg-brand-violet/20 text-brand-violet'
                    }`}>
                      {item.icon}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px h-full min-h-[40px] bg-white/10"></div>
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="text-xs font-mono text-gray-600 mb-1">{item.time}</div>
                    <div className="text-white font-bold">{item.title}</div>
                    <div className="text-gray-400 text-sm">{item.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: 2x2 stat grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-3 sm:gap-5 lg:gap-6"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-10 text-center hover:border-brand-blue/30 transition-colors overflow-hidden">
              <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-blue mb-2 sm:mb-3 tracking-tighter break-words leading-none">100%</div>
              <div className="text-xs sm:text-base md:text-lg text-gray-300 font-semibold">Calls answered</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-10 text-center hover:border-emerald-400/30 transition-colors overflow-hidden">
              <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-emerald-400 mb-2 sm:mb-3 tracking-tighter break-words leading-none">0</div>
              <div className="text-xs sm:text-base md:text-lg text-gray-300 font-semibold">Voicemails left</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-10 text-center hover:border-brand-violet/30 transition-colors overflow-hidden">
              <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-violet mb-2 sm:mb-3 tracking-tighter break-words leading-none">&lt;1s</div>
              <div className="text-xs sm:text-base md:text-lg text-gray-300 font-semibold">Pickup time</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-10 text-center hover:border-amber-400/30 transition-colors overflow-hidden">
              <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-amber-400 mb-2 sm:mb-3 tracking-tighter break-words leading-none">24/7</div>
              <div className="text-xs sm:text-base md:text-lg text-gray-300 font-semibold">Coverage</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
