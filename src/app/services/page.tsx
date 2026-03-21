import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Services — Roofing, Renovations & Home Repair | Patriot Roofing NC',
  description: 'Explore our full range of services: roofing installation, roof replacement, roofing repair, kitchen renovation, bathroom renovation, and home repair in Lexington, NC.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: siteConfig.url },
        { name: 'Services', url: `${siteConfig.url}/services` },
      ])} />
      <div className="section-padding pb-0">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />
          <div className="max-w-3xl mb-4">
            <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">What We Do</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-4">
              Complete Roofing & Home Repair Services
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              From professional roofing installation and repair to kitchen and bathroom renovations, Patriot Roofing & Home Repair delivers every aspect of home improvement with 15+ years of craftsmanship.
            </p>
          </div>
        </div>
      </div>

      <ServiceCards title="Roofing Services" subtitle="Roofing" category="roofing" />
      <ServiceCards title="Renovation Services" subtitle="Renovations" category="renovation" />
      <ServiceCards title="Home Repair Services" subtitle="Repairs" category="repair" />

      <CTASection />
    </>
  );
}
