// Run: npx tsx scripts/generate-sitemap.ts
// Generates public/sitemap.xml from all page data

import { writeFileSync } from 'fs';
import { blogPosts } from '../components/blog/blogData';

const BASE = 'https://jevus.ai';

function url(path: string, changefreq: string, priority: string): string {
  return `  <url><loc>${BASE}${path}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

const urls: string[] = [];

// Core pages
urls.push(url('/', 'weekly', '1.0'));
urls.push(url('/pricing', 'monthly', '0.9'));
urls.push(url('/how-it-works', 'monthly', '0.9'));
urls.push(url('/contact', 'monthly', '0.6'));
urls.push(url('/about', 'monthly', '0.5'));
urls.push(url('/integrations', 'monthly', '0.5'));

// Industry hub pages
const industrySlugs = ['plumbers', 'hvac', 'electricians', 'roofing', 'garage-door', 'pest-control', 'landscaping', 'general-contractors'];
for (const slug of industrySlugs) {
  urls.push(url(`/industries/${slug}`, 'monthly', '0.8'));
}

// Use case pages
const useCases = ['after-hours-answering', 'missed-call-recovery', 'emergency-dispatch', 'appointment-booking', 'lead-qualification'];
for (const uc of useCases) {
  urls.push(url(`/use-cases/${uc}`, 'monthly', '0.7'));
}

// Comparison pages
const comparisons = ['answering-service', 'hiring-receptionist', 'smith-ai', 'goodcall', 'ruby-receptionists', 'newo-ai', 'dialzara'];
for (const c of comparisons) {
  urls.push(url(`/vs/${c}`, 'monthly', '0.7'));
}

// Feature pages
const featureSlugs = ['ai-voice-receptionist', 'appointment-booking', 'missed-call-text-back', 'review-automation', 'lead-qualification', 'sms-alerts', 'client-dashboard', 'integrations', 'white-glove-setup'];
for (const f of featureSlugs) {
  urls.push(url(`/features/${f}`, 'monthly', '0.8'));
}

// Blog
urls.push(url('/blog', 'weekly', '0.8'));
for (const post of blogPosts) {
  urls.push(url(`/blog/${post.slug}`, 'monthly', '0.7'));
}

// Resources
urls.push(url('/resources/missed-call-calculator', 'monthly', '0.7'));

// Legal
urls.push(url('/privacy', 'yearly', '0.3'));
urls.push(url('/terms', 'yearly', '0.3'));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

writeFileSync('public/sitemap.xml', sitemap);
console.log(`Generated sitemap with ${urls.length} URLs`);
