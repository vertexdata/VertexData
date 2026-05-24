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
  ArrowRight,
} from 'lucide-react';

const features = [
  {
    icon: Mic2,
    title: 'AI Voice Receptionist',
    description: 'Answers every call 24/7 with natural human conversation. Qualifies leads and handles basic FAQs without you lifting a finger.',
    href: '/features/ai-voice-receptionist',
  },
  {
    icon: CalendarCheck,
    title: 'Smart Appointment Booking',
    description: 'Books jobs directly into your calendar (Housecall Pro, ServiceTitan, Jobber) while the customer is still on the line.',
    href: '/features/appointment-booking',
  },
  {
    icon: MessageSquareText,
    title: 'Missed Call Text Back',
    description: "Instantly texts customers if you miss a call so they don't call your competitor next.",
    href: '/features/missed-call-text-back',
  },
  {
    icon: Star,
    title: 'Review Automation',
    description: 'Automated follow-ups that turn happy customers into 5-star Google reviews.',
    href: '/features/review-automation',
  },
  {
    icon: UserCheck,
    title: 'Lead Qualification',
    description: 'Screens every caller — name, issue, urgency, address — before anything hits your calendar.',
    href: '/features/lead-qualification',
  },
  {
    icon: Bell,
    title: 'SMS Owner Alerts',
    description: 'Instant notifications for new jobs, urgent calls, and booked appointments.',
    href: '/features/sms-alerts',
  },
  {
    icon: LayoutDashboard,
    title: 'Client Dashboard',
    description: 'Track every call, transcript, recording, booking, and revenue in one place.',
    href: '/features/client-dashboard',
  },
  {
    icon: Zap,
    title: 'Unlimited Integrations',
    description: 'Connect to 1,000+ apps. ServiceTitan, Housecall Pro, Jobber, HubSpot, Zapier, and more.',
    href: '/features/integrations',
  },
  {
    icon: ShieldCheck,
    title: 'White-Glove Setup',
    description: "We handle the entire setup — phone forwarding, calendar sync, CRM integration. You're live in days.",
    href: '/features/white-glove-setup',
  },
];

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
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
            Everything Running on <span className="text-brand-blue">Autopilot.</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every tool your front office needs — answering, booking, texting, reviewing, qualifying, and reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.a
              key={feature.title}
              href={feature.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="glass-card p-8 border border-white/10 hover:border-brand-blue/40 transition-colors duration-300 group cursor-pointer flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/40 transition-colors duration-300">
                <feature.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed flex-grow">{feature.description}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-brand-blue text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
