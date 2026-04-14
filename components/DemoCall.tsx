import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Mic2, Phone, SkipForward, SkipBack } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  subtitle: string;
  src: string;
  icon: string;
}

const tracks: Track[] = [
  {
    id: 1,
    title: 'Emergency Plumbing Call',
    subtitle: 'Customer reports a water heater leak — Jevus qualifies and books.',
    src: '/jevus-demo-call.wav',
    icon: '🔧',
  },
  {
    id: 2,
    title: 'After-Hours HVAC Request',
    subtitle: 'Late-night AC failure — Jevus detects urgency and dispatches.',
    src: '/jevus-demo-call-2.wav',
    icon: '❄️',
  },
  {
    id: 3,
    title: 'New Customer Lead',
    subtitle: 'First-time caller looking for service — Jevus captures every detail.',
    src: '/jevus-demo-call-3.wav',
    icon: '📞',
  },
];

export const DemoCall: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const createAudio = (src: string) => {
    // Stop current audio if playing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(src);
    audio.preload = 'auto';
    audio.onended = () => { setIsPlaying(false); setProgress(0); };
    audio.onerror = () => setIsPlaying(false);
    audio.ontimeupdate = () => {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    };
    audio.onloadedmetadata = () => setDuration(audio.duration);
    audio.muted = isMuted;
    audioRef.current = audio;
    return audio;
  };

  const playTrack = async (index: number) => {
    const track = tracks[index];
    setActiveTrack(index);
    setProgress(0);
    setDuration(0);

    const audio = createAudio(track.src);
    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      // Retry with fresh object
      try {
        const fresh = createAudio(track.src);
        await fresh.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  const togglePlay = async () => {
    if (!audioRef.current) {
      await playTrack(activeTrack);
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        await playTrack(activeTrack);
      }
    }
  };

  const nextTrack = () => playTrack((activeTrack + 1) % tracks.length);
  const prevTrack = () => playTrack((activeTrack - 1 + tracks.length) % tracks.length);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current && duration) {
      const seekTime = (parseFloat(e.target.value) / 100) * duration;
      audioRef.current.currentTime = seekTime;
      setProgress(parseFloat(e.target.value));
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentTime = audioRef.current?.currentTime || 0;

  return (
    <section id="demo-call" className="py-24 relative overflow-hidden bg-brand-dark">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-brand-violet/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-bold mb-6"
            >
              <Mic2 size={14} />
              <span>LIVE DEMO RECORDINGS</span>
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
              Listen to real conversations between customers and our AI receptionist.
              No scripts, just real-world automation.
            </motion.p>
          </div>

          {/* Player Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Visualizer Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="flex items-end justify-center gap-1 h-full w-full px-4">
                {[...Array(40)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: isPlaying ? [20, Math.random() * 100 + 20, 20] : 20 }}
                    transition={{ repeat: Infinity, duration: 0.5 + Math.random(), ease: 'easeInOut' }}
                    className="w-2 bg-brand-blue rounded-full"
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10">
              {/* Now Playing */}
              <div className="p-8 md:p-10 border-b border-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/20 flex items-center justify-center text-2xl border border-brand-blue/30 shadow-lg shadow-brand-blue/20">
                    {tracks[activeTrack].icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-white truncate">{tracks[activeTrack].title}</h3>
                    <p className="text-gray-400 text-sm truncate">{tracks[activeTrack].subtitle}</p>
                  </div>
                  <div className="text-xs text-gray-600 font-mono shrink-0">
                    {activeTrack + 1} / {tracks.length}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2 mb-6">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-gray-800 rounded-full appearance-none cursor-pointer accent-brand-blue"
                  />
                  <div className="flex justify-between text-xs font-mono text-gray-600">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={() => {
                      if (audioRef.current) { audioRef.current.muted = !isMuted; }
                      setIsMuted(!isMuted);
                    }}
                    className="p-2 text-gray-500 hover:text-white transition-colors"
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>

                  <button onClick={prevTrack} className="p-2 text-gray-400 hover:text-white transition-colors">
                    <SkipBack size={24} />
                  </button>

                  <button
                    onClick={togglePlay}
                    className="w-16 h-16 rounded-full bg-brand-blue hover:bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-brand-blue/30 transition-all transform hover:scale-110 active:scale-95"
                  >
                    {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} className="ml-1" fill="currentColor" />}
                  </button>

                  <button onClick={nextTrack} className="p-2 text-gray-400 hover:text-white transition-colors">
                    <SkipForward size={24} />
                  </button>

                  <div className="w-9" /> {/* Spacer to balance mute button */}
                </div>
              </div>

              {/* Track List */}
              <div className="p-4 md:px-8 md:py-6">
                <div className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-3 px-2">All Recordings</div>
                <div className="space-y-1">
                  {tracks.map((track, i) => (
                    <button
                      key={track.id}
                      onClick={() => playTrack(i)}
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all ${
                        activeTrack === i
                          ? 'bg-brand-blue/10 border border-brand-blue/20'
                          : 'hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${
                        activeTrack === i ? 'bg-brand-blue/20' : 'bg-white/5'
                      }`}>
                        {activeTrack === i && isPlaying ? (
                          <div className="flex items-end gap-0.5 h-4">
                            {[0, 1, 2].map(j => (
                              <motion.div
                                key={j}
                                animate={{ height: [4, 14, 6] }}
                                transition={{ repeat: Infinity, duration: 0.6, delay: j * 0.15 }}
                                className="w-1 bg-brand-blue rounded-full"
                              />
                            ))}
                          </div>
                        ) : (
                          <span>{track.icon}</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-semibold truncate ${activeTrack === i ? 'text-white' : 'text-gray-300'}`}>
                          {track.title}
                        </div>
                        <div className="text-xs text-gray-500 truncate">{track.subtitle}</div>
                      </div>
                      {activeTrack !== i && (
                        <Play size={16} className="text-gray-600 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
