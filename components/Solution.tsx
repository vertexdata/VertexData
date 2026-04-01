
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
  const logos = [
    { name: 'OpenAI', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.0462 6.0462 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9723V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.3829a.7911.7911 0 0 0-.7805 0L6.4894 11.7514l-2.0196-1.1686a.0757.0757 0 0 1-.038-.0616V4.9437a4.504 4.504 0 0 1 6.1217-1.6465 4.4944 4.4944 0 0 1 2.8954 1.9772l-.142.0805zM18.64 5.7143a4.4708 4.4708 0 0 1 .5346 3.0137l-.142-.0852-4.75-2.7582a.7712.7712 0 0 0-.7805 0L7.6593 9.253V6.9206a.0757.0757 0 0 1 .0332-.0616l4.8303-2.7865a4.4992 4.4992 0 0 1 6.117 1.6418zm-2.3409 10.3902l-5.8428-3.3685 2.0196-1.1686a.0757.0757 0 0 1 .071 0l4.8303 2.7865a4.504 4.504 0 0 1-1.0782 1.7506z"/>
      </svg>
    )},
    { name: 'Twilio', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-3-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-6 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      </svg>
    )},
    { name: 'n8n', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12.78 17.584h-1.56v-4.32h1.56v4.32zm4.68-4.32h-1.56v4.32h1.56v-4.32zm-9.36 0H6.54v4.32H8.1v-4.32zm13.14-1.98h-2.34v-1.8a2.52 2.52 0 1 0-5.04 0v1.8H9.12v-1.8a2.52 2.52 0 1 0-5.04 0v8.1h2.34v-1.8h4.68v1.8h4.68v-1.8h2.34v-6.3h-1.56v1.8zm-1.56 4.32h-1.56v-1.8h1.56v1.8zm-6.24 0H11.1v-1.8h2.34v1.8zm-6.24 0H4.86v-1.8H7.2v1.8z"/>
      </svg>
    )},
    { name: 'Retell', icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm-1-11h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    )}
  ];

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
          className="flex gap-12 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              {logo.icon}
              <span className="font-bold text-lg tracking-tight">{logo.name}</span>
            </div>
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

