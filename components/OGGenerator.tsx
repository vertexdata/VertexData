import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2, Calendar, MessageSquare, Download } from 'lucide-react';
import html2canvas from 'html2canvas';

export const OGGenerator: React.FC = () => {
  const ogRef = useRef<HTMLDivElement>(null);

  const downloadImage = async () => {
    if (ogRef.current) {
      const canvas = await html2canvas(ogRef.current, {
        width: 1200,
        height: 630,
        scale: 1,
        useCORS: true,
      });
      const link = document.createElement('a');
      link.download = 'og-image.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen flex flex-col items-center justify-center p-10 font-sans">
      <div className="mb-8 flex gap-4">
        <button 
          onClick={downloadImage}
          className="flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-blue-600 text-white rounded-xl font-bold shadow-lg transition-all"
        >
          <Download size={20} />
          Download og-image.png
        </button>
      </div>

      {/* OG Image Container (1200x630) */}
      <div 
        ref={ogRef}
        className="w-[1200px] h-[630px] bg-[#050A1A] relative overflow-hidden flex flex-col items-center justify-center border border-white/5 shadow-2xl"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #0A1530 0%, #050A1A 100%)'
        }}
      >
        {/* Subtle Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-violet/10 rounded-full blur-[120px]"></div>
        
        {/* Floating UI Elements */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 right-20 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Booking Confirmed</p>
            <p className="text-sm text-white font-bold">Plumbing Repair @ 2:00 PM</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-20 left-20 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Phone size={20} className="animate-pulse" />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Incoming Call</p>
            <p className="text-sm text-white font-bold">AI Receptionist Answering...</p>
          </div>
        </motion.div>

        {/* Center Content */}
        <div className="text-center z-10 px-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <span className="text-2xl font-black text-white tracking-[0.3em] opacity-80">JEVUS.AI</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-black text-white mb-6 leading-tight tracking-tight"
          >
            Every Missed Call Is a <br />
            <span className="text-brand-blue">Job You Already Lost.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-400 font-medium max-w-2xl mx-auto"
          >
            AI Voice Receptionist for Home Service Businesses
          </motion.p>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-50"></div>
      </div>
      
      <p className="mt-8 text-gray-500 text-sm">
        This page renders the OG image perfectly using HTML/Canvas. Click the button above to export it.
      </p>
    </div>
  );
};
