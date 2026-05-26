import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wrench, PhoneIncoming, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react';

const STAT_COLOR = '#6366f1';

/** Becomes true `delayMs` after `inView` flips true; resets to false when out of view. */
function useDelayedTrigger(inView: boolean, delayMs: number) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!inView) {
      setOn(false);
      return;
    }
    const t = setTimeout(() => setOn(true), delayMs);
    return () => clearTimeout(t);
  }, [inView, delayMs]);
  return on;
}

/** Animates from `from` → `to` over `durationSec` when `start` is true. Resets when false. */
function useTween(from: number, to: number, durationSec: number, start: boolean) {
  const [value, setValue] = useState(from);
  useEffect(() => {
    if (!start) {
      setValue(from);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - t0) / (durationSec * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [from, to, durationSec, start]);
  return value;
}

/** Reveals `text` one character at a time over `durationSec` when `start` is true. */
function useTypewriter(text: string, durationSec: number, start: boolean) {
  const [shown, setShown] = useState('');
  useEffect(() => {
    if (!start) {
      setShown('');
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / (durationSec * 1000), 1);
      setShown(text.slice(0, Math.ceil(p * text.length)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, durationSec, start]);
  return shown;
}

type CardShellProps = {
  number: React.ReactNode;
  label: string;
  labelStart: boolean;
};

const CardShell: React.FC<CardShellProps> = ({ number, label, labelStart }) => {
  const words = label.split(' ');
  return (
    <div
      className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-9 lg:p-12 text-center transition-colors duration-500 hover:border-[color:var(--stat-color)]/50"
      style={{ ['--stat-color' as string]: STAT_COLOR }}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 0%, ${STAT_COLOR}22, transparent 65%)` }}
      />
      {/* Hover shimmer */}
      <div
        className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out"
        style={{ background: `linear-gradient(110deg, transparent 35%, ${STAT_COLOR}1f 50%, transparent 65%)` }}
      />

      <div
        className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-4 sm:mb-5 min-h-[1em]"
        style={{ color: STAT_COLOR }}
      >
        {number}
      </div>

      <div className="relative text-sm sm:text-base text-white font-medium leading-snug max-w-[200px] mx-auto">
        {words.map((word, i) => (
          <motion.span
            key={`${label}-${i}`}
            initial={{ opacity: 0, y: -14 }}
            animate={labelStart ? { opacity: 1, y: 0 } : { opacity: 0, y: -14 }}
            transition={{
              type: 'spring',
              stiffness: 380,
              damping: 14,
              delay: i * 0.08,
            }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

// --- Per-stat cards ---------------------------------------------------------

type CardProps = { inView: boolean; cardDelayMs: number };

const NUMBER_DURATION_S = 1.4; // count up / down duration
const TYPEWRITER_DURATION_S = 0.9;
const FADE_DURATION_S = 0.5;

const CountUpStat: React.FC<CardProps> = ({ inView, cardDelayMs }) => {
  const start = useDelayedTrigger(inView, cardDelayMs);
  const v = useTween(0, 100, NUMBER_DURATION_S, start);
  const labelStart = useDelayedTrigger(inView, cardDelayMs + NUMBER_DURATION_S * 1000);
  return (
    <CardShell
      number={`${Math.round(v)}%`}
      label="Every call answered. No exceptions."
      labelStart={labelStart}
    />
  );
};

const CountDownStat: React.FC<CardProps> = ({ inView, cardDelayMs }) => {
  const start = useDelayedTrigger(inView, cardDelayMs);
  const v = useTween(50, 0, NUMBER_DURATION_S, start);
  const labelStart = useDelayedTrigger(inView, cardDelayMs + NUMBER_DURATION_S * 1000);
  return (
    <CardShell
      number={Math.round(v)}
      label="Voicemails waiting for you"
      labelStart={labelStart}
    />
  );
};

const TypewriterStat: React.FC<CardProps> = ({ inView, cardDelayMs }) => {
  const start = useDelayedTrigger(inView, cardDelayMs);
  const typed = useTypewriter('Instant', TYPEWRITER_DURATION_S, start);
  const labelStart = useDelayedTrigger(inView, cardDelayMs + TYPEWRITER_DURATION_S * 1000);
  return (
    <CardShell
      number={
        <span>
          {typed}
          {start && typed.length < 'Instant'.length && (
            <span className="inline-block w-[0.06em] align-baseline" style={{ background: STAT_COLOR }}>
              &nbsp;
            </span>
          )}
        </span>
      }
      label="Picks up before the second ring."
      labelStart={labelStart}
    />
  );
};

const FadeStat: React.FC<CardProps> = ({ inView, cardDelayMs }) => {
  const start = useDelayedTrigger(inView, cardDelayMs);
  const labelStart = useDelayedTrigger(inView, cardDelayMs + FADE_DURATION_S * 1000);
  return (
    <CardShell
      number={
        <motion.span
          key={start ? 'on' : 'off'}
          initial={{ opacity: 0, y: 18 }}
          animate={start ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: FADE_DURATION_S, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          24/7
        </motion.span>
      }
      label="Nights, weekends, holidays. Always on."
      labelStart={labelStart}
    />
  );
};

// --- Section ----------------------------------------------------------------

export const WhileYoureWorking: React.FC = () => {
  const timeline = [
    { time: '8:15 AM', icon: <Wrench size={18} />, title: 'You start a water heater install', subtitle: 'Both hands busy. Phone in the truck.', color: 'blue' },
    { time: '8:32 AM', icon: <PhoneIncoming size={18} />, title: 'New customer calls about a leak', subtitle: 'Jevus answers on the first ring.', color: 'emerald' },
    { time: '8:33 AM', icon: <MessageSquare size={18} />, title: 'Jevus qualifies the lead', subtitle: 'Collects name, address, urgency, and issue details.', color: 'emerald' },
    { time: '8:34 AM', icon: <Calendar size={18} />, title: 'Job booked for 2 PM today', subtitle: 'Lands directly in your ServiceTitan calendar.', color: 'emerald' },
    { time: '8:35 AM', icon: <CheckCircle2 size={18} />, title: 'You get a text summary', subtitle: '"New Job: Kitchen leak at 4521 Oak Dr. Booked 2-4 PM."', color: 'violet' },
  ];

  // Stat grid in-view detection — once: false re-fires every time it scrolls in
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: false, margin: '-100px 0px -100px 0px' });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-violet/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-sm font-bold mb-8">
              <Wrench size={14} />
              <span>A DAY WITH JEVUS</span>
            </div>

            <h2 className="text-[clamp(1.625rem,6.2vw,3.5rem)] font-black text-white mb-6 leading-[1.1] tracking-tight">
              You Keep Working.<br />Jevus Keeps <span className="text-brand-violet">Booking.</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-lg">
              Here's what happens in 20 minutes while you're elbow-deep in a job.
            </p>

            <div className="space-y-1">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                      item.color === 'blue' ? 'bg-brand-blue/20 text-brand-blue' :
                      item.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
                      'bg-brand-violet/20 text-brand-violet'
                    }`}>
                      {item.icon}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px h-full min-h-[40px] bg-white/10"></div>
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="text-xs font-mono text-gray-600 mb-1">{item.time}</div>
                    <div className="text-white font-bold">{item.title}</div>
                    <div className="text-gray-400 text-sm">{item.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: 2x2 stat grid — animates sequentially, replays every scroll-in */}
          <div ref={statsRef} className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-7">
            <CountUpStat inView={statsInView} cardDelayMs={0} />
            <CountDownStat inView={statsInView} cardDelayMs={200} />
            <TypewriterStat inView={statsInView} cardDelayMs={400} />
            <FadeStat inView={statsInView} cardDelayMs={600} />
          </div>
        </div>
      </div>
    </section>
  );
};
