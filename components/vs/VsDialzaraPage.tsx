import React from 'react';
import { ComparisonPage } from '../ComparisonPage';

const data = {
  slug: 'dialzara',
  competitorName: 'Dialzara',
  headline: 'Jevus AI vs Dialzara\nfor Home Service\nBusinesses',
  subheadline: "Dialzara provides AI phone agents for small businesses. Jevus AI goes deeper with home-service-specific emergency handling, CRM integrations, and contractor-optimized call flows.",
  verdict: "Dialzara is a solid AI phone answering option for general small businesses. But for contractors dealing with emergencies, field service management software, and the unique dynamics of home service calls, Jevus AI provides a significantly better experience. Jevus understands the difference between a clogged drain and a sewage backup, integrates with the tools contractors actually use, and provides safety guidance during emergencies.",
  rows: [
    { feature: 'Built for Home Services', jevus: true, competitor: false },
    { feature: 'Emergency Detection', jevus: true, competitor: false },
    { feature: 'Field Service CRM Integration', jevus: true, competitor: false },
    { feature: '24/7 Availability', jevus: true, competitor: true },
    { feature: 'Appointment Booking', jevus: true, competitor: true },
    { feature: 'Trade-Specific Qualification', jevus: true, competitor: false },
    { feature: 'Safety Guidance', jevus: true, competitor: false },
    { feature: 'Unlimited Simultaneous Calls', jevus: true, competitor: true },
  ],
  jevusPros: [
    'Specifically designed for plumbers, HVAC, electricians, and roofers',
    'Detects and escalates trade-specific emergencies in real-time',
    'Integrates with ServiceTitan, Housecall Pro, Jobber',
    'Provides safety guidance to callers during emergencies',
    'Qualifies leads by job type, urgency, and value',
  ],
  competitorPros: [
    'Quick setup for general small businesses',
    'AI-powered phone answering',
    'Affordable entry point',
  ],
  competitorCons: [
    'Not built for home services — generic call handling',
    'No trade-specific emergency detection',
    'No field service CRM integration',
    'Doesn\'t understand contractor workflows or terminology',
  ],
  faqs: [
    { question: 'How does Jevus compare to Dialzara for contractors?', answer: "Dialzara is a general small business AI phone agent. Jevus is built specifically for home service contractors — with emergency detection, CRM integration, and trade-specific call flows that Dialzara doesn't offer." },
    { question: 'Is Dialzara good for plumbers?', answer: "Dialzara can answer calls for plumbers, but it won't detect a burst pipe emergency, book into ServiceTitan, or provide safety guidance to a caller with a flooding basement. Jevus does all of that." },
    { question: 'Can I switch from Dialzara to Jevus?', answer: 'Yes. It takes about 5 minutes to redirect your call forwarding and start using Jevus\'s contractor-specific AI answering.' },
  ],
  seo: {
    title: 'Jevus AI vs Dialzara for Contractors | Comparison | Jevus AI',
    description: 'Compare Jevus AI vs Dialzara for home service businesses. See why contractors choose Jevus for trade-specific AI phone answering.',
    keywords: 'Jevus vs Dialzara, Dialzara alternative, Dialzara comparison, AI phone agent contractors',
  },
};

export const VsDialzaraPage = () => <ComparisonPage data={data} />;
