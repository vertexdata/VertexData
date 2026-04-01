
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialCard: React.FC<{ quote: string; author: string; role: string; delay: number }> = ({ quote, author, role, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="glass-card p-8 relative flex flex-col h-full"
  >
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="fill-brand-blue text-brand-blue" />
      ))}
    </div>
    
    <p className="text-lg text-gray-300 mb-8 flex-grow leading-relaxed">"{quote}"</p>
    
    <div className="flex items-center gap-4 mt-auto">
      <div className="w-12 h-12 rounded-full bg-brand-blue/20 border border-brand-blue/20 flex items-center justify-center text-brand-blue font-bold text-lg flex-shrink-0">
        {author.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <p className="font-bold text-white">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </motion.div>
);

export const SocialProof: React.FC = () => {
  const testimonials = [
    {
      quote: "We were missing about 7 calls a week during peak hours. That's easily $2k in lost revenue. Jevus stopped the bleeding immediately.",
      author: "Founding Client",
      role: "Plumbing Company in Largo, FL"
    },
    {
      quote: "My guys can't answer the phone while they're under a house. Jevus catches everything and books the appointment. It's a no-brainer.",
      author: "Beta Partner",
      role: "HVAC Contractor in Tampa"
    },
    {
      quote: "I was worried it would sound fake. It doesn't. It handles the 'how much for a water heater' questions perfectly.",
      author: "Early Access User",
      role: "Rooter Service in Clearwater"
    }
  ];

  return (
    <section className="section-padding bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">Currently Onboarding <span className="text-brand-blue">Founding Clients</span></h2>
          <p className="text-xl text-gray-400">Join the first wave of service businesses automating their front desk.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard 
              key={i} 
              quote={t.quote} 
              author={t.author} 
              role={t.role} 
              delay={i * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

