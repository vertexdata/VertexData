
import React from 'react';
import { motion } from 'framer-motion';
import { Infinity, Zap, LifeBuoy, UserCog, Cpu, Globe } from 'lucide-react';

const diffs = [
  { icon: Infinity, title: "Unlimited Usage", description: "No per-minute billing. No hidden fees. Use your AI as much as you need." },
  { icon: Zap, title: "Unlimited Integrations", description: "Connect to your CRM, calendar, and dispatch software without extra costs." },
  { icon: LifeBuoy, title: "Unlimited Support", description: "Our team is always available to help you tune your AI for better results." },
  { icon: UserCog, title: "White-Glove Setup", description: "We build your custom AI agent and integrate it into your business for you." },
  { icon: Cpu, title: "AI Tuned To Your Business", description: "Your AI learns your specific services, pricing, and FAQs to sound like a pro." },
  { icon: Globe, title: "Enterprise Infrastructure", description: "Built on OpenAI + Twilio for maximum reliability and sub-second response times." },
];

export const Differentiators: React.FC = () => {
  return (
    <section className="section-padding bg-white/[0.02] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            Why Jevus.ai Is <span className="text-brand-blue">Different.</span>
          </motion.h2>
          <p className="text-xl text-gray-400">
            We aren't just a software company. We are your AI automation partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {diffs.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/20">
                <diff.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{diff.title}</h3>
                <p className="text-gray-400 leading-relaxed">{diff.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

