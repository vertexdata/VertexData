import React from 'react';
import { ComparisonPage } from '../ComparisonPage';

const data = {
  slug: 'smith-ai',
  competitorName: 'Smith.ai',
  headline: 'Jevus AI vs Smith.ai\nfor Home Service\nBusinesses',
  subheadline: "Smith.ai is built for law firms and professional services. Jevus AI is purpose-built for plumbers, HVAC techs, and electricians who need emergency detection, job booking, and trade-specific call handling.",
  verdict: "Smith.ai is a solid product for law firms and white-collar professional services. But it wasn't built for a plumber with a burst pipe emergency at 2 AM or an HVAC company slammed with no-AC calls in July. Smith.ai uses human receptionists supplemented by AI, which means per-minute charges, inconsistent quality across operators, and no trade-specific features. Jevus AI is purpose-built for home services: it detects emergencies, books jobs into ServiceTitan, and understands the difference between a clogged drain and a sewage backup. If you're a contractor, Jevus is the better fit.",
  rows: [
    { feature: 'Built for Home Services', jevus: true, competitor: false },
    { feature: 'Emergency Detection (burst pipes, no heat, etc.)', jevus: true, competitor: false },
    { feature: 'ServiceTitan / Housecall Pro Integration', jevus: true, competitor: false },
    { feature: '24/7 Availability', jevus: true, competitor: true },
    { feature: 'Books Appointments Directly', jevus: true, competitor: true },
    { feature: 'Handles Unlimited Simultaneous Calls', jevus: true, competitor: false },
    { feature: 'Trade-Specific Call Scripts', jevus: true, competitor: false },
    { feature: 'Consistent Quality Every Call', jevus: true, competitor: false },
    { feature: 'Per-Minute Charges', jevus: 'None — flat rate', competitor: '$2.50-4.00/call' },
    { feature: 'Monthly Starting Price', jevus: '$497/mo', competitor: '$292.50/mo + per call' },
    { feature: 'Primary Market', jevus: 'Home Services', competitor: 'Law Firms' },
  ],
  jevusPros: [
    'Purpose-built for plumbers, HVAC, electricians, and roofers',
    'Emergency detection and escalation for trade-specific emergencies',
    'Integrates with ServiceTitan, Housecall Pro, and Jobber natively',
    'Flat monthly pricing — no per-call or per-minute surprises',
    'Handles unlimited simultaneous calls (critical during storm surges)',
    'Consistent AI quality — no variation between operators',
    'Understands trade terminology and job types',
  ],
  competitorPros: [
    'Established brand with years of history',
    'Human receptionists available (supplemented by AI)',
    'Good for law firms and professional services',
  ],
  competitorCons: [
    'Not built for home services — no emergency detection for plumbing, HVAC, or electrical',
    'Per-call charges ($2.50-4.00) add up fast with high call volume',
    'Human operators vary in quality and trade knowledge',
    'No native integration with ServiceTitan, Housecall Pro, or Jobber',
    'Can only handle one call at a time per operator — hold times during peaks',
    'Operators don\'t understand the difference between a clogged drain and a main line backup',
    'Primary focus is law firms — home services is an afterthought',
  ],
  faqs: [
    { question: 'Is Smith.ai good for plumbers and HVAC companies?', answer: "Smith.ai works for any business, but it wasn't designed for home services. It lacks emergency detection for trade-specific situations, doesn't natively integrate with field service software, and its operators don't have trade knowledge. Jevus AI is purpose-built for these exact businesses." },
    { question: 'How do the costs compare?', answer: "Smith.ai starts at $292.50/month for their base plan but charges per call on top. A busy contractor receiving 100+ calls/month can easily spend $500-800+/month. Jevus is a flat rate starting at $497/month with unlimited calls — no surprises." },
    { question: 'Does Smith.ai detect plumbing or HVAC emergencies?', answer: "No. Smith.ai uses general-purpose scripts. It can't distinguish between a routine appointment request and a burst pipe emergency. Jevus AI understands trade-specific emergencies and escalates with priority alerts." },
    { question: 'Can I switch from Smith.ai to Jevus?', answer: 'Yes. Setup takes about 5 minutes — just redirect your call forwarding from Smith.ai to your Jevus number. Most contractors notice immediate improvements in lead quality and emergency handling.' },
  ],
  seo: {
    title: 'Jevus AI vs Smith.ai for Home Services | Comparison | Jevus AI',
    description: "Compare Jevus AI vs Smith.ai for home service businesses. See why plumbers, HVAC techs, and electricians choose Jevus's purpose-built AI over Smith.ai's general receptionist service.",
    keywords: 'Jevus vs Smith.ai, Smith.ai alternative home services, Smith.ai vs AI receptionist, Smith.ai for plumbers',
  },
};

export const VsSmithAiPage = () => <ComparisonPage data={data} />;
