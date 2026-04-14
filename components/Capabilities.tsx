
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
  Bell,
  ArrowRight
} from 'lucide-react';

const pillars = [
  {
    icon: Mic2,
    title: "AI Voice Receptionist",
    description: "Answers every call 24/7 with natural human conversation. Qualifies leads and handles basic FAQs without you lifting a finger.",
    color: "brand-blue",
    href: "/features/ai-voice-receptionist",
    gradient: "from-blue-500/20 to-violet-500/20",
    glow: "group-hover:shadow-brand-blue/20",
  },
  {
    icon: CalendarCheck,
    title: "Smart Appointment Booking",
    description: "Automatically books jobs directly into your calendar (Housecall Pro, ServiceTitan, Jobber, etc.) while the customer is still on the line.",
    color: "brand-violet",
    href: "/features/appointment-booking",
    gradient: "from-violet-500/20 to-fuchsia-500/20",
    glow: "group-hover:shadow-brand-violet/20",
  },
  {
    icon: MessageSquareText,
    title: "Missed Call Text Back",
    description: "Instantly texts customers if you miss a call while you're on a job, ensuring they don't call your competitor next.",
    color: "emerald-500",
    href: "/features/missed-call-text-back",
    gradient: "from-emerald-500/20 to-teal-500/20",
    glow: "group-hover:shadow-emerald-500/20",
  },
];

const secondaryFeatures = [
  { icon: Star, title: "Review Automation", description: "Follow up for 5-star reviews.", href: "/features/review-automation" },
  { icon: UserCheck, title: "Lead Qualification", description: "Screen callers before booking.", href: "/features/lead-qualification" },
  { icon: Bell, title: "SMS Owner Alerts", description: "Instant notifications for new jobs.", href: "/features/sms-alerts" },
  { icon: LayoutDashboard, title: "Client Dashboard", description: "Track every call and revenue.", href: "/features/client-dashboard" },
  { icon: Zap, title: "Unlimited Integrations", description: "Connect to 1,000+ other apps.", href: "/features/integrations" },
  { icon: ShieldCheck, title: "White-Glove Setup", description: "We handle the entire integration.", href: "/features/white-glove-setup" },
];

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue text-sm font-bold uppercase tracking-widest mb-6"
          >
            <Zap size={14} />
            What's Under the Hood
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            9 Powerful Features.<br /><span className="text-brand-blue">One AI Receptionist.</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every tool your front office needs — answering, booking, texting, reviewing, qualifying, and reporting — all running on autopilot.
          </p>
        </div>

        {/* Main Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <motion.a
              key={pillar.title}
              href={pillar.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`glass-card p-10 border-white/10 group relative overflow-hidden flex flex-col items-center text-center hover:border-brand-blue/40 transition-all duration-300 hover:shadow-2xl ${pillar.glow} cursor-pointer`}
            >
              {/* Animated gradient bg on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              {/* Animated glow orb */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-blue/0 group-hover:bg-brand-blue/10 rounded-full blur-[60px] transition-all duration-700" />

              <motion.div
                whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="relative z-10 w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 border border-white/10 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10 transition-all duration-500"
              >
                <pillar.icon size={40} className={`text-${pillar.color}`} />
              </motion.div>
              <h3 className="relative z-10 text-2xl font-black text-white mb-4 group-hover:text-white transition-colors">{pillar.title}</h3>
              <p className="relative z-10 text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">{pillar.description}</p>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="relative z-10 mt-6 inline-flex items-center gap-1 text-brand-blue text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </motion.a>
          ))}
        </div>

        {/* Secondary Features Grid */}
        <div className="pt-20 border-t border-white/5">
          <p className="text-center text-xs font-bold text-gray-600 uppercase tracking-[0.2em] mb-10">And that's not all</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {secondaryFeatures.map((feature, index) => (
            <motion.a
              key={feature.title}
              href={feature.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, transition: { duration: 0.2, ease: 'easeOut' } }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
                className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 mb-4 mx-auto border border-white/10 group-hover:text-brand-blue group-hover:border-brand-blue/40 group-hover:bg-brand-blue/10 group-hover:shadow-lg group-hover:shadow-brand-blue/20 transition-all duration-300"
              >
                <feature.icon size={22} />
              </motion.div>
              <h4 className="text-sm font-bold text-white mb-2 group-hover:text-brand-blue transition-colors duration-200">{feature.title}</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold leading-tight group-hover:text-gray-400 transition-colors duration-200">{feature.description}</p>
              <div className="mt-3 h-0.5 w-0 group-hover:w-8 bg-brand-blue mx-auto rounded-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
