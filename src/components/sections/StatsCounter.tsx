'use client';

import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  { value: 500, suffix: '+', label: 'Roofs Completed', prefix: '' },
  { value: 15, suffix: '+', label: 'Years of Experience', prefix: '' },
  { value: 99, suffix: '%', label: 'Customer Satisfaction', prefix: '' },
  { value: 0, suffix: '', label: 'Cost for Inspections', prefix: '$' },
];

function useCounter(target: number, active: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (target === 0) {
      setCount(0);
      return;
    }
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return count;
}

function StatItem({ stat, index, active }: { stat: (typeof stats)[number]; index: number; active: boolean }) {
  const count = useCounter(stat.value, active);

  return (
    <div
      className="text-center"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
      }}
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-2">
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div className="text-sm sm:text-base text-brand-200 font-medium tracking-wide uppercase">
        {stat.label}
      </div>
    </div>
  );
}

export function StatsCounter() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-700/20 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-red/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-red/40 to-transparent" />

      <div ref={ref} className="container-wide relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} active={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
