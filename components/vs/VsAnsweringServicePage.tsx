import React from 'react';
import { ComparisonPage } from '../ComparisonPage';

const data = {
  slug: 'answering-service',
  competitorName: 'Traditional Answering Service',
  headline: 'AI Receptionist vs\nTraditional Answering Service',
  subheadline: 'Traditional answering services charge per minute and just take messages. Jevus AI actually books jobs, qualifies leads, and integrates with your tools — at a fraction of the cost.',
  verdict: 'Traditional answering services were the best option available for decades. But they were never built for home service businesses. They take messages — they don\'t book jobs, qualify leads, or integrate with your workflow. Jevus AI does all of that at a flat monthly rate, 24/7, with zero per-minute charges. For contractors who need more than a message-taker, Jevus is the clear upgrade.',
  rows: [
    { feature: '24/7 Availability', jevus: true, competitor: true },
    { feature: 'Books Appointments Directly', jevus: true, competitor: false },
    { feature: 'Qualifies Leads', jevus: true, competitor: false },
    { feature: 'Emergency Detection & Escalation', jevus: true, competitor: false },
    { feature: 'CRM Integration', jevus: true, competitor: false },
    { feature: 'Handles Unlimited Simultaneous Calls', jevus: true, competitor: false },
    { feature: 'Instant Text Notifications', jevus: true, competitor: false },
    { feature: 'Call Transcripts & Recordings', jevus: true, competitor: false },
    { feature: 'Consistent Quality Every Call', jevus: true, competitor: false },
    { feature: 'Per-Minute Charges', jevus: 'None — flat rate', competitor: '$1-2/minute' },
    { feature: 'Monthly Cost', jevus: 'Custom', competitor: '$300-800+' },
    { feature: 'Setup Time', jevus: '5 minutes', competitor: '1-2 weeks' },
  ],
  jevusPros: [
    'Flat monthly pricing — no surprise per-minute charges',
    'Actually books appointments into your calendar',
    'Qualifies leads and detects emergencies',
    'Handles unlimited simultaneous calls',
    'Integrates with ServiceTitan, Housecall Pro, Jobber',
    'Instant text notifications with full call details',
    'Consistent quality on every single call',
  ],
  competitorPros: [
    'Human operators (though quality varies significantly)',
    'Established industry with decades of history',
  ],
  competitorCons: [
    'Per-minute charges add up fast ($300-800+/month for moderate volume)',
    'Just takes messages — doesn\'t book appointments or qualify leads',
    'One operator handles many clients simultaneously, leading to hold times',
    'No CRM integration — you manually re-enter all information',
    'Quality varies dramatically between operators and shifts',
    'Setup takes 1-2 weeks with training and scripting',
    'No emergency detection or intelligent escalation',
  ],
  faqs: [
    { question: 'Is Jevus AI really better than a human answering service?', answer: 'For home service businesses, yes. Traditional answering services just take messages — they don\'t understand plumbing emergencies, book HVAC appointments, or qualify electrical leads. Jevus is purpose-built for contractors: it handles the full conversation, books the job, and sends you everything you need.' },
    { question: 'What about complex calls that need a human?', answer: 'Jevus can transfer calls to you or your team at any time. You set the rules for when calls should be transferred versus handled by the AI. For the vast majority of incoming service calls, Jevus handles them better than a traditional answering service.' },
    { question: 'How much do traditional answering services actually cost?', answer: 'Most charge $1-2 per minute. For a business receiving 50-100 calls/month with an average call length of 3-4 minutes, that\'s $150-800/month — and all you get is message-taking. Jevus provides full qualification, booking, and CRM integration at a flat rate.' },
    { question: 'Can I switch from my current answering service to Jevus?', answer: 'Yes, and it takes about 5 minutes. Simply redirect your call forwarding from your current service to your Jevus number. Most contractors notice an immediate improvement in lead quality and booking rates.' },
  ],
  seo: {
    title: 'AI Receptionist vs Answering Service | Side-by-Side Comparison | Jevus AI',
    description: 'Compare AI receptionist vs traditional answering service for home service businesses. See why contractors are switching from per-minute message-taking to AI-powered job booking.',
    keywords: 'AI receptionist vs answering service, AI vs traditional answering service, answering service alternative, answering service comparison',
  },
};

export const VsAnsweringServicePage = () => <ComparisonPage data={data} />;
