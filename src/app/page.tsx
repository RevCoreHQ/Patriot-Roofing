import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Home, Wrench } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ManufacturerStrip } from '@/components/sections/ManufacturerStrip';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { StatsCounter } from '@/components/sections/StatsCounter';
import { TestimonialCards } from '@/components/sections/TestimonialCards';
import { CTASection } from '@/components/sections/CTASection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = generatePageMetadata({
  title: 'Patriot Roofing & Home Repair | Roofing Contractor in Lexington, NC',
  description:
    'Professional roofing installation, roof replacement, repairs, and home renovations in Lexington, NC and surrounding areas. 15+ years experience. Licensed & insured. Free inspections.',
  path: '/',
});

const serviceCategories = [
  {
    icon: Shield,
    title: 'Roofing Services',
    description:
      'Professional roofing installation, replacement, and repair. We protect your home with quality materials and expert craftsmanship built to last.',
    href: '/services/roofing-installation',
    features: ['Installation', 'Replacement', 'Repair', 'Storm Damage'],
    image: '',
  },
  {
    icon: Home,
    title: 'Home Renovations',
    description:
      'Transform your kitchen or bathroom with professional renovation services. Modern upgrades that improve functionality and increase your home\'s value.',
    href: '/services/kitchen-renovation',
    features: ['Kitchen Remodel', 'Bathroom Remodel', 'Countertops', 'Flooring'],
    image: 'https://assets.cdn.filesafe.space/UrIbmSbNwH6Sfvb4CBZw/media/69cce4a3ddfdcb0abb7369c0.jpg',
  },
  {
    icon: Wrench,
    title: 'Home Repair',
    description:
      'Keep your property safe, functional, and well-maintained with our professional home repair services. No job is too small.',
    href: '/services/home-repair',
    features: ['Drywall', 'Painting', 'Doors & Windows', 'Siding'],
    image: 'https://assets.cdn.filesafe.space/UrIbmSbNwH6Sfvb4CBZw/media/69cce4a2c859392b982acd2a.jpg',
  },
];

const homeFaqs = [
  {
    question: 'How much does a roof replacement cost in North Carolina?',
    answer:
      'Roof replacement costs in North Carolina typically range from $8,000 to $25,000 depending on the size of your roof, materials chosen, and complexity of the job. We provide free, no-obligation estimates for every project.',
  },
  {
    question: 'Do you offer free inspections?',
    answer:
      'Yes. Every project begins with a free roof inspection where we assess your roof condition, identify any issues, and provide a detailed estimate with transparent pricing.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Lexington, Greensboro, Winston-Salem, High Point, Thomasville, Kernersville, Clemmons, and surrounding North Carolina communities. Contact us to confirm service availability at your location.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Absolutely. Patriot Roofing & Home Repair is fully licensed and insured. We carry comprehensive liability coverage for your protection.',
  },
  {
    question: 'Do you help with insurance claims for storm damage?',
    answer:
      'Yes. We work with your insurance company throughout the claims process, from the initial inspection to the final repair. We document all damage and communicate directly with your adjuster to help ensure fair coverage.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Protecting Homes with Quality Roofing & Repairs"
        subheadline="Lexington, NC's Trusted Roofing Contractor"
        description="Professional roofing installation, replacement, and repairs, plus expert home renovations from a team with over 15 years of experience serving Lexington and surrounding communities."
      />

      <TrustStrip />

      <ManufacturerStrip />

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
              <span className="w-6 h-px bg-accent-red" />
              <span className="gradient-text-accent">What We Do</span>
              <span className="w-6 h-px bg-accent-red" />
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4">
              Reliable Roofing & Home Repair Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From roofing installation and repair to kitchen and bathroom renovations, Patriot Roofing delivers quality workmanship you can count on.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group relative bg-white rounded-2xl border border-slate-100 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-red via-accent-red-light to-accent-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Card image */}
                  <div className="relative h-48 overflow-hidden">
                    {cat.image ? (
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 image-placeholder-premium flex items-center justify-center">
                        <span className="text-white/20 text-xs font-medium tracking-widest uppercase">Photo Coming Soon</span>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center mb-6 group-hover:from-brand-100 group-hover:to-brand-200 transition-all duration-300 shadow-sm -mt-12 relative z-10 border-2 border-white">
                    <Icon className="w-7 h-7 text-brand-700" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-5">
                    {cat.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cat.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 text-xs font-medium bg-slate-50 text-slate-600 rounded-full border border-slate-200"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                    Explore Services <ArrowRight className="w-4 h-4" />
                  </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSteps />

      <StatsCounter />

      {/* Projects Preview */}
      <section className="section-padding bg-gradient-to-b from-slate-50 via-slate-50 to-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
              <span className="w-6 h-px bg-accent-red" />
              <span className="gradient-text-accent">Our Work</span>
              <span className="w-6 h-px bg-accent-red" />
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4">
              Projects That Speak for Themselves
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Browse our portfolio of completed roofing, renovation, and home repair projects across the Piedmont Triad.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="image-placeholder-premium aspect-[4/3] rounded-2xl shadow-soft">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 text-xs font-medium tracking-widest uppercase">Photo Coming Soon</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/gallery">View Full Gallery</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCards />

      {/* FAQ */}
      <FAQAccordion
        faqs={homeFaqs}
        title="Frequently Asked Questions"
        subtitle="Common Questions"
      />

      {/* CTA */}
      <CTASection />
    </>
  );
}
