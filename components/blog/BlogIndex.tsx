import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { SEOHead } from '../SEO';
import { breadcrumbSchema } from '../JsonLd';
import { blogPosts } from './blogData';

export const BlogIndex: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <SEOHead
        title="Blog | AI Voice Receptionist Tips for Home Services | Jevus AI"
        description="Tips, insights, and data about AI voice receptionists for home service businesses. Learn how plumbers, HVAC techs, and electricians stop losing revenue to missed calls."
        canonical="/blog"
        keywords="AI receptionist blog, home service business tips, missed calls contractor, answering service tips"
        schema={[
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
          ]),
        ]}
      />
      <Header />

      <main>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                  The Jevus Blog
                </h1>
                <p className="text-xl text-gray-400">
                  Insights for home service businesses on capturing more calls, booking more jobs, and growing revenue.
                </p>
              </motion.div>

              <div className="space-y-8">
                {blogPosts.map((post, i) => (
                  <motion.a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="block bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-blue/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-gray-600 text-xs">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-brand-blue transition-colors tracking-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-brand-blue text-sm font-semibold flex items-center gap-1">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.a>
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
