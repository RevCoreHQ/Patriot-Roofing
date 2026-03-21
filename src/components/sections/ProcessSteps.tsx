'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Free Inspection',
    description: 'We inspect your roof, identify any issues, and discuss your options with honest, straightforward recommendations.',
  },
  {
    number: '02',
    title: 'Detailed Estimate',
    description: 'You receive a transparent, written estimate with a clear scope of work. No hidden fees, no surprises.',
  },
  {
    number: '03',
    title: 'Professional Installation',
    description: 'Our experienced crew handles every detail of your project with quality materials and expert craftsmanship.',
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description: 'We walk the completed project with you, ensure everything meets your expectations, and leave your property clean.',
  },
];

function StepCard({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className="relative text-center lg:text-left"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
      }}
    >
      <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-50 to-brand-100 border-2 border-brand-200 mb-5 shadow-soft">
        <span className="text-xl font-display font-bold gradient-text">{step.number}</span>
        {index < steps.length - 1 && (
          <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-300" />
        )}
      </div>
      <h3 className="text-xl font-display font-semibold text-slate-900 mb-2">{step.title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
    </div>
  );
}

export function ProcessSteps() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="container-wide">
        <div className="text-center mb-12 lg:mb-16">
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
            <span className="w-6 h-px bg-accent-red" />
            <span className="gradient-text-accent">Our Process</span>
            <span className="w-6 h-px bg-accent-red" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900">
            From Inspection to Completion
          </h2>
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
