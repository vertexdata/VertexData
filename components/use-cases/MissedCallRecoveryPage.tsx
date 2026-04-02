import React from 'react';
import { UseCasePage } from '../UseCasePage';

const data = {
  slug: 'missed-call-recovery',
  name: 'Missed Call Recovery',
  headline: 'Every Missed Call\nIs a Customer Calling\nYour Competitor',
  subheadline: 'Jevus AI automatically calls back every missed call within seconds, qualifies the lead, and books the job — before they have a chance to call someone else.',
  stats: [
    { value: '27%', label: 'of calls go unanswered' },
    { value: '< 5s', label: 'Jevus callback time' },
    { value: '78%', label: 'of leads go to first responder' },
    { value: '$62K', label: 'average annual revenue recovered' },
  ],
  problem: {
    title: 'The missed call crisis',
    points: [
      '27% of calls to home service businesses go unanswered — nearly 1 in 3.',
      '78% of customers hire the first contractor who responds to their inquiry.',
      'By the time you call back 30 minutes later, they\'ve already booked someone else.',
      'You spend hundreds on Google Ads and SEO driving calls you never answer.',
      'Every missed call costs an average of $1,200 in lost revenue.',
    ],
  },
  solution: {
    title: 'Instant missed call recovery',
    points: [
      'Jevus detects a missed call and automatically calls the customer back within seconds.',
      'The AI has a natural conversation — qualifying the lead and understanding their needs.',
      'Qualified leads get booked directly into your calendar with full job details.',
      'You receive an instant text with customer info, job type, and urgency level.',
      'Non-urgent leads get a follow-up text with your booking link.',
    ],
  },
  benefits: [
    { title: 'Speed to Lead', description: 'Jevus calls back within seconds — not minutes or hours. The contractor who responds first wins 78% of the time.' },
    { title: 'Recover Lost Revenue', description: 'Stop losing $1,200 per missed call. Most contractors recover $3,000-5,000/month in previously lost jobs.' },
    { title: 'Maximize Ad Spend', description: 'You pay for every click and call from Google Ads. Jevus ensures those expensive leads actually convert.' },
    { title: 'Automatic Text-Back', description: 'Every missed call also gets an instant text: "Sorry we missed you! We\'re calling you right back." This keeps them from dialing a competitor.' },
    { title: 'Smart Qualification', description: 'Jevus doesn\'t just call back — it qualifies the lead, understands the job, and filters out tire-kickers.' },
    { title: 'Works 24/7', description: 'Missed calls at 10 PM get recovered just as fast as missed calls at 10 AM.' },
  ],
  faqs: [
    { question: 'How fast does Jevus call back missed calls?', answer: 'Within seconds. As soon as a call goes unanswered, Jevus automatically initiates a callback. Speed to lead is critical — 78% of customers hire the first contractor who responds.' },
    { question: 'What does the callback sound like?', answer: 'The callback sounds completely natural. Jevus introduces itself as calling from your company name, apologizes for missing the call, and asks how it can help. Callers typically don\'t realize they\'re speaking with AI.' },
    { question: 'What if the customer doesn\'t answer the callback?', answer: 'If the customer doesn\'t pick up, Jevus sends an automatic text message with your company name and a link to book online. This multi-touch approach maximizes recovery rates.' },
    { question: 'Does this work with my Google Ads calls?', answer: 'Yes. Any call that comes to your business line and goes unanswered triggers Jevus\'s recovery flow — including calls from Google Ads, Google Local Services, and organic search.' },
    { question: 'How much revenue can I expect to recover?', answer: 'Most home service businesses recover $3,000-5,000/month in previously lost jobs. With an average job value of $1,200 and a 27% missed call rate, even a small improvement has a massive ROI.' },
  ],
  seo: {
    title: 'Missed Call Text Back & Recovery Service | AI Callback | Jevus AI',
    description: 'Automatically recover every missed call within seconds. Jevus AI calls back, qualifies leads, and books jobs before customers call your competitor.',
    keywords: 'missed call text back service, missed call recovery, automatic callback service, missed call text back contractor',
  },
};

export const MissedCallRecoveryPage = () => <UseCasePage data={data} />;
