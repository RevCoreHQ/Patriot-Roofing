import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { CTASection } from '@/components/sections/CTASection';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Gallery — Roofing & Home Repair Portfolio | Patriot Roofing NC',
  description: 'Browse our gallery of completed roofing, renovation, and home repair projects across Lexington, Greensboro, Winston-Salem, and surrounding NC communities.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: siteConfig.url },
        { name: 'Gallery', url: `${siteConfig.url}/gallery` },
      ])} />
      <div className="section-padding pb-0">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Gallery', href: '/gallery' }]} />
          <div className="max-w-3xl mb-4">
            <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">Our Work</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-4">
              Projects That Speak for Themselves
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every project represents a homeowner who trusted Patriot Roofing & Home Repair to protect and improve their home. Browse our work and see the quality for yourself.
            </p>
          </div>
        </div>
      </div>
      {/* Before/After */}
      <section className="section-padding pb-0">
        <div className="container-wide">
          <div className="text-center mb-8">
            <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
              <span className="w-6 h-px bg-accent-red" />
              <span className="gradient-text-accent">The Transformation</span>
              <span className="w-6 h-px bg-accent-red" />
            </p>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              See the Difference
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <BeforeAfterSlider />
          </div>
        </div>
      </section>

      <ProjectGrid />
      <CTASection headline="Love What You See?" description="Let's deliver the same quality for your home. Get a free inspection today." />
    </>
  );
}
