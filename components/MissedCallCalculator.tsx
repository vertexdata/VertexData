import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Phone, TrendingUp, ArrowRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEOHead } from './SEO';
import { faqSchema, breadcrumbSchema } from './JsonLd';
import { CalendlyButton } from './CalendlyButton';

export const MissedCallCalculator: React.FC = () => {
  const [callsPerMonth, setCallsPerMonth] = useState(100);
  const [avgJobValue, setAvgJobValue] = useState(1200);
  const [closeRate, setCloseRate] = useState(40);
  const [missedCallPercent, setMissedCallPercent] = useState(27);

  const missedCallsPerMonth = Math.round(callsPerMonth * (missedCallPercent / 100));
  const lostJobsPerMonth = Math.round(missedCallsPerMonth * (closeRate / 100));
  const monthlyRevenueLost = lostJobsPerMonth * avgJobValue;
  const annualRevenueLost = monthlyRevenueLost * 12;
  const recoveredWithJevus = Math.round(annualRevenueLost * 0.85);

  const faqs = [
    { question: 'How is the missed call cost calculated?', answer: 'We multiply your total monthly calls by your missed call percentage to get missed calls. Then we apply your close rate to estimate lost jobs, and multiply by your average job value. This gives a conservative estimate of monthly revenue lost to unanswered calls.' },
    { question: 'Where does the 27% missed call figure come from?', answer: 'Research from Invoca shows that 27% of calls to home service businesses go unanswered on average. Your actual rate may be higher or lower depending on staffing, call volume, and time of day.' },
    { question: 'How much can Jevus AI actually recover?', answer: 'Jevus answers every call instantly, so your missed call rate drops to near zero. We estimate 85% recovery because some callers may not be reachable on callback or may have non-service inquiries.' },
    { question: 'Is this calculator accurate?', answer: 'This calculator provides a conservative estimate based on industry averages. Your actual results will depend on your specific business, market, and call patterns. Many of our customers find their actual losses exceed the calculator estimate.' },
  ];

  return (
    <div className="bg-brand-dark min-h-screen">
      <SEOHead
        title="Missed Call Cost Calculator | How Much Do Missed Calls Cost? | Jevus AI"
        description="Calculate how much revenue your home service business loses to missed calls. Free interactive calculator for plumbers, HVAC, and electricians."
        canonical="/resources/missed-call-calculator"
        keywords="missed call cost calculator, how much do missed calls cost, missed call revenue calculator, contractor missed call cost"
        schema={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Resources', url: '/resources/missed-call-calculator' },
            { name: 'Missed Call Calculator', url: '/resources/missed-call-calculator' },
          ]),
        ]}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue text-sm font-semibold mb-6">
                  Free Tool
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[0.95]">
                  How Much Are Missed Calls<br />Costing Your Business?
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Use this calculator to see how much revenue you're leaving on the table every month.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
              {/* Inputs */}
              <div className="space-y-8">
                <h2 className="text-2xl font-black text-white tracking-tight">Your Numbers</h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    <Phone className="inline w-4 h-4 mr-2 text-brand-blue" />
                    Total calls per month: <span className="text-brand-blue">{callsPerMonth}</span>
                  </label>
                  <input
                    type="range"
                    min={10}
                    max={500}
                    value={callsPerMonth}
                    onChange={(e) => setCallsPerMonth(Number(e.target.value))}
                    className="w-full accent-brand-blue"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>10</span><span>500</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    <DollarSign className="inline w-4 h-4 mr-2 text-brand-blue" />
                    Average job value: <span className="text-brand-blue">${avgJobValue.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min={100}
                    max={5000}
                    step={50}
                    value={avgJobValue}
                    onChange={(e) => setAvgJobValue(Number(e.target.value))}
                    className="w-full accent-brand-blue"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>$100</span><span>$5,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    <TrendingUp className="inline w-4 h-4 mr-2 text-brand-blue" />
                    Close rate (% of calls that become jobs): <span className="text-brand-blue">{closeRate}%</span>
                  </label>
                  <input
                    type="range"
                    min={10}
                    max={80}
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    className="w-full accent-brand-blue"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>10%</span><span>80%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    <Calculator className="inline w-4 h-4 mr-2 text-brand-blue" />
                    Missed call rate: <span className="text-brand-blue">{missedCallPercent}%</span>
                  </label>
                  <input
                    type="range"
                    min={5}
                    max={60}
                    value={missedCallPercent}
                    onChange={(e) => setMissedCallPercent(Number(e.target.value))}
                    className="w-full accent-brand-blue"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>5%</span><span>60%</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-2xl font-black text-white tracking-tight mb-8">Your Results</h2>

                <div className="space-y-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="text-gray-500 text-sm mb-1">Missed calls per month</div>
                    <div className="text-3xl font-black text-white">{missedCallsPerMonth}</div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="text-gray-500 text-sm mb-1">Lost jobs per month</div>
                    <div className="text-3xl font-black text-white">{lostJobsPerMonth}</div>
                  </div>

                  <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-6">
                    <div className="text-rose-400 text-sm mb-1">Monthly revenue lost</div>
                    <div className="text-3xl font-black text-rose-400">${monthlyRevenueLost.toLocaleString()}</div>
                  </div>

                  <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-6">
                    <div className="text-rose-400 text-sm mb-1">Annual revenue lost</div>
                    <div className="text-4xl font-black text-rose-400">${annualRevenueLost.toLocaleString()}</div>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8">
                    <div className="text-emerald-400 text-sm mb-1">Revenue Jevus AI would recover</div>
                    <div className="text-4xl font-black text-emerald-400">${recoveredWithJevus.toLocaleString()}<span className="text-lg font-medium">/year</span></div>
                    <p className="text-emerald-400/60 text-xs mt-2">Based on 85% call recovery rate</p>
                  </div>
                </div>

                <CalendlyButton className="btn-primary w-full text-lg py-4 mt-6 flex items-center justify-center gap-2">
                  Stop Losing Money <ArrowRight className="w-5 h-5" />
                </CalendlyButton>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight text-center">
                Calculator FAQ
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="group bg-white/5 border border-white/10 rounded-2xl">
                    <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-semibold">
                      {faq.question}
                      <span className="text-gray-500 group-open:rotate-45 transition-transform text-2xl">+</span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
