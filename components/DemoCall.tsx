import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Mic2, Phone, CheckCircle2, MessageSquare } from 'lucide-react';

export const DemoCall: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(103);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create audio element lazily on first interaction (fixes iOS Safari)
  const getAudio = () => {
    if (!audioRef.current) {
      const audio = new Audio('/jevus-demo-call.mp3');
      audio.preload = 'auto';
      audio.onended = () => setIsPlaying(false);
      audio.onerror = () => setIsPlaying(false);
      audio.ontimeupdate = () => {
        if (audio.duration) {
          setProgress((audio.currentTime / audio.duration) * 100);
        }
      };
      audio.onloadedmetadata = () => {
        setDuration(audio.duration);
      };
      audioRef.current = audio;
    }
    return audioRef.current;
  };

  const togglePlay = async () => {
    const audio = getAudio();

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        // Retry with fresh Audio object
        try {
          const fresh = new Audio('/jevus-demo-call.mp3');
          fresh.onended = () => setIsPlaying(false);
          fresh.onerror = () => setIsPlaying(false);
          fresh.ontimeupdate = () => {
            if (fresh.duration) setProgress((fresh.currentTime / fresh.duration) * 100);
          };
          fresh.onloadedmetadata = () => setDuration(fresh.duration);
          audioRef.current = fresh;
          await fresh.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = getAudio();
    const seekTime = (parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = seekTime;
    setProgress(parseFloat(e.target.value));
  };

  return (
    <section id="demo-call" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-brand-violet/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-bold mb-6"
            >
              <Mic2 size={14} />
              <span>LIVE DEMO RECORDING</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
            >
              Hear the AI <span className="text-brand-blue">In Action.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Listen to a real conversation between a customer and our AI receptionist. 
              No scripts, just real-world automation.
            </motion.p>
          </div>

          {/* Audio Player Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Visualizer Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="flex items-end justify-center gap-1 h-full w-full px-4">
                {[...Array(40)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: isPlaying ? [20, Math.random() * 100 + 20, 20] : 20
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.5 + Math.random(),
                      ease: "easeInOut"
                    }}
                    className="w-2 bg-brand-blue rounded-full"
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Left Side: Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-blue/20 flex items-center justify-center text-brand-blue border border-brand-blue/30 shadow-lg shadow-brand-blue/20">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Service Call Demo</h3>
                    <p className="text-gray-400">AI Receptionist vs. Customer</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Handles complex scheduling</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Collects lead information</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Natural, human-like voice</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Controls */}
              <div className="w-full md:w-80 flex flex-col items-center">
                <button
                  onClick={togglePlay}
                  className="w-24 h-24 rounded-full bg-brand-blue hover:bg-blue-600 text-white flex items-center justify-center shadow-2xl shadow-brand-blue/40 transition-all transform hover:scale-110 active:scale-95 mb-8"
                >
                  {isPlaying ? <Pause size={40} fill="currentColor" /> : <Play size={40} className="ml-2" fill="currentColor" />}
                </button>

                <div className="w-full space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-gray-800 rounded-full appearance-none cursor-pointer accent-brand-blue"
                  />
                  
                  <div className="flex justify-between text-xs font-mono text-gray-500">
                    <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <button
                    onClick={() => {
                      const audio = getAudio();
                      audio.muted = !isMuted;
                      setIsMuted(!isMuted);
                    }}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Transcript Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 grid md:grid-cols-2 gap-6"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4 text-brand-blue font-bold text-sm uppercase tracking-widest">
                <MessageSquare size={14} />
                <span>Customer</span>
              </div>
              <p className="text-gray-300 italic">
                "Hey, I have a leak in my kitchen sink and I need someone to come out as soon as possible..."
              </p>
            </div>
            <div className="bg-brand-blue/5 border border-brand-blue/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4 text-brand-blue font-bold text-sm uppercase tracking-widest">
                <Mic2 size={14} />
                <span>Jevus AI</span>
              </div>
              <p className="text-white italic">
                "I'm sorry to hear that! I can definitely help. We have a technician available this afternoon between 2 PM and 4 PM. Would that work for you?"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
