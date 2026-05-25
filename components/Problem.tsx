
import React from 'react';
import { motion } from 'framer-motion';
import { PhoneMissed } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-20 lg:py-24 relative overflow-hidden bg-[#020617]">
      {/* Background Network Pattern & Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-violet/10 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        {/* SVG Network Lines (Subtle) */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 Q200,150 400,50 T800,150 T1200,50" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
          <path d="M0,300 Q200,250 400,350 T800,250 T1200,350" fill="none" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="1" />
          <path d="M200,0 L400,400 M800,0 L600,600" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-[clamp(1.875rem,6vw,3.25rem)] font-black text-white mb-5 leading-[1.1] tracking-tight">
              Every Missed Call Is a Job You Already Lost
            </h2>

            <div className="space-y-3 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p>
                When you're on a job and your phone rings, it goes straight to your competitor.
              </p>
              <p>
                Customers don't wait. They call the next number.
              </p>
            </div>

            <div className="mt-8 border-l-2 border-rose-500/40 pl-5">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                Average monthly loss
              </div>
              <div className="text-[clamp(2rem,5vw,2.75rem)] font-black text-rose-500 tracking-tight leading-none mb-2">
                $5,000–$9,500
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                in missed calls for the average trades business
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-12 lg:mt-0"
          >
            {/* Main Image Container */}
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[600px] bg-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200" 
                alt="Plumber working under sink" 
                className="w-full h-full object-cover opacity-80"
              />
              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/50 to-transparent"></div>
            </div>

            {/* Phone Overlay */}
            <motion.div 
              initial={{ y: 50, rotate: -5 }}
              whileInView={{ y: 0, rotate: -15 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
              className="absolute -bottom-12 -right-4 md:-right-12 w-[280px] h-[560px] bg-[#0A0A0A] rounded-[3rem] border-[8px] border-[#1A1A1A] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden hidden sm:block"
            >
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1A1A1A] rounded-b-3xl z-20"></div>
              
              {/* Phone Screen */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-950 p-6 flex flex-col justify-center relative">
                {/* Background glows in phone */}
                <div className="absolute top-1/4 left-0 w-full h-1/2 bg-red-500/20 blur-[50px]"></div>
                
                {/* Missed Call Notification Card */}
                <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl transform transition-transform hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(239,68,68,0.6)] shrink-0">
                      <PhoneMissed size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg leading-tight">Missed Call</h4>
                      <p className="text-gray-300 text-sm mt-0.5">Potential Customer</p>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-sm transition-colors shadow-lg">
                    Call back now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

