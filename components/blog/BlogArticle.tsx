import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { SEOHead } from '../SEO';
import { breadcrumbSchema } from '../JsonLd';
import { CalendlyButton } from '../CalendlyButton';

export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  content: React.ReactNode;
  seo: { title: string; description: string; keywords: string };
  relatedLinks: { text: string; href: string }[];
}

export const BlogArticle: React.FC<{ post: BlogPostData }> = ({ post }) => {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishDate,
    author: { '@type': 'Organization', name: 'Jevus AI' },
    publisher: {
      '@type': 'Organization',
      name: 'Jevus AI',
      url: 'https://jevus.ai',
    },
  };

  return (
    <div className="bg-brand-dark min-h-screen">
      <SEOHead
        title={post.seo.title}
        description={post.seo.description}
        canonical={`/blog/${post.slug}`}
        keywords={post.seo.keywords}
        schema={[
          articleSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: post.title, url: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <Header />

      <main>
        <article className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <a href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm mb-8">
                  <ArrowLeft className="w-4 h-4" /> Back to Blog
                </a>

                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-600 text-xs">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                  <span className="text-gray-600 text-xs">{post.publishDate}</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                  {post.title}
                </h1>
              </motion.div>

              {/* Article Body */}
              <div className="prose prose-invert prose-lg max-w-none text-gray-400 leading-relaxed space-y-6">
                {post.content}
              </div>

              {/* CTA */}
              <div className="mt-16 bg-brand-blue/10 border border-brand-blue/20 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-black text-white mb-3">Stop losing calls. Start growing.</h3>
                <p className="text-gray-400 mb-6">See how Jevus AI can help your business capture every lead.</p>
                <CalendlyButton className="btn-primary px-8 py-3 inline-flex items-center gap-2">
                  Book a Free Demo <ArrowRight className="w-4 h-4" />
                </CalendlyButton>
              </div>

              {/* Related Links */}
              {post.relatedLinks.length > 0 && (
                <div className="mt-12 pt-12 border-t border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">Related reading</h3>
                  <div className="space-y-3">
                    {post.relatedLinks.map((link, i) => (
                      <a key={i} href={link.href} className="block text-brand-blue hover:text-blue-400 transition-colors text-sm font-medium">
                        {link.text} &rarr;
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};
