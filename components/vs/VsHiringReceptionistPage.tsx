import React from 'react';
import { ComparisonPage } from '../ComparisonPage';

const data = {
  slug: 'hiring-receptionist',
  competitorName: 'Hiring a Receptionist',
  headline: 'AI Receptionist vs\nHiring a Full-Time Receptionist',
  subheadline: 'A full-time receptionist costs $47,000-$62,000/year, works 40 hours/week, and can only handle one call at a time. Jevus AI works 24/7/365 for a fraction of the price.',
  verdict: 'Hiring a receptionist makes sense for businesses that need in-person front desk presence. But for home service businesses where the phone is the front door, an AI receptionist outperforms a human on every metric that matters: availability, consistency, cost, and scalability. Jevus never calls in sick, never puts a caller on hold, and costs less per month than a receptionist costs per week.',
  rows: [
    { feature: '24/7/365 Availability', jevus: true, competitor: false },
    { feature: 'Handles Unlimited Simultaneous Calls', jevus: true, competitor: false },
    { feature: 'Never Calls in Sick', jevus: true, competitor: false },
    { feature: 'No Training Required', jevus: true, competitor: false },
    { feature: 'Books Appointments Directly', jevus: true, competitor: true },
    { feature: 'Emergency Detection', jevus: true, competitor: 'Varies' },
    { feature: 'CRM Integration (Automatic)', jevus: true, competitor: false },
    { feature: 'Consistent Quality Every Call', jevus: true, competitor: false },
    { feature: 'Handles Weekend/Holiday Calls', jevus: true, competitor: false },
    { feature: 'Annual Cost', jevus: '$5,964-17,964', competitor: '$47,000-62,000+' },
    { feature: 'Benefits & Taxes', jevus: 'None', competitor: '20-30% additional' },
    { feature: 'Time to Hire & Train', jevus: '5 minutes', competitor: '2-8 weeks' },
  ],
  jevusPros: [
    'Works 24/7/365 — nights, weekends, holidays included',
    'Handles unlimited simultaneous calls (no hold times)',
    'Costs $5,964-17,964/year vs $47,000-62,000+ for a receptionist',
    'No benefits, PTO, sick days, or payroll taxes',
    'Consistent performance on every single call',
    'No hiring, training, or management overhead',
    'Scales instantly with your business — no need to hire more staff',
  ],
  competitorPros: [
    'In-person presence at a physical office',
    'Can handle walk-in customers',
  ],
  competitorCons: [
    'Costs $47,000-$62,000/year plus 20-30% for benefits and taxes',
    'Only works 40 hours/week — misses 72% of the week',
    'Can only handle one call at a time (other callers go to hold)',
    'Calls in sick, takes vacation, quits with 2 weeks notice',
    'Quality varies based on mood, training, and experience',
    'Takes 2-8 weeks to hire and train a new receptionist',
    'If they leave, you start from scratch',
  ],
  faqs: [
    { question: 'Can Jevus AI really replace a receptionist?', answer: 'For phone-based reception, yes. Jevus handles incoming calls better than most receptionists: it\'s available 24/7, handles unlimited simultaneous calls, never has a bad day, and costs a fraction of the price. The only thing it can\'t do is greet walk-in customers at a physical office.' },
    { question: 'What about the human touch?', answer: 'Jevus is designed to sound natural and empathetic. Callers regularly don\'t realize they\'re speaking with AI. And unlike a human who might be having a bad day or rushing between calls, Jevus gives every caller the same professional, patient experience.' },
    { question: 'What if I already have a receptionist?', answer: 'Many businesses use Jevus as a complement to their existing receptionist — handling overflow calls, after-hours calls, and weekends. This lets your receptionist focus on in-person customers and complex issues while Jevus ensures no call goes unanswered.' },
    { question: 'How much would I actually save?', answer: 'The average receptionist costs $47,000-$62,000/year in salary alone, plus 20-30% for benefits, payroll taxes, and overhead. That\'s $56,000-$80,000+ total. Jevus costs $5,964-$17,964/year — a savings of $38,000-$74,000 annually with better 24/7 coverage.' },
  ],
  seo: {
    title: 'AI Receptionist vs Hiring a Receptionist | Cost Comparison | Jevus AI',
    description: 'Compare the cost of AI receptionist vs hiring a full-time receptionist. Save $38,000-$74,000/year with 24/7 coverage, unlimited calls, and zero sick days.',
    keywords: 'AI receptionist vs hiring receptionist, receptionist cost comparison, virtual receptionist vs in-house, AI receptionist cost savings',
  },
};

export const VsHiringReceptionistPage = () => <ComparisonPage data={data} />;
