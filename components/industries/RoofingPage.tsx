import React from 'react';
import { IndustryPage } from '../IndustryPage';

const data = {
  slug: 'roofing',
  name: 'Roofers',
  headline: "A Storm Just Hit.\nHomeowners Are Calling.\nAre You Answering?",
  subheadline: 'Jevus AI answers every roofing call 24/7 — handling storm damage inquiries, scheduling inspections, and qualifying leads while your crew is on the roof.',
  painPoints: [
    "After a big storm, your phone rings 50 times in a day — but you're on a roof and can't pick up.",
    "Insurance restoration leads call once. If you don't answer, they move to the next contractor on Google.",
    "You lose weekend inspection requests because nobody answers on Saturdays.",
    "By the time you call back storm damage leads, they've already signed with a door-knocker.",
  ],
  stats: [
    { value: '$8,500', label: 'Average Roof Replacement Value', description: 'Revenue at stake when a roofing lead goes to voicemail' },
    { value: '50+', label: 'Calls After a Major Storm', description: 'Call volume spike in the 48 hours after severe weather' },
    { value: '$180K+', label: 'Annual Revenue at Risk', description: 'What a roofing company loses to missed calls per year' },
  ],
  features: [
    { icon: 'bell', title: 'Storm Surge Handling', description: 'When call volume spikes after severe weather, Jevus handles unlimited simultaneous calls — no busy signals, no voicemail.' },
    { icon: 'calendar', title: 'Inspection Scheduling', description: 'Books roof inspection appointments directly into your calendar with address, damage description, and insurance info.' },
    { icon: 'clock', title: '24/7 Storm Response', description: 'Storms don\'t wait for business hours. Jevus answers every call, day or night, during severe weather events.' },
    { icon: 'dollar', title: 'Insurance Lead Qualification', description: 'Asks about insurance carrier, claim status, and damage type to prioritize high-value restoration leads.' },
    { icon: 'message', title: 'Priority Notifications', description: 'Get instant texts with lead details sorted by job value — insurance claims flagged as priority.' },
    { icon: 'shield', title: 'Professional First Impression', description: 'Every caller gets a professional response that builds trust — critical for homeowners making a $10K+ decision.' },
  ],
  exampleTranscript: [
    { speaker: 'Jevus AI', text: "Thank you for calling Elite Roofing, this is Jevus, your virtual assistant. How can I help you today?" },
    { speaker: 'Customer', text: "Hi, we had that big storm last night and I think we have some damage to our roof. There are shingles in the yard." },
    { speaker: 'Jevus AI', text: "I'm sorry to hear about the storm damage. We've been getting a lot of calls today and want to make sure we get to you quickly. Can I get your name and address to schedule a free inspection?" },
    { speaker: 'Customer', text: "Sure, it's Robert Martinez, 5510 Bay Shore Drive." },
    { speaker: 'Jevus AI', text: "Thank you, Robert. Have you filed an insurance claim yet, or would you like us to help you through that process?" },
    { speaker: 'Customer', text: "I haven't yet, I wasn't sure if I should call them first or get an inspection first." },
    { speaker: 'Jevus AI', text: "Great question — we typically recommend getting our inspection first so we can document the damage for your claim. I've scheduled you for a free inspection. Our team will reach out to confirm the exact time. Is there anything else I can help with?" },
  ],
  faqs: [
    { question: 'How does Jevus handle high call volume after storms?', answer: 'Unlike a human receptionist who can only take one call at a time, Jevus handles unlimited simultaneous calls. After a major storm when your phone is ringing every 30 seconds, every single caller gets an immediate professional response.' },
    { question: 'Can Jevus qualify insurance restoration leads?', answer: 'Yes. Jevus asks about insurance carrier, whether a claim has been filed, damage type, and timeline. This helps you prioritize high-value insurance restoration jobs over smaller repair requests.' },
    { question: 'Does Jevus work for both residential and commercial roofing?', answer: 'Yes. Jevus handles calls for residential re-roofs, commercial flat roof repairs, storm damage inspections, and maintenance contracts. You configure the types of jobs you want to capture.' },
    { question: 'How fast can a roofing company get set up?', answer: 'Most roofing companies are live in under 5 minutes — critical when storm season hits and you need to capture every lead immediately.' },
  ],
  seo: {
    title: 'AI Answering Service for Roofing Companies | Storm Call Handling | Jevus AI',
    description: 'AI voice receptionist for roofers. Handle storm surge call volume, qualify insurance leads, and schedule inspections 24/7. Never miss a roofing lead again.',
    keywords: 'AI answering service roofers, roofing company answering service, storm damage call handling, roofing AI receptionist',
  },
};

export const RoofingPage = () => <IndustryPage data={data} />;
