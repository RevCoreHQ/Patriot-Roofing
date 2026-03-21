'use client';

import { Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    id: '1',
    quote: "From the very first interaction, we were met with friendly and respectful service. The completed work was impressive and exceeded our expectations. Patriot Roofing truly cares about their customers and it shows in every detail of their work.",
    author: 'Mark O.',
    location: 'Lexington, NC',
    service: 'Roofing Installation',
    rating: 5,
  },
  {
    id: '2',
    quote: "Their expertise was evident from the start. The team was friendly, efficient, and completed the job in less time than expected. We couldn't be happier with our new roof. Highly recommend Patriot Roofing to anyone looking for quality work.",
    author: 'Kelly W.',
    location: 'Greensboro, NC',
    service: 'Roof Replacement',
    rating: 5,
  },
  {
    id: '3',
    quote: "Skilled and professional from start to finish. The communication was excellent throughout the entire project. They delivered a quality roof at a great price and finished on time. We will definitely use them again for future projects.",
    author: 'Walt K.',
    location: 'Winston-Salem, NC',
    service: 'Roofing Repair',
    rating: 5,
  },
];

function TestimonialCard({ t, index }: { t: (typeof testimonials)[number]; index: number }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-soft border border-slate-100 border-l-4 border-l-accent-red hover:shadow-card transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms`,
      }}
    >
      <span className="absolute top-4 right-5 text-6xl font-display text-brand-100/60 leading-none select-none pointer-events-none">
        &ldquo;
      </span>
      <div className="relative z-10">
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-slate-700 leading-relaxed mb-5 italic">
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
            <span className="text-sm font-bold text-brand-700">{t.author[0]}</span>
          </div>
          <div>
            <p className="font-semibold text-slate-900">{t.author}</p>
            <p className="text-sm text-slate-500">{t.location} · {t.service}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialCards() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="orb w-[300px] h-[300px] bg-brand-100/30 top-[10%] -right-[5%]" />
      <div className="container-wide relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
            <span className="w-6 h-px bg-accent-red" />
            <span className="gradient-text-accent">Client Experiences</span>
            <span className="w-6 h-px bg-accent-red" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
