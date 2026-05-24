import React from 'react';
import { IndustryPage } from '../IndustryPage';

const data = {
  slug: 'electricians',
  name: 'Electricians',
  headline: "The Power's Out.\nThey're Calling You.\nBut You're On a Job.",
  subheadline: 'Jevus AI answers every electrical service call 24/7 — detecting emergencies, booking jobs, and making sure no customer ever hears your voicemail again.',
  painPoints: [
    "You're running wire in an attic and miss three calls — all from homeowners ready to book.",
    "Electrical emergencies don't wait for business hours, but your answering service just takes messages.",
    "You spend money on Google Local Services ads but miss the calls they send because you're on a ladder.",
    "Customers looking for panel upgrades or EV charger installs call your competitor when you don't pick up.",
  ],
  stats: [
    { value: '$950', label: 'Average Service Call Value', description: 'Revenue lost every time an electrical service call goes unanswered' },
    { value: '27%', label: 'Calls Go Unanswered', description: 'Nearly 1 in 3 calls to electricians end up at voicemail' },
    { value: '$48K+', label: 'Annual Revenue Lost', description: 'What the average electrical contractor loses to missed calls each year' },
  ],
  features: [
    { icon: 'bell', title: 'Electrical Emergency Detection', description: 'Identifies emergencies like power outages, sparking outlets, burning smells, and exposed wiring — and sends urgent alerts to your team.' },
    { icon: 'calendar', title: 'Job Booking', description: 'Schedules electrical inspections, service calls, and installation appointments directly into your calendar with full job details.' },
    { icon: 'clock', title: '24/7 Availability', description: 'Electrical emergencies happen any time. Jevus answers every call, day or night, weekends and holidays included.' },
    { icon: 'dollar', title: 'Lead Qualification', description: 'Distinguishes between high-value jobs like panel upgrades and EV charger installs versus simple outlet replacements.' },
    { icon: 'message', title: 'Instant Job Alerts', description: 'Get a text with every call summary — customer name, address, issue description, and urgency level — within seconds.' },
    { icon: 'shield', title: 'Safety-First Responses', description: 'Provides callers with basic safety guidance for electrical emergencies while they wait for your team to respond.' },
  ],
  exampleTranscript: [
    { speaker: 'Jevus AI', text: "Thank you for calling Spark Electric, this is Jevus, your virtual assistant. How can I help you today?" },
    { speaker: 'Customer', text: "Hi, I smell something burning near one of my outlets and I'm a little worried. The outlet looks brown." },
    { speaker: 'Jevus AI', text: "That does sound concerning and could be a safety issue. I'd recommend not using that outlet and if possible, switching off the circuit breaker for that area. Let me get an electrician out to you quickly. Can I get your name and address?" },
    { speaker: 'Customer', text: "Sure, it's Jennifer Walsh, 2234 Pine Street." },
    { speaker: 'Jevus AI', text: "Thank you, Jennifer. I've flagged this as an urgent electrical safety call. Our on-call electrician has been notified and will contact you within 15 minutes. Please keep that outlet off and avoid plugging anything into nearby outlets until it's been inspected." },
    { speaker: 'Customer', text: "That's great, thank you for the quick help!" },
  ],
  faqs: [
    { question: 'How does Jevus handle electrical emergencies?', answer: 'Jevus detects emergency keywords like "burning smell," "sparking," "power out," "exposed wire," and "electrical fire." It immediately escalates to your on-call electrician with a priority alert and provides the caller with basic safety guidance.' },
    { question: 'Can Jevus book different types of electrical jobs?', answer: 'Yes. Jevus can distinguish between and book various job types including panel upgrades, EV charger installations, electrical inspections, outlet repairs, lighting installs, and emergency service calls.' },
    { question: 'Does Jevus work for commercial electricians too?', answer: 'Absolutely. Jevus handles both residential and commercial calls. It can collect details about the property type, scope of work, and any specific access requirements for commercial jobs.' },
    { question: 'How much does Jevus cost compared to hiring a receptionist?', answer: 'A full-time receptionist costs $35,000-$50,000/year plus benefits. Jevus starts at $99/month — less than one missed service call — and works 24/7 without breaks, sick days, or overtime.' },
    { question: 'Can I customize how Jevus answers for my electrical company?', answer: 'Yes. You can customize the greeting, company name, service area, types of jobs you accept, qualification questions, and escalation rules. Jevus represents your brand exactly how you want.' },
  ],
  seo: {
    title: 'AI Phone Answering for Electricians | 24/7 Call Answering | Jevus AI',
    description: 'Never miss an electrical service call again. Jevus AI answers calls 24/7, detects electrical emergencies, books jobs, and qualifies leads for electricians.',
    keywords: 'AI phone answering for electricians, electrician answering service, 24/7 electrician phone answering, electrical contractor AI receptionist',
  },
};

export const ElectriciansPage = () => <IndustryPage data={data} />;
