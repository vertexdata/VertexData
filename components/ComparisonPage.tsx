import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEOHead } from './SEO';
import { faqSchema, breadcrumbSchema } from './JsonLd';
import { CalendlyButton } from './CalendlyButton';

interface ComparisonRow {
  feature: string;
  jevus: string | boolean;
  competitor: string | boolean;
}

interface ComparisonData {
  slug: string;
  competitorName: string;
  headline: string;
  subheadline: string;
  verdict: string;
  rows: ComparisonRow[];
  jevusPros: string[];
  competitorPros: string[];
  competitorCons: string[];
  faqs: { question: string; answer: string }[];
  seo: { title: string; description: string; keywords: string };
}

const CellValue: React.FC<{ value: string | boolean }> = ({ value }) => {
  if (typeof value === 'boolean') {
    return value ? (
      <Check size={20} className="text-emerald-400 mx-auto" />
    ) : (
      <X size={20} className="text-rose-400 mx-auto" />
    );
  }
  return <span className="text-sm">{value}</span>;
};

export const ComparisonPage: React.FC<{ data: ComparisonData }> = ({ data }) => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <SEOHead
        title={data.seo.title}
        description={data.seo.description}
        canonical={`/vs/${data.slug}`}
        keywords={data.seo.keywords}
        schema={[
          faqSchema(data.faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Comparisons', url: `/vs/${data.slug}` },
            { name: `Jevus vs ${data.competitorName}`, url: `/vs/${data.slug}` },
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
                  Comparison
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[0.95]">
                  {data.headline}
                </h1>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                  {data.subheadline}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium text-sm w-1/2">Feature</th>
                    <th className="text-center py-4 px-4 text-brand-blue font-bold w-1/4">Jevus AI</th>
                    <th className="text-center py-4 px-4 text-gray-400 font-medium text-sm w-1/4">{data.competitorName}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.rows.map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-4 px-4 text-gray-300 text-sm">{row.feature}</td>
                      <td className="text-center py-4 px-4"><CellValue value={row.jevus} /></td>
                      <td className="text-center py-4 px-4"><CellValue value={row.competitor} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="py-20 border-t border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">The Bottom Line</h2>
              <p className="text-gray-400 text-lg leading-relaxed">{data.verdict}</p>
            </div>
          </div>
        </section>

        {/* Pros/Cons */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h3 className="text-2xl font-black text-white mb-6">Why choose Jevus AI</h3>
                <div className="space-y-3">
                  {data.jevusPros.map((pro, i) => (
                    <div key={i} className="flex items-start gap-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4">
                      <Check className="text-emerald-400 mt-0.5 shrink-0 w-5 h-5" />
                      <p className="text-gray-300 text-sm">{pro}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-6">Limitations of {data.competitorName}</h3>
                <div className="space-y-3">
                  {data.competitorCons.map((con, i) => (
                    <div key={i} className="flex items-start gap-3 bg-rose-500/5 border border-rose-500/10 rounded-xl p-4">
                      <X className="text-rose-400 mt-0.5 shrink-0 w-5 h-5" />
                      <p className="text-gray-400 text-sm">{con}</p>
                    </div>
                  ))}
                </div>
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
              See why contractors choose Jevus
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Book a free demo and hear Jevus handle a call for your business.
            </p>
            <CalendlyButton className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2">
              Book a Demo <ArrowRight className="w-5 h-5" />
            </CalendlyButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
