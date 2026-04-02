import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEOHead } from './SEO';
import { faqSchema, breadcrumbSchema } from './JsonLd';
import { CalendlyButton } from './CalendlyButton';

interface UseCaseData {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  problem: { title: string; points: string[] };
  solution: { title: string; points: string[] };
  benefits: { title: string; description: string }[];
  stats: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
  seo: { title: string; description: string; keywords: string };
}

export const UseCasePage: React.FC<{ data: UseCaseData }> = ({ data }) => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <SEOHead
        title={data.seo.title}
        description={data.seo.description}
        canonical={`/use-cases/${data.slug}`}
        keywords={data.seo.keywords}
        schema={[
          faqSchema(data.faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Use Cases', url: `/use-cases/${data.slug}` },
            { name: data.name, url: `/use-cases/${data.slug}` },
          ]),
        ]}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue text-sm font-semibold mb-6">
                  Use Case
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.95]">
                  {data.headline}
                </h1>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
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
              {/* Problem */}
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tight">
                  {data.problem.title}
                </h2>
                <div className="space-y-4">
                  {data.problem.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 bg-rose-500/5 border border-rose-500/10 rounded-xl p-4">
                      <span className="text-rose-400 mt-0.5 shrink-0">&#x2717;</span>
                      <p className="text-gray-400 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Solution */}
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tight">
                  {data.solution.title}
                </h2>
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

        {/* Benefits */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight text-center">
              Why businesses choose Jevus
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {data.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                  <h3 className="text-white font-bold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
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
              Ready to capture every call?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Set up in 5 minutes. See results from day one.
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
