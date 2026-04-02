// Run: npx tsx scripts/generate-sitemap.ts
// Generates public/sitemap.xml from all page data

import { writeFileSync } from 'fs';
import { industries, floridaCities, getAllIndustryLocationPages } from '../components/seo/seoData';
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
for (const ind of industries) {
  urls.push(url(`/industries/${ind.slug}`, 'monthly', '0.8'));
}

// Industry x Location pages
for (const page of getAllIndustryLocationPages()) {
  urls.push(url(page.path, 'monthly', '0.6'));
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

// Blog
urls.push(url('/blog', 'weekly', '0.8'));
for (const post of blogPosts) {
  urls.push(url(`/blog/${post.slug}`, 'monthly', '0.7'));
}

// Resources
urls.push(url('/resources/missed-call-calculator', 'monthly', '0.7'));

// Location hub pages
const locationSlugs = [
  'tampa-bay', 'tampa', 'st-petersburg', 'clearwater', 'largo', 'seminole',
  'treasure-island', 'pinellas-park', 'dunedin', 'palm-harbor', 'safety-harbor',
];
for (const loc of locationSlugs) {
  urls.push(url(`/locations/${loc}`, 'monthly', '0.7'));
}

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
