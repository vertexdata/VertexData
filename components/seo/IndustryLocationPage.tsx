import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, ArrowRight, Clock, DollarSign, CheckCircle2 } from 'lucide-react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { SEOHead } from '../SEO';
import { faqSchema, breadcrumbSchema } from '../JsonLd';
import { CalendlyButton } from '../CalendlyButton';
import { IndustryInfo, CityInfo, industries, floridaCities } from './seoData';
import { InternalLinks } from './InternalLinks';

interface Props {
  industry: IndustryInfo;
  city: CityInfo;
}

export const IndustryLocationPage: React.FC<Props> = ({ industry, city }) => {
  const faqs = [
    { question: `Does Jevus AI work for ${industry.name.toLowerCase()} in ${city.name}?`, answer: `Yes. Jevus AI is specifically built for ${industry.name.toLowerCase()} in the ${city.region} area. It answers every call 24/7, detects ${industry.emergencyType}, books appointments, and qualifies leads — all customized for ${city.name} ${industry.name.toLowerCase()}.` },
    { question: `How much does a missed call cost a ${city.name} ${industry.singular}?`, answer: `The average missed call costs ${industry.name.toLowerCase()} ${industry.avgJobValue} in lost revenue. With 27% of calls going unanswered and 85% of callers never leaving voicemail, ${city.name} ${industry.name.toLowerCase()} can lose tens of thousands per year.` },
    { question: `How quickly can a ${city.name} ${industry.singular} get started with Jevus?`, answer: `Most ${industry.name.toLowerCase()} are live in under 5 minutes. Forward your business phone to Jevus, set your ${city.name} service area, and start capturing every call immediately.` },
    { question: 'How much does Jevus AI cost?', answer: `Plans start at $497/month — less than the cost of one missed ${industry.avgJobValue} job. No per-minute charges, no contracts, cancel anytime.` },
  ];

  // Get related pages for internal linking
  const sameIndustryOtherCities = floridaCities
    .filter(c => c.slug !== city.slug && c.region === city.region)
    .slice(0, 5);
  const sameCity = industries
    .filter(i => i.slug !== industry.slug)
    .slice(0, 4);

  return (
    <div className="bg-brand-dark min-h-screen">
      <SEOHead
        title={`AI Answering Service for ${industry.name} in ${city.name}, ${city.state} | Jevus AI`}
        description={`${industry.name} in ${city.name} — never miss a call again. Jevus AI answers 24/7, detects ${industry.emergencyType}, books appointments, and qualifies leads. Built for ${city.region} contractors.`}
        canonical={`/industries/${industry.slug}-${city.slug}`}
        keywords={`${industry.singular} answering service ${city.name}, AI receptionist ${industry.name.toLowerCase()} ${city.name}, ${city.name} ${industry.singular} phone answering, ${industry.name.toLowerCase()} ${city.name} ${city.state}`}
        schema={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: industry.name, url: `/industries/${industry.slug}` },
            { name: city.name, url: `/industries/${industry.slug}-${city.slug}` },
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
                <div className="flex items-center gap-2 mb-6 flex-wrap">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue text-sm font-semibold">
                    <MapPin className="w-4 h-4" /> {city.name}, {city.state}
                  </span>
                  <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm font-semibold">
                    {industry.name}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[0.95]">
                  AI Answering Service for<br />{industry.name} in {city.name}
                </h1>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                  {city.name} {industry.name.toLowerCase()} lose an average of {industry.avgJobValue} every time a call goes to voicemail. Jevus AI answers every call 24/7, handles {industry.emergencyType}, and books jobs — so you never lose a customer again.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CalendlyButton className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
                    Get Started <ArrowRight className="w-5 h-5" />
                  </CalendlyButton>
                  <a href="tel:+156733JEVUS" className="btn-secondary text-lg px-8 py-4 flex items-center gap-2 justify-center">
                    <Phone className="w-5 h-5" /> Call Us
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 border-t border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: city.population, label: `${city.name} population` },
                { value: industry.avgJobValue, label: 'Average job value at stake' },
                { value: '27%', label: 'Calls going unanswered' },
                { value: '24/7', label: 'Jevus AI coverage' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-brand-blue mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local context */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                Why {city.name} {industry.name.toLowerCase()} need Jevus AI
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {city.localNote} For {industry.name.toLowerCase()}, this means more calls than ever — but when you're dealing with {industry.painPoint}, you can't answer the phone. Every missed call is {industry.avgJobValue} walking out the door.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Jevus AI solves this by answering every call instantly, qualifying the lead, detecting {industry.emergencyType}, and booking the job directly into your calendar. You focus on the work. Jevus handles the phone.
              </p>
            </div>
          </div>
        </section>

        {/* Real missed call scenarios */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black text-white mb-4 tracking-tight">
              Calls {city.name} {industry.name.toLowerCase()} can't afford to miss
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-3xl">{industry.industryChallenge}</p>
            <div className="space-y-4">
              {industry.missedCallScenarios.map((scenario, i) => (
                <div key={i} className="flex items-start gap-4 bg-rose-500/5 border border-rose-500/10 rounded-2xl p-6">
                  <span className="text-rose-400 mt-1 shrink-0 text-lg">&#x2717;</span>
                  <p className="text-gray-300 leading-relaxed">{scenario}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Jevus solves it */}
        <section className="py-20 border-t border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black text-white mb-8 tracking-tight">
              How Jevus AI handles these calls
            </h2>
            <div className="space-y-4">
              {industry.whyAiHelps.map((point, i) => (
                <div key={i} className="flex items-start gap-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6">
                  <CheckCircle2 className="text-emerald-400 mt-1 shrink-0 w-5 h-5" />
                  <p className="text-gray-300 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black text-white mb-8 tracking-tight">
              Call types Jevus handles for {city.name} {industry.name.toLowerCase()}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industry.commonServices.map((service, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                  <CheckCircle2 className="text-brand-blue w-5 h-5 shrink-0" />
                  <span className="text-gray-300 text-sm">{service} calls in {city.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key benefits */}
        <section className="py-20 border-t border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Clock className="w-6 h-6" />, title: '24/7 Coverage', description: `Your ${city.name} customers call at all hours. Jevus answers every call — nights, weekends, and holidays.` },
                { icon: <DollarSign className="w-6 h-6" />, title: `Save ${industry.avgJobValue}+ Per Missed Call`, description: `Every unanswered call is ${industry.avgJobValue} lost. Jevus ensures you never miss another lead.` },
                { icon: <MapPin className="w-6 h-6" />, title: `${city.name} Service Area`, description: `Jevus knows your ${city.name} service area and only books jobs within your coverage zone.` },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="w-10 h-10 bg-brand-blue/10 border border-brand-blue/20 rounded-xl flex items-center justify-center text-brand-blue mb-4">{item.icon}</div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        {city.neighborhoods.length > 0 && (
          <section className="py-20 border-t border-white/5">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-black text-white mb-6 tracking-tight">
                Serving {industry.name.toLowerCase()} across {city.name}
              </h2>
              <div className="flex flex-wrap gap-3">
                {city.neighborhoods.map((n, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm">{n}</span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-black text-white mb-12 tracking-tight text-center">FAQ</h2>
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

        {/* Internal Links */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">{industry.name} in other {city.region} cities</h3>
                <div className="flex flex-wrap gap-3">
                  {sameIndustryOtherCities.map(c => (
                    <a key={c.slug} href={`/industries/${industry.slug}-${c.slug}`} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-400 text-sm hover:border-brand-blue/30 hover:text-white transition-colors">
                      {industry.name} in {c.name}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Other services in {city.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {sameCity.map(i => (
                    <a key={i.slug} href={`/industries/${i.slug}-${city.slug}`} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-400 text-sm hover:border-brand-blue/30 hover:text-white transition-colors">
                      {i.name} in {city.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Ready to capture every call in {city.name}?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Join {city.name} {industry.name.toLowerCase()} who never miss another customer call.
            </p>
            <CalendlyButton className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2">
              Get Started Free <ArrowRight className="w-5 h-5" />
            </CalendlyButton>
          </div>
        </section>

        <InternalLinks currentPath={`/industries/${industry.slug}-${city.slug}`} />
      </main>

      <Footer />
    </div>
  );
};
