import React from 'react';
import { IndustryPage } from '../IndustryPage';

const data = {
  slug: 'garage-door',
  name: 'Garage Door Companies',
  headline: "Their Garage Door\nWon't Open.\nThey're Calling You Now.",
  subheadline: 'Jevus AI answers every garage door service call 24/7 — handling emergencies, booking repairs, and qualifying installation leads.',
  painPoints: [
    "A homeowner's car is trapped in the garage at 7 AM — they need someone now, not a voicemail.",
    "Broken spring calls are urgent and high-value, but you miss them when you're on another install.",
    "New garage door installation leads call once for an estimate. If you miss it, they call the next company.",
    "Property managers with multiple units need fast response times you can't provide from the field.",
  ],
  stats: [
    { value: '$350', label: 'Average Repair Value', description: 'Revenue per missed garage door service call' },
    { value: '$1,800', label: 'Average Installation', description: 'Revenue at stake when installation leads go unanswered' },
    { value: '70%', label: 'Calls Are Urgent', description: 'Most garage door calls involve a door that won\'t open or close' },
  ],
  features: [
    { icon: 'bell', title: 'Emergency Detection', description: 'Detects stuck doors, broken springs, and off-track situations that need same-day service.' },
    { icon: 'calendar', title: 'Service Scheduling', description: 'Books repair appointments and installation estimates with door type, issue, and property details.' },
    { icon: 'clock', title: '24/7 Emergency Coverage', description: 'Garage door emergencies happen before work, after work, and on weekends. Jevus is always on.' },
    { icon: 'dollar', title: 'Installation Lead Capture', description: 'Qualifies new door installation leads with door size, material preference, and budget range.' },
    { icon: 'message', title: 'Instant Dispatch', description: 'Sends urgent job details to your closest available tech via text for fastest response time.' },
    { icon: 'shield', title: 'Safety Guidance', description: 'Advises callers not to attempt broken spring repairs themselves — building trust while keeping them safe.' },
  ],
  exampleTranscript: [
    { speaker: 'Jevus AI', text: "Thank you for calling Precision Garage Doors, this is Jevus, your virtual assistant. How can I help you today?" },
    { speaker: 'Customer', text: "My garage door won't go up and my car is stuck inside. I need to get to work!" },
    { speaker: 'Jevus AI', text: "I understand the urgency — let me get someone to you as quickly as possible. Can I get your name and address?" },
    { speaker: 'Customer', text: "Tom Wilson, 2240 Cypress Lane." },
    { speaker: 'Jevus AI', text: "Thank you, Tom. Do you hear any unusual sounds when you press the opener, or does it seem like the door is completely stuck?" },
    { speaker: 'Customer', text: "I heard a loud bang last night and now it won't budge at all." },
    { speaker: 'Jevus AI', text: "That sounds like it could be a broken spring — that's a very common issue and our techs handle these daily. I've flagged this as an emergency. Please don't try to force the door open manually. A technician will call you within 15 minutes to schedule a same-day visit." },
  ],
  faqs: [
    { question: 'Can Jevus handle urgent garage door calls?', answer: 'Yes. Most garage door calls are urgent — someone\'s car is trapped, a door is off track, or a spring broke. Jevus detects these situations and sends immediate priority alerts to your team.' },
    { question: 'Does Jevus qualify installation leads?', answer: 'Yes. For new door installation inquiries, Jevus collects door size, material preference (steel, wood, aluminum), budget range, and timeline to help you prepare an accurate estimate.' },
    { question: 'Can Jevus provide safety advice to callers?', answer: 'Yes. Jevus advises callers not to attempt broken spring repairs themselves and to keep children and pets away from a malfunctioning door. This builds trust while protecting your potential customers.' },
    { question: 'How does this help during peak call times?', answer: 'Garage door companies often get flooded with calls after storms or cold snaps. Jevus handles unlimited simultaneous calls, so every homeowner gets an immediate response.' },
  ],
  seo: {
    title: 'AI Answering Service for Garage Door Companies | Jevus AI',
    description: 'AI voice receptionist for garage door companies. Handle emergency calls, schedule repairs, and qualify installation leads 24/7.',
    keywords: 'garage door answering service, AI receptionist garage door company, garage door phone answering, garage door emergency answering',
  },
};

export const GarageDoorPage = () => <IndustryPage data={data} />;
