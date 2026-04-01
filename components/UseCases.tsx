
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Calendar, CheckCircle2 } from 'lucide-react';

const useCases = [
  {
    industry: "Plumbers",
    scenario: "Emergency leak at 2 AM",
    aiResponse: "I can dispatch an emergency technician to your location in 30 minutes. Should I book that now?",
    outcome: "Emergency job booked & technician notified via SMS."
  },
  {
    industry: "HVAC",
    scenario: "AC repair inquiry during busy season",
    aiResponse: "We have an opening tomorrow at 10 AM for a diagnostic visit. Does that work for you?",
    outcome: "Service call scheduled & synced to Housecall Pro."
  },
  {
    industry: "Tree Service",
    scenario: "Quote request for storm damage",
    aiResponse: "I've captured your address. Our estimator will be out this afternoon to provide a quote.",
    outcome: "Lead qualified and estimator's route updated."
  },
  {
    industry: "Painters",
    scenario: "New exterior painting lead",
    aiResponse: "Great! How many square feet is the project? I'll get that info to our team right away.",
    outcome: "Project details captured and lead logged in CRM."
  },
  {
    industry: "Electricians",
    scenario: "Panel upgrade consultation",
    aiResponse: "I can schedule a free consultation with our master electrician for Friday. What time is best?",
    outcome: "Consultation booked and calendar invite sent."
  }
];

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="section-padding overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            Built for the <span className="text-brand-blue">Trades.</span>
          </motion.h2>
          <p className="text-xl text-gray-400">
            Whether you have 2 trucks or 20, Jevus.ai handles your calls while you're on the tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-black text-white">{useCase.industry}</h3>
                  <div className="px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest">Case Study</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Phone size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-400 italic">"{useCase.scenario}"</p>
                  </div>
                  <div className="flex gap-3">
                    <MessageSquare size={16} className="text-brand-blue mt-1 flex-shrink-0" />
                    <p className="text-sm text-white font-medium">"{useCase.aiResponse}"</p>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-green-500 text-xs font-bold">
                    <CheckCircle2 size={14} />
                    {useCase.outcome}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="sticky top-32 hidden lg:block">
            <div className="glass-card p-8 aspect-square flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 -z-10"></div>
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-8">
                <Phone size={48} className="text-white animate-subtle-pulse" />
              </div>
              <h4 className="text-4xl font-black text-white mb-6 tracking-tighter">Your AI Receptionist is Ready.</h4>
              <p className="text-gray-300 mb-10">Stop losing jobs to voicemail. Install Jevus.ai today.</p>
              <a href="#pricing" className="btn-primary w-full">Get Started Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

