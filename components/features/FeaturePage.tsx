import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { SEOHead } from '../SEO';
import { faqSchema, breadcrumbSchema } from '../JsonLd';
import { CalendlyButton } from '../CalendlyButton';

export interface FeatureData {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  heroIcon: string;
  problem: { title: string; points: string[] };
  solution: { title: string; points: string[] };
  howItWorks: { step: string; description: string }[];
  benefits: { title: string; description: string }[];
  stats: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
  seo: { title: string; description: string; keywords: string };
}

export const FeaturePage: React.FC<{ data: FeatureData }> = ({ data }) => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <SEOHead
        title={data.seo.title}
        description={data.seo.description}
        canonical={`/features/${data.slug}`}
        keywords={data.seo.keywords}
        schema={[
          faqSchema(data.faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Features', url: `/features/${data.slug}` },
            { name: data.name, url: `/features/${data.slug}` },
          ]),
        ]}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[50%] bg-brand-blue/10 rounded-full blur-[150px] -z-10"></div>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="text-5xl mb-6 block">{data.heroIcon}</span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.95]">
                  {data.headline}
                </h1>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                  {data.subheadline}
                </p>
                <CalendlyButton className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
                  See It In Action <ArrowRight className="w-5 h-5" />
                </CalendlyButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 border-t border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {data.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-brand-blue mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem / Solution */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tight">{data.problem.title}</h2>
                <div className="space-y-4">
                  {data.problem.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 bg-rose-500/5 border border-rose-500/10 rounded-xl p-4">
                      <span className="text-rose-400 mt-0.5 shrink-0">&#x2717;</span>
                      <p className="text-gray-400 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tight">{data.solution.title}</h2>
                <div className="space-y-4">
                  {data.solution.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4">
                      <CheckCircle2 className="text-emerald-400 mt-0.5 shrink-0 w-5 h-5" />
                      <p className="text-gray-400 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 border-t border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight text-center">How it works</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {data.howItWorks.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue font-black text-sm shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{step.step}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight text-center">Why contractors love this</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {data.benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                  <h3 className="text-white font-bold text-lg mb-3">{b.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{b.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-black text-white mb-12 tracking-tight text-center">FAQ</h2>
              <div className="space-y-4">
                {data.faqs.map((faq, i) => (
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

        {/* CTA */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Ready to automate your front office?
            </h2>
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
