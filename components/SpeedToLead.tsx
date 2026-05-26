import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, TrendingUp, Zap } from 'lucide-react';
import { CalendlyButton } from './CalendlyButton';

export const SpeedToLead: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Big stat */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-8">
              <Trophy size={14} />
              <span>SPEED TO LEAD</span>
            </div>

            <h2 className="text-[clamp(1.625rem,6vw,3.5rem)] font-black text-white mb-8 leading-[1.1] tracking-tight">
              The First Contractor to Answer <span className="text-emerald-400">Wins.</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium leading-relaxed mb-6">
              It's not about being the best. It's not about being the cheapest.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium leading-relaxed mb-12">
              It's about being <span className="text-white font-bold">first.</span>
            </p>

            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 sm:p-8">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-emerald-400 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)] mb-3 tracking-tight">
                78%
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-2">
                of customers hire the first contractor who responds.
              </p>
              <p className="text-sm sm:text-base text-gray-400">
                Not the best reviewed. Not the cheapest quote. The one who picked up the phone.
              </p>
            </div>
          </motion.div>

          {/* Right: Visual comparison */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Without Jevus */}
            <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center">
                  <Clock size={20} className="text-rose-400" />
                </div>
                <div>
                  <div className="text-white font-bold">Without Jevus</div>
                  <div className="text-rose-400 text-sm">Average callback: 47 minutes</div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { time: '0:00', event: 'Customer calls. You\'re on a job.', status: 'missed' },
                  { time: '0:05', event: 'Goes to voicemail. Customer hangs up.', status: 'missed' },
                  { time: '0:10', event: 'Customer calls your competitor.', status: 'missed' },
                  { time: '0:47', event: 'You finally see the missed call.', status: 'missed' },
                  { time: '1:00', event: 'You call back. They already booked someone.', status: 'lost' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-xs font-mono text-gray-600 w-10 shrink-0">{step.time}</span>
                    <div className={`flex-1 text-sm ${step.status === 'lost' ? 'text-rose-400 font-bold' : 'text-gray-400'}`}>
                      {step.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* With Jevus */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Zap size={20} className="text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-bold">With Jevus AI</div>
                  <div className="text-emerald-400 text-sm">Answer time: instant</div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { time: '0:00', event: 'Customer calls. Jevus picks up instantly.', status: 'win' },
                  { time: '0:15', event: 'AI qualifies the job and collects details.', status: 'win' },
                  { time: '0:45', event: 'Appointment booked in your calendar.', status: 'win' },
                  { time: '0:46', event: 'You get a text with full job details.', status: 'win' },
                  { time: '0:47', event: 'Your competitor? Still didn\'t answer.', status: 'flex' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-xs font-mono text-gray-600 w-10 shrink-0">{step.time}</span>
                    <div className={`flex-1 text-sm ${step.status === 'flex' ? 'text-emerald-400 font-bold' : 'text-gray-300'}`}>
                      {step.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
