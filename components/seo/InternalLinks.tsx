import React from 'react';

const keyPages = [
  { name: 'AI Voice Receptionist', href: '/' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Missed Call Calculator', href: '/resources/missed-call-calculator' },
  { name: 'Plumbers', href: '/industries/plumbers' },
  { name: 'HVAC', href: '/industries/hvac' },
  { name: 'Electricians', href: '/industries/electricians' },
  { name: 'Roofing', href: '/industries/roofing' },
  { name: 'Pest Control', href: '/industries/pest-control' },
  { name: 'Landscaping', href: '/industries/landscaping' },
  { name: 'Tampa Bay', href: '/locations/tampa-bay' },
  { name: 'Tampa', href: '/locations/tampa' },
  { name: 'St. Petersburg', href: '/locations/st-petersburg' },
  { name: 'Clearwater', href: '/locations/clearwater' },
  { name: 'Largo', href: '/locations/largo' },
  { name: 'vs Answering Service', href: '/vs/answering-service' },
  { name: 'vs Hiring Receptionist', href: '/vs/hiring-receptionist' },
  { name: 'After-Hours Answering', href: '/use-cases/after-hours-answering' },
  { name: 'Emergency Dispatch', href: '/use-cases/emergency-dispatch' },
  { name: 'Blog', href: '/blog' },
];

export const InternalLinks: React.FC<{ currentPath?: string }> = ({ currentPath }) => {
  const links = keyPages.filter(p => p.href !== currentPath).slice(0, 12);

  return (
    <section className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <h3 className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-4">Explore Jevus AI</h3>
        <div className="flex flex-wrap gap-2">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-500 text-xs hover:text-white hover:border-brand-blue/30 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
