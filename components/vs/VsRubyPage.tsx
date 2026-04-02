import React from 'react';
import { ComparisonPage } from '../ComparisonPage';

const data = {
  slug: 'ruby-receptionists',
  competitorName: 'Ruby Receptionists',
  headline: 'Jevus AI vs Ruby\nReceptionists for\nHome Services',
  subheadline: "Ruby uses human receptionists at premium prices. Jevus AI provides 24/7 AI answering purpose-built for contractors — at a fraction of the cost with better consistency.",
  verdict: "Ruby Receptionists is a premium human answering service with excellent brand recognition. But for home service businesses, the math doesn't work. Ruby charges $349-$1,499/month with per-minute overage fees, and their receptionists — while professional — don't understand plumbing emergencies, HVAC terminology, or how to book a job into ServiceTitan. Jevus AI costs less, works 24/7 without breaks, handles unlimited simultaneous calls, and is specifically trained on home service call flows. For contractors, Jevus delivers better results at a lower price.",
  rows: [
    { feature: 'Built for Home Services', jevus: true, competitor: false },
    { feature: '24/7/365 Availability', jevus: true, competitor: 'Limited hours' },
    { feature: 'Emergency Detection', jevus: true, competitor: false },
    { feature: 'Handles Unlimited Simultaneous Calls', jevus: true, competitor: false },
    { feature: 'ServiceTitan / CRM Integration', jevus: true, competitor: false },
    { feature: 'Trade-Specific Knowledge', jevus: true, competitor: false },
    { feature: 'Books Appointments Directly', jevus: true, competitor: true },
    { feature: 'Consistent Quality Every Call', jevus: true, competitor: false },
    { feature: 'No Per-Minute Overages', jevus: true, competitor: false },
    { feature: 'Monthly Cost', jevus: '$497-1,497', competitor: '$349-1,499 + overages' },
    { feature: 'After-Hours Coverage', jevus: 'Included', competitor: 'Extra cost' },
    { feature: 'Receptionist Type', jevus: 'AI (trade-trained)', competitor: 'Human (general)' },
  ],
  jevusPros: [
    'Purpose-built for plumbers, HVAC, electricians, and roofers',
    'True 24/7/365 coverage — no limited hours or after-hours upcharges',
    'Flat monthly pricing with no per-minute overages',
    'Handles unlimited simultaneous calls — zero hold times',
    'Emergency detection and priority escalation for trade emergencies',
    'Native ServiceTitan, Housecall Pro, and Jobber integration',
    'Perfectly consistent quality on every single call',
  ],
  competitorPros: [
    'Human receptionists provide a personal touch',
    'Well-established brand with high customer satisfaction',
    'Good for professional services (law, finance, consulting)',
  ],
  competitorCons: [
    'Expensive — $349-1,499/month plus per-minute overages that add up fast',
    'Not available 24/7 — after-hours costs extra',
    'Receptionists don\'t understand trade terminology or job types',
    'Can only handle one call at a time — others go on hold',
    'No emergency detection for plumbing, HVAC, or electrical urgencies',
    'No native integration with field service management software',
    'Quality varies by receptionist — no consistency guarantee',
    'Human receptionists take breaks, sick days, and vacations',
  ],
  faqs: [
    { question: 'Is Ruby Receptionists good for contractors?', answer: "Ruby is a premium service but it's not optimized for contractors. Their receptionists are trained for professional services like law firms. They don't understand plumbing emergencies, can't book into ServiceTitan, and charge per-minute overages that get expensive with high call volume." },
    { question: 'How much more expensive is Ruby vs Jevus?', answer: "Ruby's base plans start at $349/month but charge per-minute overages. A busy contractor can easily hit $800-1,500+/month. Ruby also charges extra for after-hours coverage. Jevus is a flat rate with 24/7 coverage and unlimited calls included." },
    { question: 'Does Ruby offer 24/7 service?', answer: "Ruby's base plans cover business hours only. After-hours coverage costs extra and is limited. Jevus includes full 24/7/365 coverage in every plan — critical for contractors who receive emergency calls at nights and on weekends." },
    { question: 'Can I switch from Ruby to Jevus?', answer: 'Yes. Most contractors switch in under 5 minutes by redirecting call forwarding. Many report saving $200-500/month while getting better emergency handling and CRM integration.' },
  ],
  seo: {
    title: 'Jevus AI vs Ruby Receptionists for Contractors | Comparison | Jevus AI',
    description: 'Compare Jevus AI vs Ruby Receptionists for home service businesses. Save money with 24/7 AI answering that understands plumbing, HVAC, and electrical emergencies.',
    keywords: 'Jevus vs Ruby Receptionists, Ruby Receptionists alternative, Ruby vs AI receptionist, Ruby Receptionists for contractors',
  },
};

export const VsRubyPage = () => <ComparisonPage data={data} />;
