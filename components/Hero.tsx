
import React, { useState, useRef } from 'react';
import { PlayIcon } from './Icons';
import { CalendlyButton } from './CalendlyButton';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2 } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = async () => {
    // Create audio element on first interaction (fixes iOS Safari)
    if (!audioRef.current) {
      const audio = new Audio('/jevus-demo-call.mp3');
      audio.preload = 'auto';
      audio.onended = () => setIsPlaying(false);
      audio.onerror = () => setIsPlaying(false);
      audioRef.current = audio;
    }

    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        // Retry: some browsers need a fresh Audio object on first user gesture
        try {
          const freshAudio = new Audio('/jevus-demo-call.mp3');
          freshAudio.onended = () => setIsPlaying(false);
          freshAudio.onerror = () => setIsPlaying(false);
          audioRef.current = freshAudio;
          await freshAudio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-md mx-auto mt-8 mb-12 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Live Recording</span>
        </div>
        <div className="text-xs text-gray-400 font-mono">1:43</div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-brand-blue hover:bg-blue-600 flex items-center justify-center text-white transition-colors shadow-lg shadow-brand-blue/20 cursor-pointer"
        >
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
        </button>

        <div className="flex-1 space-y-2">
          <div className="text-sm font-medium text-white">"My water heater is leaking..."</div>
          <div className="h-8 flex items-center gap-0.5">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={isPlaying ? { height: [4, 16, 8, 24, 12, 4] } : { height: 4 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                className="w-1 bg-brand-blue/50 rounded-full"
              />
            ))}
          </div>
        </div>

        <Volume2 size={20} className="text-gray-400" />
      </div>

      <p className="text-xs text-center text-gray-400 mt-4">
        Hear it for yourself — most people can't tell it's AI.
      </p>
    </div>
  );
};

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

          <AudioPlayer />

          <div className="mt-10 flex flex-col items-center space-y-4">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full">
              <CalendlyButton
                className="w-full sm:w-auto bg-brand-blue hover:bg-blue-600 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg shadow-xl shadow-brand-blue/25 cursor-pointer"
                text="Book a 15-Min Walkthrough"
              />
              <a href="#demo-call" className="w-full sm:w-auto flex items-center justify-center space-x-2 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 border border-gray-700 bg-black/20">
                <PlayIcon className="w-6 h-6"/>
                <span>Hear More Samples</span>
              </a>
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
