
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { CalendlyButton } from './CalendlyButton';

const PricingTier: React.FC<{ 
  name: string; 
  price: string; 
  period?: string; 
  tagline: string; 
  features: string[]; 
  whoFor: string; 
  isPopular?: boolean;
  isCustom?: boolean;
}> = ({ 
  name, 
  price, 
  period, 
  tagline, 
  features, 
  whoFor, 
  isPopular = false,
  isCustom = false
}) => (
  <div className={`relative flex flex-col h-full p-8 rounded-2xl border ${
    isPopular 
      ? 'bg-brand-blue/10 border-brand-blue shadow-2xl shadow-brand-blue/20' 
      : 'bg-gray-900/50 border-gray-800'
  }`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
        Most Popular
      </div>
    )}
    
    <div className="mb-6">
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-4xl font-black text-white">{price}</span>
        {period && <span className="text-gray-400 font-medium">{period}</span>}
      </div>
      <p className="text-sm font-medium text-brand-blue min-h-[40px]">{tagline}</p>
    </div>

    <div className="flex-grow mb-8">
      <ul className="space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
            <Check size={18} className="text-brand-blue flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-auto">
      <div className="mb-6 pt-6 border-t border-gray-800">
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">Who this is for:</p>
        <p className="text-sm text-gray-400 italic">"{whoFor}"</p>
      </div>
      
      <CalendlyButton 
        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
          isPopular || isCustom
            ? 'bg-brand-blue hover:bg-blue-600 text-white shadow-lg shadow-brand-blue/25' 
            : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
        }`}
      >
        {isCustom ? 'Contact Sales' : 'Get Started'}
      </CalendlyButton>
    </div>
  </div>
);

export const Pricing: React.FC = () => {
  const tiers = [
    {
      name: "The Missed Call Fix",
      price: "$497",
      period: "/mo",
      tagline: "Stop bleeding revenue from missed calls.",
      features: [
        "AI calls back every missed call automatically",
        "AI qualifies leads (name, issue, urgency, address)",
        "AI books appointments on your calendar",
        "Instant email summary with call recording & transcript",
        "Business hours coverage",
        "Dedicated local phone number"
      ],
      whoFor: "For the owner-operator who just needs the phone answered."
    },
    {
      name: "The Growth Partner",
      price: "$797",
      period: "/mo",
      tagline: "A full-time receptionist for a fraction of the cost.",
      features: [
        "Everything in Tier 1",
        "AI answers ALL calls (rings you first, picks up if you don't)",
        "24/7 after-hours coverage (nights, weekends, holidays)",
        "Instant SMS text-back to every caller",
        "Automated appointment reminders (reduces no-shows)",
        "Custom AI personality trained on your business"
      ],
      whoFor: "For growing teams that need 24/7 coverage.",
      isPopular: true
    },
    {
      name: "The Automation Empire",
      price: "$1,497",
      period: "/mo",
      tagline: "Run your entire front office on autopilot.",
      features: [
        "Everything in Tier 2",
        "Full CRM with lead pipeline dashboard",
        "Automated Google review requests",
        "AI follow-up sequences for unsold leads",
        "Two-way SMS inbox",
        "Monthly ROI performance report"
      ],
      whoFor: "For established businesses scaling to $1M+."
    },
    {
      name: "The Enterprise Custom",
      price: "$2,000+",
      period: "/mo",
      tagline: "Tailored specifically to your workflow.",
      features: [
        "Integration with ServiceTitan, Housecall Pro, Jobber",
        "Multi-location call routing",
        "AI provides rough estimates based on your pricing",
        "Proactive outbound booking campaigns",
        "Website chat widget integration",
        "Custom reporting and analytics"
      ],
      whoFor: "For multi-truck operations with complex needs.",
      isCustom: true
    }
  ];

  return (
    <section id="pricing" className="section-padding relative overflow-hidden bg-brand-dark">
      <div className="container mx-auto px-6">
        {/* Pricing Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            The average home service business loses <span className="text-rose-500">$3,000-$5,000</span> a month in missed calls.
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stop donating jobs to your competitors. Jevus.ai pays for itself with just 1-2 saved jobs a month.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <PricingTier {...tier} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

