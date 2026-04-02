import React from 'react';
import { IndustryPage } from '../IndustryPage';

const data = {
  slug: 'landscaping',
  name: 'Landscaping Companies',
  headline: "You're Mowing.\nThey're Calling.\nWho's Booking the Job?",
  subheadline: 'Jevus AI answers every landscaping call 24/7 — booking lawn care, hardscaping estimates, and irrigation jobs while your crew is in the field.',
  painPoints: [
    "You can't hear your phone over the mower — and by the time you check, you've missed 5 calls.",
    "Spring rush means everyone wants their lawn done yesterday, but you're too busy to answer the phone.",
    "High-value hardscaping and irrigation leads call once — they won't leave a message for a landscape estimate.",
    "Weekend calls from homeowners who are actually home go straight to voicemail.",
  ],
  stats: [
    { value: '$350', label: 'Average Lawn Care Lead', description: 'Recurring monthly revenue lost per missed lawn care call' },
    { value: '$5,000+', label: 'Average Hardscaping Job', description: 'Revenue at stake when a hardscaping lead goes unanswered' },
    { value: '40%', label: 'Calls During Field Hours', description: 'Percentage of calls that come when your team is on jobs' },
  ],
  features: [
    { icon: 'calendar', title: 'Estimate Scheduling', description: 'Books lawn care consultations, hardscaping estimates, and irrigation assessments with property details.' },
    { icon: 'dollar', title: 'Service Qualification', description: 'Distinguishes between one-time cleanups, recurring maintenance, and high-value design/build projects.' },
    { icon: 'clock', title: 'Spring Rush Coverage', description: 'When call volume triples in spring, Jevus handles unlimited calls simultaneously — no missed leads.' },
    { icon: 'message', title: 'Crew Notifications', description: 'Text your office manager or crew leaders with new lead details between jobs.' },
    { icon: 'shield', title: 'Recurring Revenue Capture', description: 'Identifies callers interested in weekly or bi-weekly maintenance — your most profitable contracts.' },
    { icon: 'phone', title: 'Property Details', description: 'Collects lot size, service type, and specific requests so you can prepare accurate estimates.' },
  ],
  exampleTranscript: [
    { speaker: 'Jevus AI', text: "Thank you for calling Green Horizons Landscaping, this is Jevus, your virtual assistant. How can I help you today?" },
    { speaker: 'Customer', text: "Hi, I just moved into a new house and the yard is a mess. I need someone to clean it up and then maybe do weekly maintenance." },
    { speaker: 'Jevus AI', text: "Welcome to the neighborhood! We'd love to help get your yard in shape. Can I get your name and address so we can schedule a free consultation?" },
    { speaker: 'Customer', text: "Sure, it's Mark Davis, 7712 Palmetto Street." },
    { speaker: 'Jevus AI', text: "Thank you, Mark. Do you have a rough idea of your lot size? And are you looking for just lawn maintenance, or are you also interested in any landscaping design, irrigation, or hardscaping?" },
    { speaker: 'Customer', text: "It's about a quarter acre. Mainly lawn care for now, but I might want some new plants and maybe a patio area eventually." },
    { speaker: 'Jevus AI', text: "Great — I've noted all of that. I'll schedule a consultation where we can walk the property and discuss options. You'll hear from us within 24 hours to confirm the time. Is there anything else?" },
  ],
  faqs: [
    { question: 'Can Jevus capture recurring lawn care customers?', answer: 'Yes. Jevus identifies callers interested in weekly or bi-weekly maintenance and notes this as a recurring revenue opportunity. These are your most valuable leads — customers worth $200-400/month over years.' },
    { question: 'How does Jevus handle high-value hardscaping leads?', answer: 'Jevus qualifies hardscaping and design/build leads by collecting property details, project scope, and timeline. These high-value leads ($5,000+) get flagged as priority so you can follow up first.' },
    { question: 'Can Jevus work when my crew is in the field all day?', answer: 'That\'s exactly when Jevus shines. While your team is mowing, trimming, and planting, Jevus handles every incoming call and sends text summaries your crew can review between jobs.' },
    { question: 'Does Jevus work during spring rush?', answer: 'Yes — and this is when it\'s most valuable. Jevus handles unlimited simultaneous calls, so when spring hits and everyone wants their lawn done, you capture every single lead instead of losing them to voicemail.' },
  ],
  seo: {
    title: 'AI Answering Service for Landscaping Companies | Jevus AI',
    description: 'AI voice receptionist for landscapers. Book lawn care, hardscaping estimates, and irrigation jobs 24/7 while your crew is in the field.',
    keywords: 'landscaping answering service, AI receptionist landscaping, lawn care phone answering, landscaper answering service',
  },
};

export const LandscapingPage = () => <IndustryPage data={data} />;
