import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2, Calendar, ArrowRight, Zap, MessageSquare, Bell, Settings, Shield, BarChart3 } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEOHead } from './SEO';
import { howToSchema, faqSchema, breadcrumbSchema } from './JsonLd';
import { CalendlyButton } from './CalendlyButton';

const steps = [
  {
    number: '01',
    icon: <Phone size={32} className="text-brand-blue" />,
    title: 'A Customer Calls Your Business',
    description: "Whether it's 2 PM or 2 AM, when someone calls your business line, Jevus AI picks up instantly. No rings, no voicemail, no missed opportunities. Your phone rings first — if you don't answer within a few rings, Jevus takes over seamlessly.",
    detail: 'Works with your existing phone number. Simply set up call forwarding — no hardware or apps to install.',
  },
  {
    number: '02',
    icon: <CheckCircle2 size={32} className="text-brand-violet" />,
    title: 'Jevus Has a Natural Conversation',
    description: "Jevus doesn't sound like a robot or a phone tree. It has a natural, empathetic conversation with your caller — understanding their problem, collecting their information, and making them feel heard.",
    detail: 'Collects name, address, phone number, issue description, and urgency level — exactly what you need to dispatch a job.',
  },
  {
    number: '03',
    icon: <Calendar size={32} className="text-emerald-500" />,
    title: 'Job Gets Booked & You Get Notified',
    description: 'Jevus books the appointment directly into your calendar, creates a job in your CRM, and sends you an instant text and email summary with all the details. You wake up to a booked job instead of a missed call.',
    detail: 'Integrates with Google Calendar, ServiceTitan, Housecall Pro, Jobber, and more.',
  },
];

const capabilities = [
  { icon: <Zap size={24} />, title: 'Instant Pickup', description: 'Answers in under 1 second. No caller ever hears a ring go to voicemail.' },
  { icon: <MessageSquare size={24} />, title: 'Natural Conversation', description: 'Advanced AI that understands context, handles interruptions, and sounds completely human.' },
  { icon: <Bell size={24} />, title: 'Emergency Detection', description: 'Recognizes urgent situations and escalates immediately with priority alerts.' },
  { icon: <Calendar size={24} />, title: 'Appointment Booking', description: 'Books directly into your calendar with job type, address, and customer details.' },
  { icon: <Settings size={24} />, title: 'CRM Integration', description: 'Syncs with ServiceTitan, Housecall Pro, Jobber, and 50+ other tools via Zapier.' },
  { icon: <Shield size={24} />, title: 'Custom Business Rules', description: 'Set your service area, hours, job types, and qualification questions.' },
  { icon: <BarChart3 size={24} />, title: 'Call Analytics', description: 'Track every call with full transcripts, recordings, and conversion metrics.' },
  { icon: <Phone size={24} />, title: 'Live Transfer', description: 'Transfer calls to you or your team when needed — you set the rules.' },
];

const faqs = [
  { question: 'How long does setup take?', answer: 'Most businesses are live in under 5 minutes. You set up call forwarding from your existing business line to Jevus, customize your greeting and business rules, and start capturing calls immediately. No hardware, no apps, no IT required.' },
  { question: 'Does Jevus work with my existing phone number?', answer: 'Yes. You keep your existing business phone number. Simply set up conditional call forwarding (when busy, unanswered, or after hours) to your Jevus number. Your callers will never know the difference.' },
  { question: 'How does Jevus know about my business?', answer: 'During onboarding, you tell Jevus about your services, service area, hours, pricing ranges, and how you want calls handled. Jevus uses this to have informed conversations with your callers and qualify leads according to your criteria.' },
  { question: 'Can Jevus handle multiple calls at once?', answer: 'Yes. Unlike a human receptionist, Jevus can handle unlimited simultaneous calls. During peak periods when your phone is ringing off the hook, every single caller gets an immediate, professional response.' },
  { question: 'What if the caller needs to speak to a real person?', answer: 'Jevus can transfer calls to you or your team at any time. You define the rules — for example, always transfer for gas leaks, transfer during business hours but take messages after hours, or transfer VIP clients.' },
];

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <SEOHead
        title="How AI Receptionist Works | AI Phone Answering Setup | Jevus AI"
        description="See how Jevus AI answers your business calls in 3 simple steps. Set up in 5 minutes — no hardware, no apps. AI voice receptionist that books appointments and qualifies leads."
        canonical="/how-it-works"
        keywords="how AI receptionist works, AI phone answering setup, AI answering service how it works, virtual receptionist setup"
        schema={[
          howToSchema(
            'How to Set Up Jevus AI Voice Receptionist',
            'Set up 24/7 AI phone answering for your home service business in under 5 minutes.',
            [
              { name: 'Forward your business line', text: 'Set up call forwarding from your existing business phone number to your dedicated Jevus AI number. This takes about 2 minutes and works with any phone provider.' },
              { name: 'Customize your AI receptionist', text: 'Tell Jevus about your business — services offered, service area, hours, and how you want calls handled. Customize your greeting and qualification questions.' },
              { name: 'Start capturing every call', text: 'Jevus answers every call instantly, qualifies leads, books appointments into your calendar, and sends you real-time notifications. You never miss another customer.' },
            ]
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'How It Works', url: '/how-it-works' },
          ]),
        ]}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue text-sm font-semibold mb-6">
                  Live in 5 minutes
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.95]">
                  How Jevus AI<br />Answers Your Calls
                </h1>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Three simple steps between you and never missing another customer call. No hardware. No apps. No IT department required.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-16">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col md:flex-row gap-8 items-start"
                >
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-brand-blue font-mono text-sm mb-2">Step {step.number}</div>
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">{step.title}</h2>
                    <p className="text-gray-400 leading-relaxed mb-4">{step.description}</p>
                    <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-500">
                      {step.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Diagram */}
        <section className="py-20 border-t border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                Fits into your existing workflow
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Jevus connects your phone line to your calendar, CRM, and team notifications — no changes to how you work.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {['Your Phone Line', 'Jevus AI', 'Your Calendar & CRM'].map((label, i) => (
                  <React.Fragment key={i}>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center flex-1 w-full">
                      <div className="text-white font-bold mb-1">{label}</div>
                      <div className="text-gray-500 text-xs">
                        {i === 0 && 'Calls forwarded automatically'}
                        {i === 1 && 'Answers, qualifies, books'}
                        {i === 2 && 'Jobs appear instantly'}
                      </div>
                    </div>
                    {i < 2 && (
                      <ArrowRight className="text-brand-blue shrink-0 rotate-90 md:rotate-0" size={24} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                Everything your AI receptionist can do
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <div className="w-10 h-10 bg-brand-blue/10 border border-brand-blue/20 rounded-xl flex items-center justify-center text-brand-blue mb-4">
                    {cap.icon}
                  </div>
                  <h3 className="text-white font-bold mb-2">{cap.title}</h3>
                  <p className="text-gray-500 text-sm">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight text-center">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-white/5 border border-white/10 rounded-2xl">
                    <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-semibold">
                      {faq.question}
                      <span className="text-gray-500 group-open:rotate-45 transition-transform text-2xl">+</span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Ready to never miss a call again?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Set up in 5 minutes. No contracts. Cancel anytime.
            </p>
            <CalendlyButton className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2">
              Get Started Free <ArrowRight className="w-5 h-5" />
            </CalendlyButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
