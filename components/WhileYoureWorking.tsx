import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wrench, PhoneIncoming, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react';

const STAT_COLOR = '#6366f1'; // indigo / brand blue

function useCountUp(target: number, durationSec: number, start: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - t0) / (durationSec * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationSec, start]);
  return value;
}

type StatCardProps = {
  value: React.ReactNode;
  label: string;
  inViewDelay: number;
};

const StatCard: React.FC<StatCardProps> = ({ value, label, inViewDelay }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.55, delay: inViewDelay, ease: 'easeOut' }}
    className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-9 lg:p-12 text-center transition-colors duration-500 hover:border-[color:var(--stat-color)]/50"
    style={{ ['--stat-color' as string]: STAT_COLOR }}
  >
    {/* Soft glow on hover */}
    <div
      className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background: `radial-gradient(circle at 50% 0%, ${STAT_COLOR}22, transparent 65%)`,
      }}
    />
    {/* Diagonal shimmer sweep on hover */}
    <div
      className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out"
      style={{
        background: `linear-gradient(110deg, transparent 35%, ${STAT_COLOR}1f 50%, transparent 65%)`,
      }}
    />

    <div
      className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-4 sm:mb-5"
      style={{ color: STAT_COLOR }}
    >
      {value}
    </div>
    <div className="relative text-xs sm:text-sm text-gray-400 font-medium leading-snug max-w-[180px] mx-auto">
      {label}
    </div>
  </motion.div>
);

export const WhileYoureWorking: React.FC = () => {
  const timeline = [
    { time: '8:15 AM', icon: <Wrench size={18} />, title: 'You start a water heater install', subtitle: 'Both hands busy. Phone in the truck.', color: 'blue' },
    { time: '8:32 AM', icon: <PhoneIncoming size={18} />, title: 'New customer calls about a leak', subtitle: 'Jevus answers on the first ring.', color: 'emerald' },
    { time: '8:33 AM', icon: <MessageSquare size={18} />, title: 'Jevus qualifies the lead', subtitle: 'Collects name, address, urgency, and issue details.', color: 'emerald' },
    { time: '8:34 AM', icon: <Calendar size={18} />, title: 'Job booked for 2 PM today', subtitle: 'Lands directly in your ServiceTitan calendar.', color: 'emerald' },
    { time: '8:35 AM', icon: <CheckCircle2 size={18} />, title: 'You get a text summary', subtitle: '"New Job: Kitchen leak at 4521 Oak Dr. Booked 2-4 PM."', color: 'violet' },
  ];

  // Trigger the count-up on the percentage stat when the stat grid enters view
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });
  const pct = useCountUp(100, 1.6, statsInView);

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

            <h2 className="text-[clamp(1.875rem,6.5vw,3.5rem)] font-black text-white mb-6 leading-[1.1] tracking-tight">
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

          {/* Right: 2x2 stat grid */}
          <div ref={statsRef} className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-7">
            <StatCard
              value={`${Math.round(pct)}%`}
              label="of calls answered. No exceptions."
              inViewDelay={0}
            />
            <StatCard
              value="0"
              label="voicemails waiting for you"
              inViewDelay={0.1}
            />
            <StatCard
              value={<>&lt;1s</>}
              label="to pick up. Faster than any human."
              inViewDelay={0.2}
            />
            <StatCard
              value="24/7"
              label="coverage. Nights, weekends, holidays."
              inViewDelay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
