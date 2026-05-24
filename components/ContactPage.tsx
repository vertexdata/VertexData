import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEOHead } from './SEO';
import { localBusinessSchema, breadcrumbSchema } from './JsonLd';
import { CalendlyButton } from './CalendlyButton';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-brand-dark min-h-screen">
      <SEOHead
        title="Contact Jevus AI | Get in Touch | AI Voice Receptionist"
        description="Contact Jevus AI for a free demo of our AI voice receptionist for home service businesses. Call, email, or fill out our form."
        canonical="/contact"
        keywords="contact Jevus AI, AI receptionist demo, Jevus AI phone number, Jevus AI support"
        schema={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact' },
          ]),
        ]}
      />
      <Header />

      <main>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                  Let's Talk
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Ready to stop losing calls? Get in touch and we'll show you how Jevus AI works for your business.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-black text-white mb-6 tracking-tight">Get in touch</h2>
                    <div className="space-y-6">
                      <a href="tel:+15673353887" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                        <div className="w-12 h-12 bg-brand-blue/10 border border-brand-blue/20 rounded-xl flex items-center justify-center text-brand-blue">
                          <Phone size={20} />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Phone</div>
                          <div className="font-bold">(567) 335-3887</div>
                        </div>
                      </a>
                      <a href="mailto:info@jevus.ai" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                        <div className="w-12 h-12 bg-brand-blue/10 border border-brand-blue/20 rounded-xl flex items-center justify-center text-brand-blue">
                          <Mail size={20} />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Email</div>
                          <div className="font-bold">info@jevus.ai</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h3 className="text-white font-bold text-lg mb-3">Prefer a live demo?</h3>
                    <p className="text-gray-400 text-sm mb-6">
                      Book a 15-minute call and hear Jevus handle a real call for your business type.
                    </p>
                    <CalendlyButton className="btn-primary w-full py-3 flex items-center justify-center gap-2">
                      Book a Demo <ArrowRight className="w-4 h-4" />
                    </CalendlyButton>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Mail className="text-emerald-400 w-8 h-8" />
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-3">Message sent!</h3>
                      <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-black text-white tracking-tight">Send us a message</h2>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">First name</label>
                          <input
                            type="text"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-brand-blue focus:outline-none"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Last name</label>
                          <input
                            type="text"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-brand-blue focus:outline-none"
                            placeholder="Smith"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input
                          type="email"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-brand-blue focus:outline-none"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                        <input
                          type="tel"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-brand-blue focus:outline-none"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Business type</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue focus:outline-none">
                          <option value="">Select your trade</option>
                          <option value="plumbing">Plumbing</option>
                          <option value="hvac">HVAC</option>
                          <option value="electrical">Electrical</option>
                          <option value="roofing">Roofing</option>
                          <option value="pest-control">Pest Control</option>
                          <option value="landscaping">Landscaping</option>
                          <option value="general-contractor">General Contractor</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <textarea
                          rows={4}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-brand-blue focus:outline-none resize-none"
                          placeholder="Tell us about your business and what you're looking for..."
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2">
                        Send Message <ArrowRight className="w-5 h-5" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
