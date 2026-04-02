import React from 'react';
import { IndustryPage } from '../IndustryPage';

const data = {
  slug: 'hvac',
  name: 'HVAC Companies',
  headline: "It's 98\u00B0 Outside.\nTheir AC Died.\nAre You Answering?",
  subheadline: 'Jevus AI answers every HVAC call 24/7 — handling emergencies, booking service calls, and capturing leads while your techs are in the field.',
  painPoints: [
    "Summer hits and your phone rings off the hook — but your team is fully booked on installs and can't pick up.",
    "No-heat emergencies come in at midnight, but your after-hours service just takes a name and number.",
    "You lose weekend leads because nobody answers on Saturdays when homeowners are actually home to call.",
    "New customer calls go to voicemail while your office manager is on the other line with a parts supplier.",
  ],
  stats: [
    { value: '$1,400', label: 'Average HVAC Job Value', description: 'The average revenue at stake every time an HVAC call goes unanswered' },
    { value: '35%', label: 'Calls Missed in Peak Season', description: 'Percentage of HVAC calls missed during summer and winter rush' },
    { value: '$120K+', label: 'Annual Revenue at Risk', description: 'What a 3-truck HVAC company loses yearly to missed calls' },
  ],
  features: [
    { icon: 'bell', title: 'Emergency Prioritization', description: 'Detects no-heat, no-AC, and carbon monoxide situations. Escalates with priority alerts so your team responds to emergencies first.' },
    { icon: 'calendar', title: 'Smart Scheduling', description: 'Books service calls and maintenance appointments directly into your calendar with job type, equipment info, and customer details.' },
    { icon: 'clock', title: 'Peak Season Overflow', description: 'When your phones are slammed in July or January, Jevus handles the overflow so no call goes to voicemail.' },
    { icon: 'dollar', title: 'Maintenance Plan Upsells', description: 'Identifies opportunities to mention your maintenance plans and seasonal tune-up specials during calls.' },
    { icon: 'message', title: 'Dispatch Notifications', description: 'Sends instant job details to your dispatcher or techs via text, including equipment type, issue description, and urgency.' },
    { icon: 'shield', title: 'Brand Consistency', description: 'Answers with your company name, follows your scripts, and represents your brand exactly how you want — every single call.' },
  ],
  exampleTranscript: [
    { speaker: 'Jevus AI', text: "Thank you for calling Comfort Air Solutions, this is Jevus, your virtual assistant. How can I help you today?" },
    { speaker: 'Customer', text: "Yeah, our air conditioner stopped working and it's over 95 degrees in the house. We have a baby and we really need someone out here." },
    { speaker: 'Jevus AI', text: "I completely understand the urgency, especially with a little one at home. Let me get you on our emergency schedule right away. Can I get your name and address?" },
    { speaker: 'Customer', text: "David Chen, 8812 Sunset Boulevard, Orlando." },
    { speaker: 'Jevus AI', text: "Thank you, David. I've marked this as a priority emergency and our on-call technician has been notified. You should hear back within 20 minutes. Do you know what brand and model your AC unit is?" },
    { speaker: 'Customer', text: "It's a Trane, I think it's about 8 years old." },
    { speaker: 'Jevus AI', text: "Got it — Trane unit, approximately 8 years old. I've added that to your service ticket. The tech will come prepared. Is there anything else I can help with?" },
  ],
  faqs: [
    { question: 'How does Jevus handle HVAC emergencies like no-heat or no-AC?', answer: 'Jevus detects emergency language like "no heat," "AC stopped working," "carbon monoxide alarm," and "furnace not turning on." It immediately sends a priority notification to your on-call technician with full details so they can respond fast.' },
    { question: 'Can Jevus AI handle high call volume during peak HVAC season?', answer: 'Absolutely. Unlike a human receptionist who can only handle one call at a time, Jevus can answer unlimited simultaneous calls. During peak summer and winter months, this means zero missed calls even when your phones are ringing non-stop.' },
    { question: 'Does Jevus integrate with HVAC software like ServiceTitan?', answer: 'Yes. Jevus integrates with ServiceTitan, Housecall Pro, Jobber, and other HVAC management platforms. New leads and appointments sync automatically into your existing workflow.' },
    { question: 'Can Jevus collect equipment information from callers?', answer: 'Yes. Jevus can ask about equipment brand, model, age, and symptoms — giving your technician the details they need before they even arrive at the job site.' },
    { question: 'How quickly can an HVAC company get started with Jevus?', answer: 'Most HVAC companies are live in under 5 minutes. Forward your business line to Jevus, customize your greeting and service area, and start capturing every call immediately.' },
  ],
  seo: {
    title: 'AI Receptionist for HVAC Companies | 24/7 Call Answering | Jevus AI',
    description: 'Never miss an HVAC call again. Jevus AI answers calls 24/7, handles no-heat and no-AC emergencies, books service appointments, and qualifies leads for HVAC companies.',
    keywords: 'AI receptionist for HVAC, HVAC answering service, 24/7 HVAC phone answering, HVAC AI receptionist, after hours HVAC answering service',
  },
};

export const HVACPage = () => <IndustryPage data={data} />;
