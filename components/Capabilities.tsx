
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mic2, 
  CalendarCheck, 
  MessageSquareText,
  Zap,
  ShieldCheck,
  LayoutDashboard,
  Star,
  UserCheck,
  Bell
} from 'lucide-react';

const pillars = [
  { 
    icon: Mic2, 
    title: "AI Voice Receptionist", 
    description: "Answers every call 24/7 with natural human conversation. Qualifies leads and handles basic FAQs without you lifting a finger.",
    color: "brand-blue"
  },
  { 
    icon: CalendarCheck, 
    title: "Smart Appointment Booking", 
    description: "Automatically books jobs directly into your calendar (Housecall Pro, ServiceTitan, Jobber, etc.) while the customer is still on the line.",
    color: "brand-violet"
  },
  { 
    icon: MessageSquareText, 
    title: "Missed Call Text Back", 
    description: "Instantly texts customers if you miss a call while you're on a job, ensuring they don't call your competitor next.",
    color: "emerald-500"
  },
];

const secondaryFeatures = [
  { icon: Star, title: "Review Automation", description: "Follow up for 5-star reviews." },
  { icon: UserCheck, title: "Lead Qualification", description: "Screen callers before booking." },
  { icon: Bell, title: "SMS Owner Alerts", description: "Instant notifications for new jobs." },
  { icon: LayoutDashboard, title: "Client Dashboard", description: "Track every call and revenue." },
  { icon: Zap, title: "Unlimited Integrations", description: "Connect to 1,000+ other apps." },
  { icon: ShieldCheck, title: "White-Glove Setup", description: "We handle the entire integration." },
];

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            Your Entire Front Desk. <span className="text-brand-blue">Automated.</span>
          </motion.h2>
          <p className="text-xl text-gray-400">
            Jevus.ai handles the repetitive tasks so you can focus on the high-value work.
          </p>
        </div>

        {/* Main Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 border-white/10 group relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className={`absolute inset-0 bg-${pillar.color}/5 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className={`w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                <pillar.icon size={40} className={`text-${pillar.color}`} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Secondary Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-20 border-t border-white/5">
          {secondaryFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 mb-4 mx-auto border border-white/10 group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-all">
                <feature.icon size={20} />
              </div>
              <h4 className="text-sm font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold leading-tight">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


