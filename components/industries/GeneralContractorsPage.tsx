import React from 'react';
import { IndustryPage } from '../IndustryPage';

const data = {
  slug: 'general-contractors',
  name: 'General Contractors',
  headline: "You're Managing\na Job Site.\nWho's Managing\nYour Calls?",
  subheadline: 'Jevus AI answers every call for general contractors — qualifying project leads, scheduling estimates, and handling client communication while you run the job.',
  painPoints: [
    "You're coordinating subs on a job site and can't answer the phone for hours at a time.",
    "High-value renovation and remodel leads call once for an estimate — they won't wait for a callback.",
    "Existing clients call with questions and updates that pile up in voicemail all day.",
    "Referral calls from realtors and past clients get lost in the shuffle during busy seasons.",
  ],
  stats: [
    { value: '$15,000+', label: 'Average Project Value', description: 'Revenue at stake when a GC lead goes to voicemail' },
    { value: '27%', label: 'Calls Go Unanswered', description: 'Nearly 1 in 3 calls missed while on job sites' },
    { value: '$200K+', label: 'Annual Revenue at Risk', description: 'Potential revenue lost to missed calls per year' },
  ],
  features: [
    { icon: 'calendar', title: 'Estimate Scheduling', description: 'Books renovation consultations and project estimates with scope details, timeline, and budget range.' },
    { icon: 'dollar', title: 'Project Qualification', description: 'Separates high-value remodels and additions from small handyman jobs. Prioritizes by project size.' },
    { icon: 'clock', title: 'Always Available', description: 'While you\'re on a job site from 6 AM to 6 PM, Jevus handles every incoming call professionally.' },
    { icon: 'message', title: 'Client Communication', description: 'Takes messages from existing clients about project questions, schedule changes, and updates.' },
    { icon: 'shield', title: 'Referral Capture', description: 'Captures referral source information (realtor, past client, etc.) so you can track your best lead channels.' },
    { icon: 'phone', title: 'Sub & Vendor Routing', description: 'Routes calls from subs and suppliers differently than new client calls based on your rules.' },
  ],
  exampleTranscript: [
    { speaker: 'Jevus AI', text: "Thank you for calling Bayside Construction, this is Jevus, your virtual assistant. How can I help you today?" },
    { speaker: 'Customer', text: "Hi, I'm looking to do a full kitchen remodel and my realtor recommended you. Can I get an estimate?" },
    { speaker: 'Jevus AI', text: "Thank you for reaching out — we'd love to help with your kitchen remodel. Which realtor referred you, if you don't mind my asking?" },
    { speaker: 'Customer', text: "Sarah Chen from Keller Williams." },
    { speaker: 'Jevus AI', text: "Great, I'll note that. Can I get your name, address, and a rough idea of what you're looking for? Are we talking a full gut renovation or more of an update to cabinets and countertops?" },
    { speaker: 'Customer', text: "Karen Young, 4415 Bay Shore. Full gut — new cabinets, countertops, appliances, flooring, the works." },
    { speaker: 'Jevus AI', text: "That sounds like a great project. Do you have a rough budget range in mind? And when are you hoping to start?" },
    { speaker: 'Customer', text: "We're thinking $50-60K and hoping to start in about 6 weeks." },
    { speaker: 'Jevus AI', text: "Perfect — I've captured all of that. I'll schedule an on-site consultation so our team can walk the space and put together a detailed proposal. You'll hear from us within 24 hours to confirm. Is there anything else?" },
  ],
  faqs: [
    { question: 'Can Jevus handle both new leads and existing client calls?', answer: 'Yes. Jevus can distinguish between new project inquiries and calls from existing clients. New leads get qualified and booked for estimates. Existing client calls get detailed messages forwarded to you or your project manager.' },
    { question: 'How does Jevus qualify high-value leads?', answer: 'Jevus asks about project type, scope, budget range, timeline, and referral source. This helps you prioritize your callback list — a $60K kitchen remodel gets flagged differently than a $500 drywall patch.' },
    { question: 'Can Jevus track referral sources?', answer: 'Yes. Jevus asks new callers how they heard about you and captures the referral source — realtor name, past client, Google, etc. This helps you understand which channels drive your best leads.' },
    { question: 'Does this work for commercial general contractors?', answer: 'Yes. Jevus works for both residential and commercial GCs. For commercial calls, it can collect property type, square footage, project scope, and decision-maker contact information.' },
  ],
  seo: {
    title: 'AI Answering Service for General Contractors | Jevus AI',
    description: 'AI voice receptionist for general contractors. Qualify renovation leads, schedule estimates, and manage client calls 24/7 while you run the job site.',
    keywords: 'general contractor answering service, AI receptionist contractor, GC phone answering, contractor answering service, remodel lead answering',
  },
};

export const GeneralContractorsPage = () => <IndustryPage data={data} />;
