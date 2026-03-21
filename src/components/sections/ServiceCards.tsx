'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services, ServiceData } from '@/data/services';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ServiceCardsProps {
  category?: ServiceData['category'];
  limit?: number;
  title?: string;
  subtitle?: string;
}

function ServiceCard({ service, index }: { service: ServiceData; index: number }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms`,
      }}
    >
    <Link
      href={`/services/${service.slug}`}
      className="group relative block bg-white rounded-2xl border border-slate-100 p-6 lg:p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 mb-6 rounded-xl overflow-hidden image-placeholder-premium">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/20 text-xs font-medium tracking-widest uppercase">Photo Coming Soon</span>
        </div>
      </div>
      <div className="inline-block px-2.5 py-1 text-xs font-medium bg-brand-50 text-brand-700 rounded-full mb-3 capitalize">
        {service.category}
      </div>
      <h3 className="text-xl font-display font-semibold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
        {service.intro}
      </p>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 group-hover:gap-2.5 transition-all">
        Learn More <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
    </div>
  );
}

export function ServiceCards({ category, limit, title, subtitle }: ServiceCardsProps) {
  let items = category ? services.filter((s) => s.category === category) : services;
  if (limit) items = items.slice(0, limit);

  return (
    <section className="section-padding">
      <div className="container-wide">
        {title && (
          <div className="text-center mb-12 lg:mb-16">
            {subtitle && (
              <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">
                {subtitle}
              </p>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900">
              {title}
            </h2>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
