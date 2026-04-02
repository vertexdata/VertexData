import React from 'react';
import { IndustryPage } from '../IndustryPage';

const data = {
  slug: 'pest-control',
  name: 'Pest Control Companies',
  headline: "There's a Snake\nin Their Kitchen.\nWho's Answering?",
  subheadline: 'Jevus AI answers every pest control call 24/7 — handling urgent wildlife removal, scheduling treatments, and booking inspections while your techs are in the field.',
  painPoints: [
    "Homeowners with a rat in the attic or snake in the garage call in a panic — and won't leave a voicemail.",
    "Termite inspection leads from real estate agents need immediate response or they call the next company.",
    "Seasonal pest surges (ant season, mosquito season) flood your phone when you're already fully booked.",
    "Property managers with multi-unit infestations need same-day response you can't provide when you're on a route.",
  ],
  stats: [
    { value: '$450', label: 'Average Treatment Value', description: 'Revenue per missed pest control call' },
    { value: '$2,800', label: 'Average Termite Job', description: 'Value of termite treatment leads lost to voicemail' },
    { value: '85%', label: 'Won\'t Leave Voicemail', description: 'Callers who hang up and call your competitor' },
  ],
  features: [
    { icon: 'bell', title: 'Urgent Pest Detection', description: 'Recognizes wildlife emergencies (snakes, rats, bats) and escalates immediately with priority alerts.' },
    { icon: 'calendar', title: 'Treatment Scheduling', description: 'Books pest inspections and treatment appointments with address, pest type, and severity details.' },
    { icon: 'clock', title: '24/7 Emergency Response', description: 'Wildlife emergencies happen at all hours. Jevus answers every call instantly, day or night.' },
    { icon: 'dollar', title: 'Lead Qualification', description: 'Separates one-time treatments from recurring service opportunities and high-value termite inspections.' },
    { icon: 'message', title: 'Route-Friendly Notifications', description: 'Get text summaries between stops — new leads with address, pest type, and urgency level.' },
    { icon: 'shield', title: 'Recurring Service Capture', description: 'Identifies callers interested in monthly or quarterly treatment plans — your most valuable customers.' },
  ],
  exampleTranscript: [
    { speaker: 'Jevus AI', text: "Thank you for calling Guardian Pest Control, this is Jevus, your virtual assistant. How can I help you today?" },
    { speaker: 'Customer', text: "Hi, um, I just found a huge rat in my garage and I'm freaking out. Can someone come today?" },
    { speaker: 'Jevus AI', text: "I completely understand — that's unsettling. Let me get you on our schedule as a priority. Can I get your name and address?" },
    { speaker: 'Customer', text: "Lisa Thompson, 3324 Maple Avenue." },
    { speaker: 'Jevus AI', text: "Thank you, Lisa. I've flagged this as urgent and our team has been notified. Have you noticed any droppings or damage that might indicate this has been going on for a while?" },
    { speaker: 'Customer', text: "Actually yes, I've seen some droppings in the attic too." },
    { speaker: 'Jevus AI', text: "Good to know — I'll note that for the technician so they can do a full inspection of both areas. Someone will call you back within the hour to confirm your appointment time. In the meantime, try to keep the garage door closed." },
  ],
  faqs: [
    { question: 'Can Jevus handle wildlife emergency calls?', answer: 'Yes. Jevus detects urgent language about snakes, rats, bats, raccoons, and other wildlife and immediately escalates with a priority notification to your team.' },
    { question: 'Does Jevus work for termite inspection leads?', answer: 'Yes. Jevus can capture termite inspection requests — including details from real estate agents who need fast turnaround for home sales. These high-value leads get flagged as priority.' },
    { question: 'Can Jevus help capture recurring service customers?', answer: 'Yes. When callers express interest in ongoing pest prevention, Jevus notes this and can mention your monthly or quarterly treatment plans during the call.' },
    { question: 'How does Jevus handle seasonal call surges?', answer: 'Jevus handles unlimited simultaneous calls, so when ant season or mosquito season hits and your phone is ringing constantly, every caller still gets an immediate response.' },
  ],
  seo: {
    title: 'AI Answering Service for Pest Control Companies | Jevus AI',
    description: 'AI voice receptionist for pest control companies. Handle wildlife emergencies, termite inspections, and treatment bookings 24/7. Never miss a pest control lead.',
    keywords: 'pest control answering service, AI receptionist pest control, pest control phone answering, wildlife removal answering service',
  },
};

export const PestControlPage = () => <IndustryPage data={data} />;
