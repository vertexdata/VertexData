import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEOHead } from './SEO';
import { motion } from 'framer-motion';

interface SimplePageProps {
  title: string;
  subtitle?: string;
  content?: React.ReactNode;
  seo?: {
    title: string;
    description: string;
    canonical?: string;
    keywords?: string;
    schema?: object | object[];
  };
}

export const SimplePage: React.FC<SimplePageProps> = ({ title, subtitle, content, seo }) => {
  return (
    <div className="bg-brand-dark min-h-screen">
      {seo && <SEOHead {...seo} />}
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16 text-center md:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl text-gray-400 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </motion.div>
            
            <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed">
              {content || (
                <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
                  <p className="text-lg">This page is currently being updated. Please check back soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
