
import React from 'react';
import { Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          <div className="lg:col-span-2">
            <a href="/" className="text-3xl font-black text-white tracking-tighter mb-6 block">
              JEVUS<span className="text-brand-blue">.AI</span>
            </a>
            <p className="text-gray-500 text-lg mb-8 max-w-sm leading-relaxed">
              The premium AI automation agency for service-based businesses. We help you capture every lead and automate your front office.
            </p>
            <div className="space-y-4">
              <a href="tel:+15673353887" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-bold">
                <Phone size={18} className="text-brand-blue" />
                (567) 335-3887
              </a>
              <a href="mailto:info@jevus.ai" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-bold">
                <Mail size={18} className="text-brand-blue" />
                info@jevus.ai
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Product</h4>
            <ul className="space-y-4">
              {[
                { name: 'How It Works', href: '/how-it-works' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Missed Call Calculator', href: '/resources/missed-call-calculator' },
                { name: 'Integrations', href: '/integrations' },
              ].map((item) => (
                <li key={item.name}><a href={item.href} className="text-gray-500 hover:text-white transition-colors text-sm font-medium">{item.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Industries</h4>
            <ul className="space-y-4">
              {[
                { name: 'Plumbers', href: '/industries/plumbers' },
                { name: 'HVAC', href: '/industries/hvac' },
                { name: 'Electricians', href: '/industries/electricians' },
                { name: 'Roofing', href: '/industries/roofing' },
                { name: 'Pest Control', href: '/industries/pest-control' },
                { name: 'Landscaping', href: '/industries/landscaping' },
                { name: 'Garage Door', href: '/industries/garage-door' },
                { name: 'General Contractors', href: '/industries/general-contractors' },
              ].map((item) => (
                <li key={item.name}><a href={item.href} className="text-gray-500 hover:text-white transition-colors text-sm font-medium">{item.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'Trust Center', href: '/trust' },
              ].map((item) => (
                <li key={item.name}><a href={item.href} className="text-gray-500 hover:text-white transition-colors text-sm font-medium">{item.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Legal</h4>
            <ul className="space-y-4">
              {[
                { name: 'Privacy', href: '/privacy' },
                { name: 'Terms', href: '/terms' },
                { name: 'Acceptable Use', href: '/acceptable-use' },
                { name: 'AI Disclosure', href: '/ai-disclosure' },
                { name: 'Legal', href: '/legal' }
              ].map((item) => (
                <li key={item.name}><a href={item.href} className="text-gray-500 hover:text-white transition-colors text-sm font-medium">{item.name}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center space-y-2">
          <p className="text-gray-500 text-xs font-medium">
            Jevus.ai is a product of Vertex Data LLC
          </p>
          <p className="text-gray-600 text-xs font-medium">
            © 2025 Vertex Data LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
