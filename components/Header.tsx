
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { CalendlyButton } from './CalendlyButton';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Demo', href: '#demo' },
    { name: 'Features', href: '#capabilities' },
    { name: 'Workflow', href: '#solution' },
    { name: 'Industries', href: '#use-cases' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
          isScrolled ? 'bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent border border-transparent'
        }`}>
          <div className="flex items-center gap-12">
            <div className="flex flex-col">
              <a href="/" className="text-2xl font-black text-white tracking-tighter leading-none">
                JEVUS<span className="text-brand-blue">.AI</span>
              </a>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                AI Receptionist for Home Service Businesses
              </span>
            </div>
            
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="tel:+156733JEVUS" 
              className="hidden xl:flex items-center gap-2 text-sm font-bold text-white hover:text-brand-blue transition-colors"
            >
              <Phone size={16} className="text-brand-blue" />
              +1 567 33 JEVUS
            </a>
            
            <CalendlyButton 
              className="hidden sm:block px-5 py-2.5 bg-brand-blue hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-brand-blue/20 cursor-pointer"
              text="Get a Quote"
            />

            <button 
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 mx-6 p-6 bg-brand-dark/95 backdrop-blur-2xl border border-white/10 rounded-2xl lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10" />
              <a 
                href="tel:+156733JEVUS" 
                className="flex items-center gap-2 text-lg font-bold text-white"
              >
                <Phone size={20} className="text-brand-blue" />
                +1 567 33 JEVUS
              </a>
              <CalendlyButton 
                className="w-full py-4 bg-brand-blue text-white text-center font-bold rounded-xl cursor-pointer"
                text="Get a Quote"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

