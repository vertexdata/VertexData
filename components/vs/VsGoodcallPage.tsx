import React from 'react';
import { ComparisonPage } from '../ComparisonPage';

const data = {
  slug: 'goodcall',
  competitorName: 'Goodcall',
  headline: 'Jevus AI vs Goodcall\nfor Home Service\nBusinesses',
  subheadline: "Goodcall offers basic AI phone answering for small businesses. Jevus AI goes deeper with trade-specific emergency detection, CRM integration, and advanced lead qualification built for contractors.",
  verdict: "Goodcall is a decent entry-level AI answering product for generic small businesses. But for home service contractors who deal with emergencies, high-value jobs, and field service software — it falls short. Goodcall can take a message, but it can't detect a burst pipe emergency, book a job into ServiceTitan, or qualify a $10,000 roof replacement lead. Jevus AI was built from the ground up for plumbers, HVAC techs, electricians, and roofers who need more than a glorified voicemail.",
  rows: [
    { feature: 'Built for Home Services', jevus: true, competitor: false },
    { feature: 'Emergency Detection & Escalation', jevus: true, competitor: false },
    { feature: 'ServiceTitan / Housecall Pro Integration', jevus: true, competitor: false },
    { feature: 'Advanced Lead Qualification', jevus: true, competitor: 'Basic' },
    { feature: 'Appointment Booking', jevus: true, competitor: 'Basic' },
    { feature: '24/7 Availability', jevus: true, competitor: true },
    { feature: 'Call Transcripts & Recordings', jevus: true, competitor: true },
    { feature: 'Trade-Specific Call Handling', jevus: true, competitor: false },
    { feature: 'Handles Unlimited Simultaneous Calls', jevus: true, competitor: true },
    { feature: 'Custom Business Rules', jevus: 'Advanced', competitor: 'Basic' },
    { feature: 'Priority SMS Notifications', jevus: true, competitor: 'Basic' },
  ],
  jevusPros: [
    'Deep home service expertise — understands plumbing, HVAC, electrical, and roofing',
    'Emergency detection with priority escalation for trade-specific urgencies',
    'Native integration with ServiceTitan, Housecall Pro, and Jobber',
    'Advanced lead qualification — separates $200 fixes from $10K replacements',
    'Custom business rules for service area, job types, and escalation',
    'Built by a team that works directly with contractors',
    'Detailed call transcripts with job type, urgency, and customer info',
  ],
  competitorPros: [
    'Simple setup for basic phone answering',
    'Lower entry price point for basic features',
    'Works for generic small businesses',
  ],
  competitorCons: [
    'No emergency detection — treats a burst pipe the same as a routine inquiry',
    'No native field service software integration (ServiceTitan, Jobber, etc.)',
    'Basic lead qualification — doesn\'t understand trade-specific job types',
    'Generic small business focus — not optimized for contractor workflows',
    'Limited customization for trade-specific call handling',
    'Basic notification system — no priority escalation based on urgency',
  ],
  faqs: [
    { question: 'How is Jevus different from Goodcall?', answer: "Goodcall is a general-purpose AI answering service. Jevus is purpose-built for home services. The key differences are emergency detection (Jevus knows what a burst pipe or no-heat emergency means), field service software integration (ServiceTitan, Housecall Pro, Jobber), and trade-specific lead qualification." },
    { question: 'Is Goodcall cheaper than Jevus?', answer: "Goodcall has a lower entry price, but you get what you pay for. It lacks the emergency detection, CRM integration, and trade-specific features that make Jevus pay for itself. One missed emergency call that Goodcall doesn't escalate costs more than months of Jevus." },
    { question: 'Can Goodcall detect plumbing emergencies?', answer: "No. Goodcall uses generic call handling that doesn't understand trade-specific emergencies. A burst pipe gets the same treatment as someone asking about business hours. Jevus detects emergencies and immediately escalates with priority alerts." },
    { question: 'Can I switch from Goodcall to Jevus?', answer: 'Yes. Switching takes about 5 minutes — redirect your call forwarding to your Jevus number. Our onboarding team helps you set up trade-specific scripts and emergency rules.' },
  ],
  seo: {
    title: 'Jevus AI vs Goodcall for Contractors | Comparison | Jevus AI',
    description: 'Compare Jevus AI vs Goodcall for home service businesses. See why contractors choose Jevus for emergency detection, CRM integration, and trade-specific AI answering.',
    keywords: 'Jevus vs Goodcall, Goodcall alternative, Goodcall vs Jevus, AI answering service comparison contractors',
  },
};

export const VsGoodcallPage = () => <ComparisonPage data={data} />;
