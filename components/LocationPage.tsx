import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, ArrowRight, CheckCircle2, Clock, DollarSign, Users } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEOHead } from './SEO';
import { faqSchema, breadcrumbSchema, localBusinessSchema } from './JsonLd';
import { CalendlyButton } from './CalendlyButton';

export interface LocationData {
  slug: string;
  city: string;
  region: string;
  state: string;
  headline: string;
  subheadline: string;
  localDescription: string;
  industries: { name: string; slug: string; description: string }[];
  localStats: { value: string; label: string }[];
  neighborhoods?: string[];
  nearbyAreas?: { name: string; slug: string }[];
  faqs: { question: string; answer: string }[];
  seo: { title: string; description: string; keywords: string };
}

export const LocationPage: React.FC<{ data: LocationData }> = ({ data }) => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <SEOHead
        title={data.seo.title}
        description={data.seo.description}
        canonical={`/locations/${data.slug}`}
        keywords={data.seo.keywords}
        schema={[
          localBusinessSchema(),
          faqSchema(data.faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Locations', url: '/locations/tampa-bay' },
            { name: data.city, url: `/locations/${data.slug}` },
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
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue text-sm font-semibold">
                    <MapPin className="w-4 h-4" /> {data.city}, {data.state}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.95]">
                  {data.headline}
                </h1>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                  {data.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CalendlyButton className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
                    Get Started in {data.city} <ArrowRight className="w-5 h-5" />
                  </CalendlyButton>
                  <a href="tel:+156733JEVUS" className="btn-secondary text-lg px-8 py-4 flex items-center gap-2 justify-center">
                    <Phone className="w-5 h-5" /> Call Us Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Local Description */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                AI Voice Receptionist for {data.city} Home Service Businesses
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {data.localDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Local Stats */}
        <section className="py-16 border-t border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {data.localStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-black text-brand-blue mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Home service businesses we serve in {data.city}
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl">
              Jevus AI is built specifically for {data.region} contractors who can't afford to miss a single call.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.industries.map((industry, i) => (
                <motion.a
                  key={i}
                  href={`/industries/${industry.slug}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-blue/30 transition-colors group"
                >
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-brand-blue transition-colors">
                    {industry.name} in {data.city}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{industry.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Why Jevus for this area */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 tracking-tight">
              Why {data.city} contractors choose Jevus AI
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Clock className="w-6 h-6" />, title: '24/7 Coverage', description: `${data.city} customers call at all hours. Jevus answers every call instantly, day or night.` },
                { icon: <DollarSign className="w-6 h-6" />, title: 'Stop Losing Revenue', description: 'The average missed call costs $1,200. Most contractors recover $3,000-5,000/month with Jevus.' },
                { icon: <Users className="w-6 h-6" />, title: 'Local Expertise', description: `Built by a team based right here in ${data.region}. We understand the local market.` },
                { icon: <MapPin className="w-6 h-6" />, title: 'Service Area Aware', description: `Jevus knows your ${data.city} service area and only books jobs within your coverage zone.` },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <div className="w-10 h-10 bg-brand-blue/10 border border-brand-blue/20 rounded-xl flex items-center justify-center text-brand-blue mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhoods / Areas Served */}
        {data.neighborhoods && data.neighborhoods.length > 0 && (
          <section className="py-20 border-t border-white/5 bg-white/[0.02]">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">
                Areas we serve in {data.city}
              </h2>
              <div className="flex flex-wrap gap-3">
                {data.neighborhoods.map((area, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Nearby Areas */}
        {data.nearbyAreas && data.nearbyAreas.length > 0 && (
          <section className="py-20 border-t border-white/5">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-black text-white mb-8 tracking-tight">
                Also serving nearby areas
              </h2>
              <div className="flex flex-wrap gap-4">
                {data.nearbyAreas.map((area, i) => (
                  <a
                    key={i}
                    href={`/locations/${area.slug}`}
                    className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 text-sm font-medium hover:border-brand-blue/30 hover:text-white transition-colors"
                  >
                    {area.name} &rarr;
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

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
              Ready to capture every call in {data.city}?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Join {data.region} contractors who never miss another customer call.
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
