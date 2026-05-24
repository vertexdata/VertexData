
import React from 'react';
import { CalendlyButton } from './CalendlyButton';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-gradient-to-r from-brand-blue to-brand-violet rounded-full opacity-10 blur-[100px] -z-10"></div>
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
             </span>
             <span className="text-brand-blue text-sm font-bold uppercase tracking-wider">Experience Jevus Live</span>
             <a href="tel:+156733JEVUS" className="text-white hover:text-brand-blue transition-colors text-sm font-mono ml-2 font-bold">+1 567 33 JEVUS</a>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-tight mb-8">
            Every Missed Call Is a Job You <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-violet">Already Lost.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Not a robocall. Not a bot. Sounds like a real person — with background noise and everything. Your customers won't know the difference.
          </p>

          <div className="mt-10 flex flex-col items-center space-y-4">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full">
              <CalendlyButton
                className="w-full sm:w-auto bg-brand-blue hover:bg-blue-600 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg shadow-xl shadow-brand-blue/25 cursor-pointer"
                text="Book a 15-Min Walkthrough"
              />
            </div>
            <p className="text-brand-blue font-bold tracking-wide uppercase text-sm">
              Starting at $497/mo — Cancel Anytime
            </p>
          </div>
          <p className="mt-6 text-sm text-gray-500 font-medium">
             Call <a href="tel:+156733JEVUS" className="text-gray-300 hover:text-brand-blue transition-colors underline decoration-brand-blue/30">+1 567 33 JEVUS</a> to talk to Jevus right now.
          </p>
        </div>
      </div>
    </section>
  );
};
