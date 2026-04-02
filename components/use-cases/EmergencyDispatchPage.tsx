import React from 'react';
import { UseCasePage } from '../UseCasePage';

const data = {
  slug: 'emergency-dispatch',
  name: 'Emergency Dispatch',
  headline: "A Pipe Burst.\nA Furnace Died.\nJevus Dispatches\nYour Tech.",
  subheadline: 'Jevus AI detects emergencies, collects critical details, and dispatches your on-call technician — all in one call, before the customer has time to panic.',
  stats: [
    { value: '70%', label: 'of emergency calls come after hours' },
    { value: '<5s', label: 'Jevus pickup time' },
    { value: '$1,500+', label: 'average emergency job value' },
    { value: '15 min', label: 'target tech callback time' },
  ],
  problem: {
    title: 'Emergency calls need instant action',
    points: [
      'A burst pipe is flooding a basement — every minute without response costs the homeowner thousands in water damage.',
      'No-heat emergencies in winter are life-threatening for elderly residents. Voicemail isn\'t acceptable.',
      'Electrical emergencies (burning smells, sparking) are fire hazards that need immediate professional guidance.',
      'Traditional answering services take a message and email it — by the time you see it, the damage is done.',
      'Your on-call tech never gets the details they need — they call the customer back just to ask the same questions.',
    ],
  },
  solution: {
    title: 'AI-powered emergency dispatch',
    points: [
      'Jevus detects emergency keywords instantly — burst pipe, flooding, no heat, burning smell, gas leak.',
      'Collects critical details: address, nature of emergency, safety situation, and access information.',
      'Provides callers with immediate safety guidance (shut off water, turn off breaker, evacuate).',
      'Sends priority alert to your on-call tech with full details via text and call.',
      'Confirms with the caller that a tech has been notified and will respond within your target time.',
    ],
  },
  benefits: [
    { title: 'Instant Emergency Detection', description: 'AI recognizes 50+ emergency trigger phrases across plumbing, HVAC, and electrical — and escalates in real-time.' },
    { title: 'Safety-First Responses', description: 'Jevus provides appropriate safety guidance during emergencies — building trust and potentially preventing further damage.' },
    { title: 'Complete Job Details', description: 'Your tech gets everything they need before calling back: address, emergency type, severity, and safety status.' },
    { title: 'Configurable Escalation', description: 'Set different rules for different emergency types. Gas leaks escalate differently than a leaky faucet.' },
    { title: 'After-Hours Coverage', description: '70% of emergencies happen after hours. Jevus is always on, so your emergency line never goes to voicemail.' },
    { title: 'Customer Confidence', description: 'A panicked homeowner gets an immediate, calm, professional response — not a recording asking them to leave a message.' },
  ],
  faqs: [
    { question: 'What types of emergencies does Jevus detect?', answer: 'Jevus detects plumbing emergencies (burst pipes, flooding, sewage backup, gas leaks), HVAC emergencies (no heat, no AC, carbon monoxide), electrical emergencies (burning smell, sparking outlets, power outage, exposed wires), and more. You can also add custom emergency triggers.' },
    { question: 'How does Jevus notify my on-call tech?', answer: 'Jevus sends a priority text message with full emergency details (address, type, severity, customer name/phone). You can also configure it to call your tech directly for the most critical emergencies.' },
    { question: 'Can Jevus provide safety advice to callers?', answer: 'Yes. Jevus provides appropriate safety guidance — like telling a caller to shut off their main water valve during a flood, or to evacuate if they smell gas. This builds trust and can prevent further damage.' },
    { question: 'Can I set different escalation rules for different emergencies?', answer: 'Yes. You configure escalation tiers. For example: gas leaks and flooding trigger an immediate call to your tech, while a running toilet gets a standard text notification. You set the rules.' },
  ],
  seo: {
    title: 'AI Emergency Dispatch for Home Services | Jevus AI',
    description: 'AI-powered emergency dispatch for plumbers, HVAC, and electricians. Detect emergencies, collect details, and dispatch technicians instantly — 24/7.',
    keywords: 'emergency dispatch AI, plumber emergency dispatch, HVAC emergency answering, electrical emergency dispatch service',
  },
};

export const EmergencyDispatchPage = () => <UseCasePage data={data} />;
