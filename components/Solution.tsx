
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, UserCheck, Calendar, Send, LayoutDashboard, ArrowRight } from 'lucide-react';

const WorkflowStep: React.FC<{ icon: any, label: string, delay: number }> = ({ icon: Icon, label, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-center gap-4 relative z-10"
  >
    <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue shadow-lg shadow-brand-blue/5">
      <Icon size={32} />
    </div>
    <span className="text-sm font-bold text-white text-center whitespace-nowrap">{label}</span>
  </motion.div>
);

const LogoTicker: React.FC = () => {
  const logos = ['OpenAI', 'Twilio', 'Retell AI', 'n8n', 'Google Cloud', 'Zapier'];

  return (
    <div className="mt-12 pt-8 border-t border-white/10">
      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-6">Powered By Best-in-Class Tech</p>
      <div
        className="flex overflow-hidden relative w-full"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {[...logos, ...logos, ...logos, ...logos].map((name, i) => (
            <span key={i} className="text-gray-500 font-black text-xl tracking-tight hover:text-white transition-colors select-none">
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const Solution: React.FC = () => {
  return (
    <section id="solution" className="section-padding bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            Rock-Solid Reliability for <span className="text-brand-blue">Growing Trades.</span>
          </motion.h2>
          <p className="text-xl text-gray-400">
            We don't just answer phones. We automate your bookings and dispatching with technology that works as hard as you do.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Lines (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent -z-0"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-4">
            <WorkflowStep icon={Phone} label="Customer Calls" delay={0.1} />
            <WorkflowStep icon={MessageSquare} label="AI Answers" delay={0.2} />
            <WorkflowStep icon={UserCheck} label="Qualifies Job" delay={0.3} />
            <WorkflowStep icon={Calendar} label="Books Appointment" delay={0.4} />
            <WorkflowStep icon={Send} label="Sends SMS" delay={0.5} />
            <WorkflowStep icon={LayoutDashboard} label="Logs In Portal" delay={0.6} />
          </div>
        </div>

        <div className="mt-32 glass-card p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/10 to-transparent -z-10"></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Built on the world's most reliable AI stack.</h3>
              <p className="text-lg text-gray-400 mb-8">
                Jevus.ai leverages OpenAI's latest models and Twilio's global telephony infrastructure to deliver sub-second latency and 99.9% uptime.
              </p>
              <div className="p-4 bg-brand-blue/10 border border-brand-blue/20 rounded-xl mb-8">
                <p className="text-sm text-brand-blue font-bold">
                  🛡️ Jevus never quotes prices or makes promises — it qualifies, schedules, and hands off. You stay in control.
                </p>
              </div>
              <div className="space-y-4">
                {['Unlimited Usage', 'Custom Knowledge Base', 'Real-time Sync'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white font-medium">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              
              <LogoTicker />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/5 transition-colors">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-2xl font-bold text-white mb-1">&lt;50ms</div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Response Time</div>
              </div>
              <div className="bg-black/40 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/5 transition-colors">
                <div className="text-3xl mb-3">✅</div>
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Uptime</div>
              </div>
              <div className="bg-black/40 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/5 transition-colors">
                <div className="text-3xl mb-3">📞</div>
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Always Answering</div>
              </div>
              <div className="bg-black/40 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/5 transition-colors">
                <div className="text-3xl mb-3">🔒</div>
                <div className="text-2xl font-bold text-white mb-1">SOC2</div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Grade Security</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

