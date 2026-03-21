'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const manufacturers = [
  { name: 'GAF', tagline: 'Quality Roofing Products' },
  { name: 'Owens Corning', tagline: 'Trusted Manufacturer' },
  { name: 'CertainTeed', tagline: 'Premium Materials' },
  { name: 'Atlas Roofing', tagline: 'Reliable Products' },
  { name: 'TAMKO', tagline: 'Heritage of Quality' },
  { name: 'IKO', tagline: 'Industry Standard' },
];

export function ManufacturerStrip() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-12 lg:py-16 border-y border-slate-100 bg-white">
      <div ref={ref} className="container-wide">
        <p className="text-center text-xs font-medium tracking-[0.2em] uppercase text-slate-400 mb-8">
          Quality Materials from Trusted Manufacturers
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {manufacturers.map((m, i) => (
            <div
              key={m.name}
              className="flex flex-col items-center gap-1 px-5 py-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
              }}
            >
              <span className="text-lg lg:text-xl font-display font-bold text-slate-700 tracking-tight">
                {m.name}
              </span>
              <span className="text-[10px] font-medium tracking-wider uppercase text-slate-400">
                {m.tagline}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
