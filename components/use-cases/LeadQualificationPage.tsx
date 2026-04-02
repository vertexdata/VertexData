import React from 'react';
import { UseCasePage } from '../UseCasePage';

const data = {
  slug: 'lead-qualification',
  name: 'Lead Qualification',
  headline: "Not Every Call\nIs a $1,200 Job.\nJevus Knows\nthe Difference.",
  subheadline: 'Jevus AI qualifies every caller — separating high-value jobs from tire-kickers, collecting the details you need, and prioritizing leads by revenue potential.',
  stats: [
    { value: '40%', label: 'of calls aren\'t qualified leads' },
    { value: '$1,200', label: 'average qualified job value' },
    { value: '2x', label: 'close rate on pre-qualified leads' },
    { value: '<60s', label: 'time to qualify a lead' },
  ],
  problem: {
    title: 'Unqualified calls waste your time',
    points: [
      'You drive 30 minutes to an estimate only to find out the customer has a $100 budget for a $2,000 job.',
      'Spam calls, solicitors, and tire-kickers eat up your callback time.',
      'You treat every call the same — but a $200 faucet repair shouldn\'t get the same attention as a $15,000 remodel.',
      'Without qualification, you can\'t prioritize — and the best leads slip through while you chase low-value ones.',
      'Your answering service just takes names and numbers — no job details, no budget, no urgency level.',
    ],
  },
  solution: {
    title: 'AI qualifies before you callback',
    points: [
      'Jevus asks the right questions: job type, scope, urgency, service area, and timeline.',
      'Separates high-value leads (replacements, installations, emergencies) from low-value ones (quick fixes, price shoppers).',
      'Tags leads by priority: hot (emergency, ready to book), warm (comparing options), cold (just browsing).',
      'Filters out spam, solicitors, and out-of-area callers automatically.',
      'Sends you a prioritized lead list so you call the best opportunities first.',
    ],
  },
  benefits: [
    { title: 'Prioritized Lead List', description: 'Wake up to leads sorted by value and urgency. A $10K roof replacement at the top, a leaky faucet at the bottom.' },
    { title: 'Save Time on Estimates', description: 'Stop driving to estimates for customers who can\'t afford the job. Jevus pre-qualifies budget range and expectations.' },
    { title: 'Filter Out Waste', description: 'Spam calls, telemarketers, and out-of-area inquiries get filtered automatically. You only see real leads.' },
    { title: 'Better Close Rates', description: 'Pre-qualified leads close at 2x the rate of unqualified callbacks. The customer already told Jevus what they need.' },
    { title: 'Custom Qualification', description: 'You set the questions: budget range, property type, timeline, specific services. Jevus asks exactly what you need.' },
    { title: 'Revenue Intelligence', description: 'Track which lead sources produce the highest-value, best-qualified leads over time.' },
  ],
  faqs: [
    { question: 'What qualification questions does Jevus ask?', answer: 'You customize the questions. Common ones include: job type/scope, address (to verify service area), urgency/timeline, budget range, property type (residential/commercial), and how they heard about you. Jevus asks naturally — it doesn\'t feel like a survey.' },
    { question: 'How does Jevus prioritize leads?', answer: 'Jevus tags leads as hot (emergency, ready to book now), warm (comparing options, needs follow-up), or cold (just browsing, low urgency). You can customize these tiers based on job type, value, and urgency.' },
    { question: 'Can Jevus filter out-of-area callers?', answer: 'Yes. Jevus collects the caller\'s address and checks it against your service area. Out-of-area callers get a polite redirect while in-area leads get full qualification and booking.' },
    { question: 'Does qualification slow down the call?', answer: 'No. Jevus qualifies naturally within 30-60 seconds as part of the conversation. It doesn\'t feel like an interrogation — it feels like a helpful receptionist understanding their needs.' },
  ],
  seo: {
    title: 'AI Lead Qualification for Home Services | Jevus AI',
    description: 'AI-powered lead qualification for contractors. Jevus separates high-value jobs from tire-kickers, qualifies budget and scope, and prioritizes your callback list.',
    keywords: 'AI lead qualification contractor, lead qualification home services, AI lead scoring plumber, automated lead qualification HVAC',
  },
};

export const LeadQualificationPage = () => <UseCasePage data={data} />;
