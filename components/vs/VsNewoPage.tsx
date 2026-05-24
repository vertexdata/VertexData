import React from 'react';
import { ComparisonPage } from '../ComparisonPage';

const data = {
  slug: 'newo-ai',
  competitorName: 'Newo.ai',
  headline: 'Jevus AI vs Newo.ai\nfor Home Service\nBusinesses',
  subheadline: "Newo.ai offers AI receptionists for general businesses. Jevus AI is purpose-built for contractors with trade-specific emergency handling, field service CRM integration, and home service call flows.",
  verdict: "Newo.ai is a capable general-purpose AI receptionist, but it treats a plumbing emergency the same as a dental appointment inquiry. Jevus AI understands the stakes: a burst pipe at 2 AM, an AC failure during a summer heat wave, a sparking outlet in a home with kids. Every feature — from emergency detection to ServiceTitan integration to trade-specific qualification — was built for the unique needs of home service contractors.",
  rows: [
    { feature: 'Built for Home Services', jevus: true, competitor: false },
    { feature: 'Trade-Specific Emergency Detection', jevus: true, competitor: false },
    { feature: 'ServiceTitan / Housecall Pro Integration', jevus: true, competitor: false },
    { feature: '24/7 Availability', jevus: true, competitor: true },
    { feature: 'Lead Qualification', jevus: 'Trade-specific', competitor: 'Generic' },
    { feature: 'Appointment Booking', jevus: true, competitor: true },
    { feature: 'Handles Unlimited Simultaneous Calls', jevus: true, competitor: true },
    { feature: 'Safety Guidance During Emergencies', jevus: true, competitor: false },
    { feature: 'Call Transcripts', jevus: true, competitor: true },
  ],
  jevusPros: [
    'Purpose-built for plumbers, HVAC, electricians, roofers, and contractors',
    'Detects trade-specific emergencies and provides safety guidance to callers',
    'Native integration with ServiceTitan, Housecall Pro, and Jobber',
    'Understands job types, urgency levels, and service area constraints',
    'Flat pricing with no per-call surprises',
    'Built by a team that works directly with home service businesses',
  ],
  competitorPros: [
    'Works for a variety of business types',
    'AI-powered with natural conversation',
    'Appointment scheduling capabilities',
  ],
  competitorCons: [
    'Not specialized for home services — no emergency detection for plumbing, HVAC, or electrical',
    'No native field service software integration',
    'Generic call handling doesn\'t understand trade terminology',
    'No safety guidance for callers during emergencies',
    'One-size-fits-all approach doesn\'t optimize for contractor workflows',
  ],
  faqs: [
    { question: 'How is Jevus different from Newo.ai?', answer: "Newo.ai is a general AI receptionist. Jevus is specifically built for home service businesses. The key differences are trade-specific emergency detection, field service CRM integration, and call flows designed around how contractors actually work." },
    { question: 'Does Newo.ai detect plumbing or HVAC emergencies?', answer: "Newo.ai uses general-purpose call handling. It doesn't distinguish between a routine inquiry and a burst pipe emergency. Jevus detects 50+ trade-specific emergency triggers and escalates appropriately." },
    { question: 'Can I switch from Newo.ai to Jevus?', answer: 'Yes. The switch takes about 5 minutes — redirect your call forwarding to your Jevus number and you\'re live immediately with trade-specific call handling.' },
  ],
  seo: {
    title: 'Jevus AI vs Newo.ai for Home Services | Comparison | Jevus AI',
    description: 'Compare Jevus AI vs Newo.ai for contractors. See why home service businesses choose Jevus for trade-specific AI answering over generic alternatives.',
    keywords: 'Jevus vs Newo.ai, Newo.ai alternative, Newo AI comparison, AI receptionist for contractors',
  },
};

export const VsNewoPage = () => <ComparisonPage data={data} />;
