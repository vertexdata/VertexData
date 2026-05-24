import React from 'react';
import { IndustryPage } from '../IndustryPage';

const data = {
  slug: 'plumbers',
  name: 'Plumbers',
  headline: "A Pipe Bursts at 2 AM.\nYour Phone Rings.\nWho's Answering?",
  subheadline: 'Jevus AI answers every plumbing call 24/7 — qualifying emergencies, booking appointments, and dispatching jobs so you never lose another customer to voicemail.',
  painPoints: [
    "You're under a sink when your phone rings. By the time you call back, they've already booked someone else.",
    'Emergency calls come in at 2 AM but your answering service just takes a message — and charges you $2/minute.',
    "You spend $500/month on Google Ads but miss 30% of the calls they generate.",
    "Customers call during weekends and holidays when you're trying to spend time with family.",
  ],
  stats: [
    { value: '$1,200', label: 'Average Revenue Per Missed Call', description: 'The average plumbing job that walks when you hit voicemail' },
    { value: '8-12', label: 'After-Hours Calls Per Week', description: 'Emergency calls your plumbing business receives outside business hours' },
    { value: '$62K+', label: 'Annual Revenue Lost', description: 'What the average plumbing business loses to unanswered calls per year' },
  ],
  features: [
    { icon: 'bell', title: 'Emergency Detection', description: 'Jevus instantly recognizes emergencies like burst pipes, sewage backups, and gas leaks — and escalates with urgent alerts to you or your on-call tech.' },
    { icon: 'calendar', title: 'Appointment Booking', description: 'Books service calls directly into your calendar with job details, address, and the customer\'s availability.' },
    { icon: 'clock', title: '24/7 After-Hours Coverage', description: 'Never miss a 2 AM emergency call again. Jevus handles calls around the clock, every day of the year.' },
    { icon: 'dollar', title: 'Lead Qualification', description: 'Asks the right questions to separate high-value jobs from tire-kickers before they hit your schedule.' },
    { icon: 'message', title: 'Instant Text Notifications', description: 'Get a text summary of every call with customer info, job type, and urgency level within seconds.' },
    { icon: 'shield', title: 'CRM Integration', description: 'Syncs with ServiceTitan, Housecall Pro, and Jobber so every lead flows straight into your system.' },
  ],
  exampleTranscript: [
    { speaker: 'Jevus AI', text: "Thank you for calling Mike's Plumbing, this is Jevus, your virtual assistant. How can I help you today?" },
    { speaker: 'Customer', text: "Hi, I have water leaking from my ceiling — I think a pipe burst upstairs. It's getting worse." },
    { speaker: 'Jevus AI', text: "I'm sorry to hear that — that does sound urgent. Let me make sure we get someone to you as quickly as possible. Can I get your name and address?" },
    { speaker: 'Customer', text: "It's Sarah, 4521 Oak Drive." },
    { speaker: 'Jevus AI', text: "Thank you, Sarah. I've flagged this as an emergency and notified our on-call technician. Someone will call you back within 15 minutes. In the meantime, if you can locate your main water shut-off valve, turning it off will help slow the leak." },
    { speaker: 'Customer', text: "Oh thank you so much, that's really helpful!" },
  ],
  faqs: [
    { question: 'How does Jevus AI handle plumbing emergencies?', answer: 'Jevus uses natural language understanding to detect emergency keywords like "burst pipe," "flooding," "sewage backup," and "gas smell." When detected, it immediately escalates with an urgent notification to your on-call technician and provides the caller with helpful instructions while they wait.' },
    { question: 'Can Jevus book plumbing appointments into my calendar?', answer: 'Yes. Jevus integrates with Google Calendar, ServiceTitan, Housecall Pro, and Jobber. It checks your availability and books the appointment with full job details including address, issue description, and customer contact info.' },
    { question: 'How much does Jevus AI cost compared to a traditional answering service?', answer: 'Traditional answering services charge $1-2 per minute, which adds up to $300-800/month for most plumbing businesses. Jevus starts at $99/month with unlimited calls — saving you thousands while providing a better customer experience.' },
    { question: 'Does Jevus work with my existing phone number?', answer: 'Yes. You simply set up call forwarding from your existing business line to Jevus. No need to change your phone number. Setup takes under 5 minutes.' },
    { question: 'What if a call needs a real person?', answer: 'Jevus can transfer calls to you or your team when needed. You set the rules — for example, always transfer calls about gas leaks, or transfer during business hours but take messages after hours.' },
  ],
  seo: {
    title: 'AI Answering Service for Plumbers | 24/7 Call Answering | Jevus AI',
    description: 'Never miss a plumbing call again. Jevus AI answers every call 24/7, detects emergencies, books appointments, and qualifies leads — built specifically for plumbers.',
    keywords: 'AI answering service for plumbers, plumber answering service, 24/7 plumber phone answering, plumbing AI receptionist, after hours plumber answering',
  },
};

export const PlumbersPage = () => <IndustryPage data={data} />;
