import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, DollarSign, Shield, Calendar, Bell, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEOHead } from './SEO';
import { faqSchema, breadcrumbSchema } from './JsonLd';
import { CalendlyButton } from './CalendlyButton';

interface IndustryData {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  painPoints: string[];
  stats: { label: string; value: string; description: string }[];
  features: { icon: string; title: string; description: string }[];
  exampleTranscript: { speaker: string; text: string }[];
  faqs: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

const iconMap: Record<string, React.ReactNode> = {
  phone: <Phone className="w-6 h-6" />,
  clock: <Clock className="w-6 h-6" />,
  dollar: <DollarSign className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  calendar: <Calendar className="w-6 h-6" />,
  bell: <Bell className="w-6 h-6" />,
  check: <CheckCircle2 className="w-6 h-6" />,
  message: <MessageSquare className="w-6 h-6" />,
};

export const IndustryPage: React.FC<{ data: IndustryData }> = ({ data }) => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <SEOHead
        title={data.seo.title}
        description={data.seo.description}
        canonical={`/industries/${data.slug}`}
        keywords={data.seo.keywords}
        schema={[
          faqSchema(data.faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Industries', url: '/industries/plumbers' },
            { name: data.name, url: `/industries/${data.slug}` },
          ]),
        ]}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue text-sm font-semibold mb-6">
                  Built for {data.name}
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.95]">
                  {data.headline}
                </h1>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                  {data.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CalendlyButton className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
                    Book a Demo <ArrowRight className="w-5 h-5" />
                  </CalendlyButton>
                  <a href="tel:+156733JEVUS" className="btn-secondary text-lg px-8 py-4 flex items-center gap-2 justify-center">
                    <Phone className="w-5 h-5" /> Call Us Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight">
              Sound familiar?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-rose-500/5 border border-rose-500/10 rounded-2xl p-6"
                >
                  <span className="text-rose-400 mt-1 shrink-0">&#x2717;</span>
                  <p className="text-gray-300">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight">
              The numbers don't lie
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
                >
                  <div className="text-4xl md:text-5xl font-black text-brand-blue mb-2">{stat.value}</div>
                  <div className="text-white font-bold mb-2">{stat.label}</div>
                  <div className="text-gray-500 text-sm">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Jevus Helps */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              How Jevus AI helps {data.name.toLowerCase()}
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl">
              Every feature built specifically for {data.name.toLowerCase()} who can't afford to miss a single call.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                  <div className="w-12 h-12 bg-brand-blue/10 border border-brand-blue/20 rounded-xl flex items-center justify-center text-brand-blue mb-4">
                    {iconMap[feature.icon] || <Phone className="w-6 h-6" />}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Example Call Transcript */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight text-center">
                See how Jevus handles a real call
              </h2>
              <p className="text-gray-400 text-center mb-12">
                Here's an example of Jevus AI answering a call for a {data.name.toLowerCase().replace(/s$/, '')} business.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
                {data.exampleTranscript.map((line, i) => (
                  <div key={i} className={`flex gap-4 ${line.speaker === 'Jevus AI' ? '' : 'flex-row-reverse'}`}>
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                      line.speaker === 'Jevus AI' ? 'bg-brand-blue/20 text-brand-blue' : 'bg-emerald-500/20 text-emerald-400'
                    }`}>
                      {line.speaker === 'Jevus AI' ? 'AI' : 'C'}
                    </div>
                    <div className={`flex-1 ${line.speaker === 'Jevus AI' ? '' : 'text-right'}`}>
                      <div className="text-xs text-gray-500 mb-1">{line.speaker}</div>
                      <div className={`inline-block rounded-2xl px-4 py-3 text-sm ${
                        line.speaker === 'Jevus AI' ? 'bg-brand-blue/10 text-gray-300' : 'bg-emerald-500/10 text-gray-300'
                      }`}>
                        {line.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                {data.faqs.map((faq, i) => (
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
              Stop losing calls. Start growing.
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Join {data.name.toLowerCase()} who never miss another customer call with Jevus AI.
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
