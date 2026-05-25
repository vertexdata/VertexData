import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, User, Bot, CheckCircle2 } from 'lucide-react';
import { CalendlyButton } from './CalendlyButton';

const transcript = [
  { role: 'customer', text: "Hey, my AC just stopped working and it's 90 degrees in here. Do you have anyone who can come out today?", icon: User },
  { role: 'ai', text: "I'm sorry to hear that! I know how uncomfortable that can be. I can certainly help you with that. Are you a new or returning customer?", icon: Bot },
  { role: 'customer', text: "I'm a new customer.", icon: User },
  { role: 'ai', text: "Got it. We have an emergency technician available this afternoon between 2 PM and 4 PM. Would you like me to book that diagnostic visit for you?", icon: Bot },
  { role: 'customer', text: "Yes, please. That would be great.", icon: User },
  { role: 'ai', text: "Perfect. I've scheduled your appointment for today. You'll receive a confirmation text in just a second with the details and your technician's name.", icon: Bot },
];

export const ProductDemo: React.FC = () => {
  return (
    <section id="demo" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            See It In <span className="text-brand-blue">Action.</span>
          </motion.h2>
          <p className="text-xl text-gray-400">
            A real Jevus.ai conversation. No scripts. No robots.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card overflow-hidden border-white/10 shadow-2xl">
            {/* Header / Status Bar */}
            <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Live Call Transcript</div>
              <div className="w-12"></div>
            </div>

            {/* Transcript Area */}
            <div className="p-6 lg:p-10 space-y-8 bg-brand-dark/50">
              {transcript.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: line.role === 'ai' ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex gap-4 ${line.role === 'ai' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    line.role === 'ai' ? 'bg-brand-blue text-white' : 'bg-gray-800 text-gray-400'
                  }`}>
                    <line.icon size={20} />
                  </div>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                    line.role === 'ai' 
                      ? 'bg-brand-blue/10 border border-brand-blue/20 text-white rounded-tr-none' 
                      : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none'
                  }`}>
                    {line.text}
                  </div>
                </motion.div>
              ))}

              {/* System Action */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                className="pt-8 mt-8 border-t border-white/5"
              >
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-green-500 uppercase tracking-widest mb-1">System Action Executed</div>
                    <div className="text-white font-bold">Appointment created in Housecall Pro • SMS confirmation sent to customer</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8 }}
                className="flex justify-center pt-10"
              >
                <CalendlyButton 
                  className="btn-primary"
                  text="Experience This Live"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
