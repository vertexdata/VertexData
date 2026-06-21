import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, X } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEOHead } from './SEO';
import { faqSchema, breadcrumbSchema } from './JsonLd';
import { CalendlyButton } from './CalendlyButton';
import { CustomPricingPanel } from './CustomPricingPanel';

const comparisonRows = [
  { feature: '24/7 Availability', jevus: true, receptionist: false, answering: true },
  { feature: 'Handles Unlimited Simultaneous Calls', jevus: true, receptionist: false, answering: false },
  { feature: 'Books Appointments Directly', jevus: true, receptionist: true, answering: false },
  { feature: 'Emergency Detection & Escalation', jevus: true, receptionist: true, answering: false },
  { feature: 'CRM Integration', jevus: true, receptionist: false, answering: false },
  { feature: 'Instant Text Notifications', jevus: true, receptionist: false, answering: false },
  { feature: 'No Sick Days or Vacation', jevus: true, receptionist: false, answering: true },
  { feature: 'Consistent Quality Every Call', jevus: true, receptionist: false, answering: false },
  { feature: 'Monthly Cost', jevus: 'Custom', receptionist: '$3,500-5,000', answering: '$300-800' },
  { feature: 'Annual Cost', jevus: 'Custom', receptionist: '$47,000-62,000', answering: '$3,600-9,600' },
];

const faqs = [
  { question: 'How much does Jevus AI cost?', answer: 'Pricing is custom to your business. We build a plan around your call volume, the tools you already use, and the results you need, then put together a quote on a quick call. Every plan is designed to pay for itself with just 1-2 saved jobs per month. Book a call to get your custom quote.' },
  { question: 'Is there a free trial?', answer: 'We don\'t do a generic free trial, but during onboarding we set up a test period so you see real results on your own business calls before you fully commit. Book a call with the team to see if it\'s a fit.' },
  { question: 'Are there any contracts or commitments?', answer: 'No long-term contracts. All plans are month-to-month. You can cancel anytime. We believe if we\'re not making you money, you shouldn\'t pay us.' },
  { question: 'How does Jevus compare to hiring a receptionist?', answer: 'A full-time receptionist costs $47,000-$62,000/year plus benefits, only works 40 hours/week, calls in sick, takes vacation, and can only handle one call at a time. Jevus works 24/7, handles unlimited simultaneous calls, never misses a day, and costs a fraction of the price.' },
  { question: 'How does Jevus compare to a traditional answering service?', answer: 'Traditional answering services charge $1-2 per minute and just take messages. They don\'t book appointments, qualify leads, or integrate with your tools. Jevus does all of that at a flat monthly rate with no per-minute charges.' },
  { question: 'What\'s the ROI of using Jevus?', answer: 'The average home service business loses $45,000-$120,000/year to missed calls. Even capturing just 2-3 extra jobs per month at an average of $1,200 each more than pays for any Jevus plan. Most customers see positive ROI within the first week.' },
];

export const PricingPage: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <SEOHead
        title="AI Receptionist Pricing | AI Answering Service Cost | Jevus AI"
        description="Jevus AI pricing is custom to your business. Compare AI receptionist cost vs hiring a receptionist ($47K-$62K/year) vs traditional answering service ($300-800/month). Book a call for a custom quote."
        canonical="/pricing"
        keywords="AI receptionist pricing, AI answering service cost, virtual receptionist pricing, AI phone answering price"
        schema={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Pricing', url: '/pricing' },
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
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.95]">
                  Stop Losing <span className="text-rose-500">$3,000-$5,000</span><br />a Month to Missed Calls
                </h1>
                <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Jevus pays for itself with just 1-2 saved jobs per month. No contracts. Cancel anytime.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Custom Pricing Panel */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <CustomPricingPanel />
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                How Jevus AI compares
              </h2>
              <p className="text-gray-400 text-lg">
                See why AI beats traditional options on every metric that matters.
              </p>
            </div>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium text-sm">Feature</th>
                    <th className="text-center py-4 px-4 text-brand-blue font-bold">Jevus AI</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium text-sm">Hired Receptionist</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium text-sm">Answering Service</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-4 px-4 text-gray-300 text-sm">{row.feature}</td>
                      {[row.jevus, row.receptionist, row.answering].map((val, j) => (
                        <td key={j} className="text-center py-4 px-4">
                          {typeof val === 'boolean' ? (
                            val ? (
                              <Check size={20} className="text-emerald-400 mx-auto" />
                            ) : (
                              <X size={20} className="text-rose-400 mx-auto" />
                            )
                          ) : (
                            <span className={`text-sm font-semibold ${j === 0 ? 'text-emerald-400' : 'text-gray-400'}`}>
                              {val}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight text-center">
                Pricing FAQ
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
              One missed call costs more than a month of Jevus
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              The average missed call costs $1,200. Pricing is custom to your business — book a call for a quote.
            </p>
            <CalendlyButton className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2">
              Start Your Free Demo <ArrowRight className="w-5 h-5" />
            </CalendlyButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
