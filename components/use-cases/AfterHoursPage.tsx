import React from 'react';
import { UseCasePage } from '../UseCasePage';

const data = {
  slug: 'after-hours-answering',
  name: 'After-Hours Answering',
  headline: "It's 11 PM.\nYour Phone Rings.\nWho's Picking Up?",
  subheadline: 'Jevus AI provides 24/7 after-hours answering for contractors and home service businesses. Every call answered, every lead captured — even at 2 AM on a Sunday.',
  stats: [
    { value: '40%', label: 'of service calls come after hours' },
    { value: '85%', label: 'of callers won\'t leave a voicemail' },
    { value: '$1,200', label: 'average revenue per missed call' },
    { value: '24/7', label: 'coverage with Jevus AI' },
  ],
  problem: {
    title: 'The after-hours problem',
    points: [
      'Customers with emergencies call at night and on weekends — the times you\'re least likely to answer.',
      '85% of callers who hit voicemail hang up and call the next contractor on Google.',
      'Traditional answering services charge $1-2/minute and just take messages — they don\'t book jobs.',
      'You wake up to voicemails from 8 hours ago. The customer already hired someone else.',
      'After-hours calls are often the highest-value emergency jobs — the ones you can\'t afford to miss.',
    ],
  },
  solution: {
    title: 'The Jevus AI solution',
    points: [
      'Jevus answers every call instantly — no rings, no voicemail, no matter the time.',
      'AI has a natural conversation, collects details, and detects emergencies.',
      'Appointments get booked directly into your calendar with full job details.',
      'You get an instant text notification with a complete call summary.',
      'Emergency calls trigger priority alerts to your on-call technician.',
    ],
  },
  benefits: [
    { title: 'Capture Night & Weekend Leads', description: '40% of service calls come outside business hours. Jevus ensures you capture every single one while you sleep.' },
    { title: 'Emergency Escalation', description: 'Jevus detects emergencies and immediately alerts your on-call tech with job details and customer info.' },
    { title: 'No Per-Minute Charges', description: 'Unlike traditional answering services that charge $1-2/minute, Jevus is a flat monthly rate regardless of call volume.' },
    { title: 'Professional First Impression', description: 'Every caller gets a professional, helpful response — even at 3 AM. No groggy half-awake answers.' },
    { title: 'Instant Notifications', description: 'Get a text summary of every after-hours call within seconds, including urgency level and customer details.' },
    { title: 'Works While You Rest', description: 'Go to bed knowing every call is handled. Wake up to booked jobs instead of missed opportunities.' },
  ],
  faqs: [
    { question: 'What counts as "after hours"?', answer: 'You define your business hours in Jevus settings. Any call outside those hours is handled by the AI. Most contractors set 7 AM - 6 PM on weekdays, but you can customize to any schedule.' },
    { question: 'Can Jevus wake me up for true emergencies?', answer: 'Yes. You set emergency escalation rules — for example, burst pipes, no heat, or electrical hazards can trigger an immediate phone call or text to you or your on-call tech, even at 3 AM.' },
    { question: 'What happens during business hours?', answer: 'During business hours, Jevus rings your phone first. If you don\'t answer within a few rings, Jevus picks up so the caller never hits voicemail. You always get first dibs on answering.' },
    { question: 'How does after-hours compare to a traditional answering service?', answer: 'Traditional services charge per minute and just take messages. Jevus has actual conversations, qualifies leads, books appointments, and integrates with your tools — all at a flat monthly rate.' },
  ],
  seo: {
    title: 'After-Hours Answering Service for Contractors | 24/7 AI | Jevus AI',
    description: 'Never miss an after-hours call again. Jevus AI answers contractor calls 24/7, handles emergencies, books appointments, and captures leads while you sleep.',
    keywords: 'after hours answering service contractors, 24/7 answering service plumbers, after hours phone answering HVAC, contractor after hours calls',
  },
};

export const AfterHoursPage = () => <UseCasePage data={data} />;
